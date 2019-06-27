import React, { Component } from "react";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";
import Loading from "../components/Loading";

class Exercises extends Component {
  state = {
    data: [],
    loading: true,
    error: null
  };
  async componentDidMount() {
    await this.fetchExercises();
  }

  fetchExercises = async () => {
    try {
      let res = await fetch("http://localhost:8000/api/exercises");
      let data = await res.json();
      this.setState({
        data,
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error
      });
    } finally {
    }
  };

  render() {
    if (this.state.loading) return <Loading />;
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
