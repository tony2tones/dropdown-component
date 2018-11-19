import React, { Component } from "react";
import DropDown from "./dropDown/dropdown";
import SimpleMenu from "./materialdropDown/materialdropDown";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>DropDown menu practice</p>
          <DropDown />
          <br />
          <SimpleMenu  />
      </div>
    );
  }
}

export default App;
