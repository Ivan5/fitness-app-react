import React, { Component } from "react";
import exerciseImg from "../images/exercise.png";
import circlesImg from "../images/circles.png";
import "./styles/Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: exerciseImg
    };
  }
  render() {
    return (
      <div
        className="card mb-2 mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${
            this.props.leftColor
          }, ${this.props.rightColor})`
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={this.props.img} className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
