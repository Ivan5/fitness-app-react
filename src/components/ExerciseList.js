import React from "react";
import Card from "./Card";
function ExerciseList(props) {
  return (
    <div>
      {props.exercises.map(item => {
        return (
          <Card
            title={item.title}
            description={item.description}
            img={item.img}
            leftColor={item.leftColor}
            rightColor={item.rightColor}
          />
        );
      })}
    </div>
  );
}

export default ExerciseList;
