import React from "react";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container flex">
        <Register />
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
