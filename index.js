import React from "react";
import ReactDom from "react-dom";
const fname = "shahnawaz";
const lname = "Alam";
const currDat=new Date().toLocaleDateString();
const currt=new Date().toLocaleTimeString();
ReactDom.render(
<>
{/* <h1>Netflix serise Pick Up</h1>
<p>please choose the one best series from out of list of 5 serise</p>
<ol>
  <li>Narnia</li>
  <li>Narnia</li>
  <li>Narnia</li>
  <li>Narnia</li>
  <li>Narnia</li>
</ol>
<p>hello {name} {Math.random()}</p> */}
{/* <h1>{`my first name is ${fname} and my last name is ${lname}`}</h1> */}
<h1>{`My Name is ${fname}`}</h1>
<p>{`Current Date ${currDat}`}</p>
<p>{`Current Time ${currt}`}</p>
</>,
document.getElementById("root")
);