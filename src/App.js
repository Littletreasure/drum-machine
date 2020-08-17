import React, { Component } from "react";
import PadContainer from "./Components/PadContainer";
import Controls from "./Components/Controls";
import "./css/App.css";

class App extends Component {
  state = {
    buttonId: "",
    power: true,
  };

  handleClick = (id, keyTrigger) => {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.setState({ buttonId: id });
  };
  render() {
    return (
      <div className="App">
        <h1 className="header">Drum Machine</h1>
        <div className="drumMachine">
          <PadContainer handleClick={this.handleClick} />
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
