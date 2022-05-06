import React from "react";
import ReactDom from "react-dom";

const name ="pedro";
const curretDate = new Date();
const year = curretDate.getFullYear();
ReactDom.render(<div>
  <p>Created by {name}</p>
  <p>Copyrigth {year}</p>
</div>, document.getElementById("root"));

