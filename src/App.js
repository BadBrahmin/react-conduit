import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container flex">
        {/* Register Elements */}
        {/* Top Text */}
        <div className="topText">
          <h1>Sign Up</h1>
          <h4>Need an account?</h4>
        </div>

        {/* input */}
        <div className="inputDiv flex">
          <input type="text" placeholder="Username"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
        </div>

        {/* btn */}
        <div>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
