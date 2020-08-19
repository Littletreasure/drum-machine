import React, { Component } from "react";
import PadContainer from "./Components/PadContainer";
import Controls from "./Components/Controls";
import BankChooser from "./Components/BankChooser";
import "./css/App.css";

class App extends Component {
  state = {
    buttonId: "",
    power: false,
    volume: 5,
    mute: false,
    bank: "bankOne",
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
    const id = e.currentTarget.id;
    if (id === "volup" && this.state.volume < 10) {
      this.setState((prevState) => ({ volume: prevState.volume + 1 }));
    } else if (id === "voldown" && this.state.volume > 0) {
      this.setState((prevState) => ({ volume: prevState.volume - 1 }));
    } else if (id === "volmute") {
      this.setState((prevState) => ({ mute: !prevState.mute }));
    }
  };

  handleBankClick = (e) => {
    if (e.currentTarget.id === "button1") {
      this.setState({ bank: "bankOne" });
    } else {
      this.setState({ bank: "bankTwo" });
    }
  };

  render() {
    const { buttonId, power, volume, mute, bank } = this.state;
    return (
      <div className="App">
        <h1 className="header">Drum Machine</h1>
        <div className="drumMachine">
          <PadContainer handleClick={this.handleClick} bank={bank} />
          <BankChooser
            power={power}
            handleBankClick={this.handleBankClick}
            bank={bank}
          />
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
