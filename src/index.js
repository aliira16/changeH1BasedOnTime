//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const root = document.getElementById("root");
let custem = {
  color: "red",
};

let dayNight = "";
const time = new Date().getHours();

if (0 <= time && time <= 12) {
  dayNight = "Good morning";
} else if (13 <= time && time <= 18) {
  dayNight = "Good Afternoon";
  custem = {
    color: "green",
  };
} else {
  dayNight = "Good evening";
  custem = {
    color: "blue",
  };
}

ReactDom.render(
  <div>
    <h1 class="heading" style={custem}>
      {dayNight}
    </h1>
    <h1 style={custem}>{time}</h1>
  </div>,
  root
);
