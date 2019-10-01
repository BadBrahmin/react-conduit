import React from "react";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="container flex form-container">
        <Register />
        <aside></aside>
      </div>
    </div>
  );
}

export default App;
