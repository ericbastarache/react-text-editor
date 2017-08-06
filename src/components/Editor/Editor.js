import React, { Component } from "react";
import "./Editor.css";

class Editor extends Component {
  render() {
    return (
      <textarea
        rows={this.props.rowCount}
        cols={this.props.colCount}
        color={this.props.textColor}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default Editor;
