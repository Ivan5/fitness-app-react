import React from "react";
import ReactDom from "react-dom";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.css";
import exerciseImg from "./images/exercise.png";
const container = document.getElementById("root");

ReactDom.render(
  <Card
    title="Technique Guides"
    description="Learn amazing street workout and calisthenics"
    img={exerciseImg}
    leftColor="#a74cf2"
    rightColor="#617bfb"
  />,
  container
);
