import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  };

  render() {
    const email = this.props.email;
    const password = this.props.password;

    return (
      <div className="topText">
          <h1>Sign Up</h1>
          <h4>Need an account?</h4>
        </div>

        <div className="inputDiv flex">
          <input type="text" placeholder="Username"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
        </div>

        <div>
          <button className="btn">Sign Up</button>
        </div>
    );
  }
}

export default Login;
