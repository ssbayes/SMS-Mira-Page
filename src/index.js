// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import PersonCard from "./PersonCard";
import mira1 from "./images/mira-1.jpg";
import mira2 from "./images/mira-2.jpg";
import mikuchiku from "./images/miku_chiku-1.png";

// Create a react component
const App = () => {
  return (
    <div>
      <h1>hi shreya</h1>
      <PersonCard
        name="Mira"
        image={mira2}
        tagline="Royal detective"
        description="Shreya's favourite character."
      />
      <PersonCard
        name="Miku Chiku"
        image={mikuchiku}
        tagline="Mongooses"
        description="Mira's funny partners."
      />
    </div>
  );
};

console.log("Current directory: " + process.cwd());

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
