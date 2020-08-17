import React, { Component } from "react";
import PadContainer from "./Components/PadContainer";
import Controls from "./Components/Controls";
import "./css/App.css";

class App extends Component {
  state = {
    buttonId: "",
    power: false,
  };

  handleClick = (id, keyTrigger) => {
    if (this.state.power) {
      const sound = document.getElementById(keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.setState({ buttonId: id });
    }
  };

  handlePowerClick = () => {
    this.setState((prevState) => ({
      power: !prevState.power,
      buttonId: "",
    }));
  };

  render() {
    const { buttonId, power } = this.state;
    return (
      <div className="App">
        <h1 className="header">Drum Machine</h1>
        <div className="drumMachine">
          <PadContainer handleClick={this.handleClick} />
          <Controls
            buttonId={buttonId}
            power={power}
            handlePowerClick={this.handlePowerClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
