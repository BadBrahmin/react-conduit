import React from "react";
import "./App.css";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <div className="container flex">
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default App;
