import React, { Component } from "react";
import DrumPad from "./DrumPad";
import { bankOne, bankTwo } from "../data";
import "../css/App.css";

class PadContainer extends Component {
  state = {
    bank: "bankOne",
    drums: bankOne,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  componentDidUpdate(prevProps) {
    if (this.props.bank !== prevProps.bank) {
      if (this.props.bank === "bankOne") {
        this.setState({ drums: bankOne });
      } else {
        this.setState({ drums: bankTwo });
      }
    }
  }
  handleKeyPress = (e) => {
    const result = this.state.drums.filter(
      (drum) => drum.keyCode === e.keyCode
    );
    if (result.length > 0) {
      this.props.handleClick(result[0].id, result[0].keyTrigger);
    }
  };

  render() {
    const { drums } = this.state;
    return (
      <div className="pad-container">
        {drums.map((drum) => {
          return (
            <DrumPad
              id={drum.id}
              key={drum.keyTrigger}
              keyTrigger={drum.keyTrigger}
              url={drum.url}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default PadContainer;
