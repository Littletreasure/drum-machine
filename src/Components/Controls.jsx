import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

import "../css/App.css";

class Controls extends Component {
  state = {};
  render() {
    const {
      handlePowerClick,
      handleVolClick,
      power,
      volume,
      mute,
    } = this.props;
    return (
      <div className="controls">
        <div className="powerLine">
          <p id="power">Power</p>
          <FontAwesomeIcon
            icon={faPowerOff}
            onClick={handlePowerClick}
            className={power ? "powerOn" : "powerOff"}
          />
        </div>
        <div className="volume">
          <p>Volume {power ? (mute ? 0 : volume) : ""}</p>
          <div className="volumeIcons">
            <div id="box">
              <FontAwesomeIcon
                id="volup"
                icon={faVolumeUp}
                onClick={handleVolClick}
              />
            </div>
            <div id="box">
              <FontAwesomeIcon
                id="voldown"
                icon={faVolumeDown}
                onClick={handleVolClick}
              />
            </div>
            <div id="box">
              <FontAwesomeIcon
                id="volmute"
                icon={faVolumeMute}
                onClick={handleVolClick}
              />
            </div>
          </div>
        </div>
        <p className="display">{this.props.buttonId}</p>
      </div>
    );
  }
}

export default Controls;
