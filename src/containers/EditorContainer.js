import React, { Component } from "react";

import Editor from "../components/Editor/Editor";
import Button from "../components/Button/Button";

class EditorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#000"
    };
  }
  render() {
    return (
      <div>
        <div className="button-row">
          <Button fontIcon="pencil" buttonText="Edit" />
          <Button fontIcon="rocket" buttonText="Test" />
        </div>
        <div className="editor-area">
          <Editor
            rowCount="40"
            colCount="300"
            color={this.state.color}
            handleChange={this.handleTextUpdate}
          />
        </div>
      </div>
    );
  }
}

export default EditorContainer;
