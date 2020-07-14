import React, { useRef, useState, useEffect, useContext } from 'react';
import { paragraph } from 'txtgen';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, TextField, Button } from '@material-ui/core';
import {
  SAMPLE_TEXT,
  INPUT_TEXT,
  START_BUTTON,
  RESET_BUTTON,
} from '../Constants/TypeWriter_Constants';
import { TypeContext } from '../../ContextProvider/TypeContext';
import Results from '../../Results/Components/Results';

const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  // paper1: {
  //   position: 'absolute',
  //   left: '83%',
  //   top: '17%',
  //   transform: 'translate(-83%, -17%)',
  // },
  paper1: {
    position: 'absolute',
    left: '85%',
    top: '25%',
    transform: 'translate(-85%, -25%)',
  },
});

// const addStyle = makeStyles({
//   paper: {
//     position: 'fixed',
//     left: '70%',
//     top: '30%',
//     transform: 'translate(-70%, -30%)',
//   },
// })

const TypeWriter = () => {
  const classes = useStyles();
  const inputRef = useRef();
  const [inputData, setInputData] = useState({
    [SAMPLE_TEXT]: '',
    [INPUT_TEXT]: '',
  });
  const [disableData, setDisableData] = useState({
    [START_BUTTON]: false,
    [RESET_BUTTON]: true,
    [INPUT_TEXT]: true,
  });
  const [typeState, dispatch] = useContext(TypeContext);
  const [timeLeft, setTimeLeft] = useState(60);
  const [time, setTime] = useState({
    typeTimeout: null,
    countdownTimerId: null,
  });

  useEffect(() => {
    setInputData((prevData) => ({ ...prevData, [SAMPLE_TEXT]: paragraph(10) }));

    return () => {};
  }, []);

  // const Timer = () => {
  //   const intervalId = setInterval(() => {
  //     setTimeLeft((prevData) => {
  //       if (prevData === 0) {
  //         clearInterval(intervalId);
  //         return '00';
  //       }
  //       return prevData - 1;
  //     });
  //   }, 1000);
  // };

  const CountdownTimer = () => {
    const countdownTimerId = setInterval(() => {
      setTimeLeft((prevData) => {
        if (prevData === 1) {
          clearInterval(countdownTimerId);
          clearInterval(time.countdownTimerId);
          setDisableData((prevData) => ({
            ...prevData,
            [INPUT_TEXT]: true,
          }));
          return prevData - 1;
        }
        return prevData - 1;
      });
    }, 1000);
    setTime((prevData) => ({ ...prevData, countdownTimerId }));
  };

  const handleStart = () => {
    setDisableData((prevData) => ({
      ...prevData,
      [START_BUTTON]: true,
      [RESET_BUTTON]: false,
      [INPUT_TEXT]: false,
    }));
    inputRef.current.focus();
    const typeTimeout = setTimeout(function () {
      setDisableData((prevData) => ({
        ...prevData,
        [INPUT_TEXT]: true,
      }));
    }, 60000);
    setTime((prevData) => ({ ...prevData, typeTimeout }));
    CountdownTimer();
  };

  const handleReset = () => {
    setInputData((prevData) => ({
      ...prevData,
      [SAMPLE_TEXT]: paragraph(10),
      [INPUT_TEXT]: '',
    }));
    setDisableData((prevData) => ({
      ...prevData,
      [START_BUTTON]: false,
      [RESET_BUTTON]: true,
      [INPUT_TEXT]: true,
    }));
    clearInterval(time.countdownTimerId);
    setTimeLeft(60);
  };

  // const handleInput = () => (e) => {
  //   const { name, value } = e.target;
  //   if (!disableData[INPUT_TEXT]) setInputData({ ...inputData, [name]: value });
  // };

  const handleInput = () => (e) => {
    const { name, value } = e.target;
    if (!disableData[INPUT_TEXT]) {
      setInputData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return (
    <>
      <Box className={classes.paper} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              type="sample-text"
              id="sample-text"
              label="Sample Text"
              placeholder="Sample Text"
              name={SAMPLE_TEXT}
              fullWidth
              value={inputData[SAMPLE_TEXT]}
              variant="outlined"
              multiline
              rows={10}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStart}
              disabled={disableData[START_BUTTON]}
            >
              Start
            </Button>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleReset}
              disabled={disableData[RESET_BUTTON]}
            >
              Reset
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <Results
              countdown={timeLeft}
              inputData={inputData}
              setInputData={setInputData}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              type="input-text"
              id="input-text"
              label="Input Text"
              placeholder="Input Text"
              name={INPUT_TEXT}
              fullWidth
              value={inputData[INPUT_TEXT]}
              variant="outlined"
              multiline
              rows={10}
              onChange={handleInput()}
              inputRef={inputRef}
              // disabled={disableData[INPUT_TEXT]}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TypeWriter;
