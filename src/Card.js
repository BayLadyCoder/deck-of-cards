import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    // transform: translate(10px, 20px) rotate(20deg);
    let angle = Math.random() * 90 - 45;
    let xPosition = Math.random() * 40 - 20;
    let yPosition = Math.random() * 40 - 20;
    this._transform = `translate(${xPosition}px, ${yPosition}px) rotate(${angle}deg)`;
    // this._ is to make it stay in this value for each card,
    // so it will not change value to the old cards every time the component renders
  }

  render() {
    return (
      <img
        style={{ transform: this._transform }}
        src={this.props.img}
        alt={this.props.name}
        className="Card"
      />
    );
  }
}

export default Card;
