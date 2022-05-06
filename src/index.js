import React from "react";
import ReactDOM  from "react-dom";

const name= "Pedro";
const lname= "Enrique";


ReactDOM.render(
  <div>
    <h1>Hello! {name + " "+ lname}</h1>
    <p>My looki number is {Math.floor(Math.random()*10)}</p>
    
  </div>,document.getElementById("root")
);
