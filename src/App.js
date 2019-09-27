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
      <div className="homeHero">
        <h1>conduit</h1>
        <h2>A place to share your knowledge</h2>
      </div>
      <div className="container flex form-container">
      {/* <Register /> */}

      <aside>
        
      </aside>
      </div>
    </div>
  );
}

export default App;
