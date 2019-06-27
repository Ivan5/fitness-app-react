import React, { Component, useState, useEffect } from "react";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";
import Loading from "../components/Loading";

const Exercises = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        let res = await fetch("http://localhost:8000/api/exercises");
        let data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
      }
    };
    fetchExercises();
  }, []);

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
