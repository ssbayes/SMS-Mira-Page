// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import PersonCard from "./PersonCard";
import mira1 from "./images/mira-1.jpg";
import mira2 from "./images/mira-2.jpg";
import mikuchiku from "./images/miku_chiku-1.png";
import chotu from "./images/chotu.png";
import priya from "./images/priya.png";
import queen from "./images/queenshanti.png";
// Create a react component
const App = () => {
  return (
    <div>
      <h1>hi shreya</h1>
      <hr />
      <PersonCard
        name="Mira"
        image={mira2}
        tagline="Royal detective"
        description="Shreya's favourite character."
        age="8"
      />
      <PersonCard
        name="Priya"
        image={priya}
        tagline=" Mira's cousin sister"
        description="Shreya's favourite character."
        age="8"
      />
      <PersonCard
        name="Queen Shanti"
        image={queen}
        tagline=" Queen of Jalpur"
        description="She has two sons - Veer & neel."
        age="39"
      />

      <PersonCard
        name="Miku Chiku"
        image={mikuchiku}
        tagline="Mongooses"
        description="Mira's funny partners."
        age="4 & 2.5"
      />

      <PersonCard
        name="Chotu"
        image={chotu}
        tagline="Young boy"
        description="Auntie Pushpa's son. Meena and Priya's brother."
        age="2"
      />
    </div>
  );
};

console.log("Current directory: " + process.cwd());

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
