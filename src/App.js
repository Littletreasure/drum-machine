import React, { Component } from "react";
import PadContainer from "./Components/PadContainer";
import Controls from "./Components/Controls";
import "./css/App.css";

class App extends Component {
  state = {
    buttonID: "",
    power: true,
  };
  render() {
    return (
      <div className="App">
        <h1 className="header">Drum Machine</h1>
        <div className="drumMachine">
          <PadContainer />
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
