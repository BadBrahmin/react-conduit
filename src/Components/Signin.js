import React from "react";
import Header from "./Header";

class Signin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("fetch");
    console.log(this.state);
    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: this.state })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("authToken", data.authToken);
        this.props.history.push("/");
      });
    console.log(localStorage.authToken);
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
                <h2>Sign In</h2>
              </div>

              <form
                className="flex-center flex-column"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button className="btn" type="submit">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signin;
