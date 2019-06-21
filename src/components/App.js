import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/exercises" component={Exercises} exact />
        <Route path="/exercise/new" component={ExerciseNew} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
