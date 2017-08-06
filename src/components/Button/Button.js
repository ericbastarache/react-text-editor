import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        <FontAwesome name={this.props.fontIcon} />
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
