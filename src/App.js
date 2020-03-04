import React from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/pageone">
        <button>PageOne</button>
      </Link>
      <Link to="/pagetwo">
        <button>PageTwo</button>
      </Link>

      <Route path="/pageone" component={PageOne}></Route>
      <Route path="/pagetwo" component={PageTwo}></Route>
    </div>
  );
}
