(this["webpackJsonpreact-typewriter"]=this["webpackJsonpreact-typewriter"]||[]).push([[2],{210:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(39),c=a(31),i=a(0),l=a.n(i),u=a(111),o=a(205),s=a(208),p=a(203),b=a(207),m=a(209),d=a(79),j=a(37),O=a(87),f=Object(o.a)({paper:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},paper1:{position:"absolute",left:"85%",top:"25%",transform:"translate(-85%, -25%)"}}),v=function(){var e,t,a=f(),o=Object(i.useRef)(),v=Object(i.useState)((e={},Object(r.a)(e,d.c,""),Object(r.a)(e,d.a,""),e)),E=Object(c.a)(v,2),h=E[0],x=E[1],g=Object(i.useState)((t={},Object(r.a)(t,d.d,!1),Object(r.a)(t,d.b,!0),Object(r.a)(t,d.a,!0),t)),y=Object(c.a)(g,2),I=y[0],T=y[1],w=Object(i.useContext)(j.a),S=Object(c.a)(w,2),k=(S[0],S[1],Object(i.useState)(60)),L=Object(c.a)(k,2),P=L[0],W=L[1],C=Object(i.useState)({typeTimeout:null,countdownTimerId:null}),D=Object(c.a)(C,2),R=D[0],A=D[1];Object(i.useEffect)((function(){return x((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(r.a)({},d.c,Object(u.paragraph)(10)))})),function(){}}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{className:a.paper,variant:"outlined"},l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement(b.a,{type:"sample-text",id:"sample-text",label:"Sample Text",placeholder:"Sample Text",name:d.c,fullWidth:!0,value:h[d.c],variant:"outlined",multiline:!0,rows:10,InputLabelProps:{shrink:!0}})),l.a.createElement(p.a,{item:!0,xs:12,md:2},l.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){T((function(e){var t;return Object(n.a)(Object(n.a)({},e),{},(t={},Object(r.a)(t,d.d,!0),Object(r.a)(t,d.b,!1),Object(r.a)(t,d.a,!1),t))})),o.current.focus();var e=setTimeout((function(){T((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(r.a)({},d.a,!0))}))}),6e4);A((function(t){return Object(n.a)(Object(n.a)({},t),{},{typeTimeout:e})})),function(){var e=setInterval((function(){W((function(t){return 1===t?(clearInterval(e),clearInterval(R.countdownTimerId),T((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(r.a)({},d.a,!0))})),t-1):t-1}))}),1e3);A((function(t){return Object(n.a)(Object(n.a)({},t),{},{countdownTimerId:e})}))}()},disabled:I[d.d]},"Start")),l.a.createElement(p.a,{item:!0,xs:12,md:2},l.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){x((function(e){var t;return Object(n.a)(Object(n.a)({},e),{},(t={},Object(r.a)(t,d.c,Object(u.paragraph)(10)),Object(r.a)(t,d.a,""),t))})),T((function(e){var t;return Object(n.a)(Object(n.a)({},e),{},(t={},Object(r.a)(t,d.d,!1),Object(r.a)(t,d.b,!0),Object(r.a)(t,d.a,!0),t))})),clearInterval(R.countdownTimerId),W(60)},disabled:I[d.b]},"Reset")),l.a.createElement(p.a,{item:!0,xs:12,md:8},l.a.createElement(O.a,{countdown:P,inputData:h,setInputData:x})),l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement(b.a,{type:"input-text",id:"input-text",label:"Input Text",placeholder:"Input Text",name:d.a,fullWidth:!0,value:h[d.a],variant:"outlined",multiline:!0,rows:10,onChange:function(e){var t=e.target,a=t.name,c=t.value;I[d.a]||x((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(r.a)({},a,c))}))},inputRef:o,required:!0,InputLabelProps:{shrink:!0}})))))};t.default=v},79:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return i}));var n="sample-text",r="input-text",c="start-button",i="reset-button"},87:function(e,t,a){"use strict";var n=a(31),r=a(0),c=a.n(r),i=(a(95),a(203)),l=a(207),u=a(204),o=a(79);t.a=function(e){var t=e.countdown,a=e.inputData,s=Object(r.useState)(0),p=Object(n.a)(s,2),b=p[0],m=p[1],d=Object(r.useState)(0),j=Object(n.a)(d,2),O=j[0],f=j[1];return Object(r.useEffect)((function(){console.log(a[o.a].split(" "));!function(){var e=a[o.a].split(" ");e.length>1&&m(e.length/5/((60-t)/60))}(a[o.a]);!function(){var e=a[o.a].trim(" ").split(" ").filter((function(e){return!a[o.c].split(" ").includes(e)})),t=e.length;console.log(">>>>>>>>",e,t),f(t)}(a[o.a])}),[t,a]),c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{container:!0,spacing:2},c.a.createElement(i.a,{item:!0,xs:12,md:4},c.a.createElement(l.a,{type:"text",id:"time-left",label:"Time Left",placeholder:"Time Left",name:"time-left",fullWidth:!0,value:t,variant:"outlined",InputLabelProps:{shrink:!0},InputProps:{endAdornment:c.a.createElement(u.a,{position:"start"},"sec")}})),c.a.createElement(i.a,{item:!0,xs:12,md:4},c.a.createElement(l.a,{type:"text",id:"typing-speed",label:"Typing Speed",placeholder:"Typing Speed",name:"typing-speed",fullWidth:!0,value:a[o.a]?b:0,variant:"outlined",InputLabelProps:{shrink:!0},InputProps:{endAdornment:c.a.createElement(u.a,{position:"start"},"/min")}})),c.a.createElement(i.a,{item:!0,xs:12,md:4},c.a.createElement(l.a,{type:"text",id:"typing-errors",label:"Typing Errors",placeholder:"Typing Errors",name:"typing-errors",fullWidth:!0,value:a[o.a]?O:0,variant:"outlined",InputLabelProps:{shrink:!0}}))))}}}]);
//# sourceMappingURL=TypeWriter.106a653f.chunk.js.map