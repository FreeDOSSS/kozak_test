import React from "react";
import { Switch, Route } from "react-router-dom";
import router from "./../router";

function App() {
  return (
    <Switch>
      <Route {...router.home} exact />
      <Route {...router.workers} />
    </Switch>
  );
}

export default App;
