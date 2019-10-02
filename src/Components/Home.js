import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Header";
import Feed from "./Feed";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Feed />
        </div>
      </>
    );
  }
}

export default Home;
