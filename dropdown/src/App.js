import React, { Component } from "react";
import DropDown from "./dropDown/dropdown";
import MaterialdropDown from "./materialdropDown/materialdropDown";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>DropDown menu practice</p>
        <DropDown />
        <br />
        <MaterialdropDown />
      </div>
    );
  }
}

export default App;
