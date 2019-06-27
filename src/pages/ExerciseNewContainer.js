import React from "react";

import ExerciseNew from "./ExerciseNew";
import url from "../config";
class ExerciseNewContainer extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rightColor: ""
    },
    error: null,
    loaing: false
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = async e => {
    this.setState({
      loaing: true
    });
    e.preventDefault();
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.form)
      };

      let res = await fetch(`${url}/exercises`, config);
      let json = await res.json();
      this.setState({
        loaing: false
      });

      this.props.history.push("/exercises");
    } catch (error) {
      this.setState({
        loaing: true,
        error
      });
    } finally {
    }
  };
  render() {
    return (
      <ExerciseNew
        form={this.state.form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
export default ExerciseNewContainer;
