import React, { Component } from "react";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import url from "../config";

const Exercises = () => {
  const { data, loading, error } = useFetch(`${url}/exercises`);
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
