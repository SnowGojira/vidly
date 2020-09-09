import React, { Component } from "react";

class Heart extends Component {
  state = {
    isSelected: false,
  };
  render() {
    let { onSelected, movie } = this.props;
    return (
      <i onClick={() => onSelected(movie)} className={this.getHeartClass()}></i>
    );
  }
  handleToggle = () => {
    let state = !this.state.isSelected;
    this.setState({ isSelected: state });
  };

  getHeartClass() {
    let className = "fa fa-heart";
    return this.props.liked ? className : className + "-o";
  }
}

export default Heart;
