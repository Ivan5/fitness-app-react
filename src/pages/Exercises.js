import React, { Component } from "react";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

const Exercises = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/exercises"
  );
  if (loading) return <Loading />;
  return (
    <>
      <Welcome username="Christ" />
      <ExerciseList exercises={data} />
      <AddButton />
    </>
  );
};

export default Exercises;
