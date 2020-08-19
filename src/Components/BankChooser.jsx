import React, { Component } from "react";
import "../css/App.css";

class BankChooser extends Component {
  state = {
    power: false,
    bank: "bankOne",
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ power: this.props.power, bank: this.props.bank });
    }
  }
  render() {
    const { power, bank } = this.state;
    return (
      <div className="bankContainer">
        <div className="bank">
          <p>Bank One</p>
          <button
            className={
              power
                ? bank === "bankOne"
                  ? "buttonActive"
                  : "button"
                : "button"
            }
            id="button1"
            onClick={this.props.handleBankClick}
          />
        </div>
        <div className="bank">
          <button
            className={
              power
                ? bank === "bankTwo"
                  ? "buttonActive"
                  : "button"
                : "button"
            }
            id="button2"
            onClick={this.props.handleBankClick}
          />
          <p>Bank Two</p>
        </div>
      </div>
    );
  }
}

export default BankChooser;
