import React, { Component } from "react";
import "../css/App.css";

class DrumPad extends Component {
  state = {};
  render() {
    const { id, keyTrigger, url, handleClick } = this.props;
    return (
      <p
        className="drum-pad"
        id={id}
        onClick={() => handleClick(id, keyTrigger)}
      >
        <audio className="clip" id={keyTrigger} src={url}></audio>
        {keyTrigger}
      </p>
    );
  }
}

export default DrumPad;
