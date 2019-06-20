import React from "react";
import ReactDom from "react-dom";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.css";
import exerciseImg from "./images/exercise.png";
const container = document.getElementById("root");

ReactDom.render(
  <div>
    <Welcome username="Christ" />
    <Card
      title="Technique Guides"
      description="Learn amazing street workout and calisthenics"
      img={exerciseImg}
      leftColor="#a74cf2"
      rightColor="#617bfb"
    />
  </div>,
  container
);
