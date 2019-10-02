import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Header";
import Feed from "./Feed";

class Home extends React.Component {
  state = {
    articles: null
  };

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then(res => res.json())
      .then(({ articles }) => this.setState({ articles }));
  }
  render() {
    return (
      <>
        <Header />
        <div>
          <Feed articles={this.state.articles} />
        </div>
      </>
    );
  }
}

export default Home;
