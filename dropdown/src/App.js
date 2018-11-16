import React, { Component } from "react";
import DropDown from "./dropDown/dropdown";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>DropDown menu practice</p>
        <DropDown />
      </div>
    );
  }
}

export default App;
