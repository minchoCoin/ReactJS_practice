const root = document.querySelector(".root");
const span = React.createElement("span",{class:"TEST"},"hello world!");
const btn = React.createElement("button",null,"click me");
ReactDOM.render(span, root );