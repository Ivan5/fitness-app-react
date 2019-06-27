import React, { Component } from "react";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";
class Exercises extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    await this.fetchExercises();
  }

  fetchExercises = async () => {
    let res = await fetch("http://localhost:8000/api/exercises");
    let data = await res.json();
    this.setState({
      data
    });
  };

  render() {
    return (
      <div>
        <Welcome username="Christ" />
        <ExerciseList exercises={this.state.data} />
        <AddButton />
      </div>
    );
  }
}

export default Exercises;
