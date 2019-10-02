import React from "react";
import "./Stylesheets/style.css";
import Signup from "./Components/Signup";
// import Header from "./Components/Header";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
    </>
  );
}

export default App;
