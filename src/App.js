import React, { Component } from "react";
import PadContainer from "./Components/PadContainer";
import Controls from "./Components/Controls";
import "./css/App.css";

class App extends Component {
  state = {
    buttonId: "",
    power: false,
    volume: 5,
    mute: false,
  };

  handleClick = (id, keyTrigger) => {
    if (this.state.power) {
      const sound = document.getElementById(keyTrigger);
      sound.currentTime = 0;
      sound.volume = this.state.mute ? 0 : this.state.volume / 10;
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

  handleVolClick = (e) => {
    if (e.target.id === "volup" && this.state.volume < 10) {
      this.setState((prevState) => ({ volume: prevState.volume + 1 }));
    } else if (e.target.id === "voldown" && this.state.volume > 0) {
      this.setState((prevState) => ({ volume: prevState.volume - 1 }));
    } else if (e.target.id === "volmute") {
      this.setState((prevState) => ({ mute: !prevState.mute }));
    }
  };

  render() {
    const { buttonId, power, volume, mute } = this.state;
    return (
      <div className="App">
        <h1 className="header">Drum Machine</h1>
        <div className="drumMachine">
          <PadContainer handleClick={this.handleClick} />
          <Controls
            buttonId={buttonId}
            power={power}
            volume={volume}
            mute={mute}
            handlePowerClick={this.handlePowerClick}
            handleVolClick={this.handleVolClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
