import React, { Component } from "react";

import "./dropDown.css";

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  showMenu(event) {
    event.preventDefault();

    let menuShow = this.state.showMenu;
    this.setState({
      showMenu: !menuShow
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Dropdown Menu</button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropDownMenu = element;
            }}
          >
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
