import React, { Component } from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import "./materialdropDown.css";

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}


class MaterialdropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        {items}
      </DropDownMenu>
    );
  }
}

export default MaterialdropDown;
