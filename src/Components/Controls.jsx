import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

import "../css/App.css";

class Controls extends Component {
  state = {};
  render() {
    return (
      <div className="controls">
        <div className="powerLine">
          <p>Power</p>
          <FontAwesomeIcon
            icon={faPowerOff}
            onClick={this.props.handlePowerClick}
            className={this.props.power ? "powerOn" : "powerOff"}
          />
        </div>
        <p className="display">{this.props.buttonId}</p>
      </div>
    );
  }
}

export default Controls;
