import React, { Component } from "react";

class Heart extends Component {
  state = {
    isSelected: false,
  };
  render() {
    return <i onClick={this.handleToggle} className={this.getHeartClass()}></i>;
  }
  handleToggle = () => {
    let state = !this.state.isSelected;
    console.log(state);
    this.setState({ isSelected: state });
  };

  getHeartClass() {
    let className = "fa fa-heart";
    return this.state.isSelected ? className : className + "-o";
  }
}

export default Heart;
