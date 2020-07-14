import React, { useState, useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import {
  SAMPLE_TEXT,
  INPUT_TEXT,
} from '../../TypeWriter/Constants/TypeWriter_Constants';

const Results = ({ countdown, inputData }) => {
  const [wpm, setWPM] = useState(0);
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    console.log(inputData[INPUT_TEXT].split(' '));
    const calculateWPM = () => {
      const arr = inputData[INPUT_TEXT].split(' ');
      if (arr.length > 1) {
        setWPM(arr.length / 5 / ((60 - countdown) / 60));
      }
    };
    calculateWPM(inputData[INPUT_TEXT]);
    const calculateErrors = () => {
      // const count = isEqual(
      //   inputData[INPUT_TEXT].split(' '),
      //   inputData[SAMPLE_TEXT].split(' ')
      // );
      // const count =
      //   JSON.stringify(inputData[INPUT_TEXT].split(' ')) ===
      //   JSON.stringify(inputData[SAMPLE_TEXT].split(' '));
      const count = inputData[INPUT_TEXT].trim(' ')
        .split(' ')
        .filter((val) => !inputData[SAMPLE_TEXT].split(' ').includes(val));
      const numOfErrors = count.length;
      console.log('>>>>>>>>', count, numOfErrors);
      setErrors(numOfErrors);
    };
    calculateErrors(inputData[INPUT_TEXT]);
  }, [countdown, inputData]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            type="text"
            id="time-left"
            label="Time Left"
            placeholder="Time Left"
            name="time-left"
            fullWidth
            value={countdown}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">sec</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="text"
            id="typing-speed"
            label="Typing Speed"
            placeholder="Typing Speed"
            name="typing-speed"
            fullWidth
            value={inputData[INPUT_TEXT] ? wpm : 0}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">/min</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="text"
            id="typing-errors"
            label="Typing Errors"
            placeholder="Typing Errors"
            name="typing-errors"
            fullWidth
            value={inputData[INPUT_TEXT] ? errors : 0}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Results;
