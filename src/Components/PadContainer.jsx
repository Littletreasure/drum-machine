import React, { Component } from "react";
import DrumPad from "./DrumPad";
import drumData from "../data";
import "../css/App.css";

class PadContainer extends Component {
  state = {
    drums: drumData,
  };
  render() {
    const { drums } = this.state;
    return (
      <div className="pad-container">
        {drums.map((drum) => {
          return (
            <DrumPad
              id={drum.id}
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
