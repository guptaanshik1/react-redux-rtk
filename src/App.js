import React from "react";
import Movie from "./components/hoc/movie";
import ComA from "./components/comA";
import Home from "./components/home";
import AddEdit from "./components/addEdit";
import Edit from "./components/edit";
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddEdit} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
      {/* <Movie id={1} />
      <ComA /> */}
    </div>
  );
};

export default App;