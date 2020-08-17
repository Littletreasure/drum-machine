import React, { Component } from "react";
import drumData from "../data";
import "../css/App.css";

class PadContainer extends Component {
  state = {
    drums: drumData,
  };
  render() {
    return <p>Pad Container</p>;
  }
}

export default PadContainer;
