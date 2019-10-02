import React from "react";
import Header from "./Header";

class NewArticle extends React.Component {
  state = {
    title: "",
    description: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("fetch");
    // console.log(this.state);
    console.log(localStorage.authToken);
    fetch("https://conduit.productionready.io/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.authToken
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.props.history.push("/");
      })
      .catch("");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="wrapper">
          <div className="boxContainer">
            <div className="flex-column flex-center">
              <div>
                <h2>New Article</h2>
                {/* <h4>Write your thing out below</h4> */}
              </div>
              <form className="newArticle" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                ></input>
                <textarea
                  placeholder="Text"
                  rows="5"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                ></textarea>

                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Publish"
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewArticle;
