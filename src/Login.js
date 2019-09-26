import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;

    return (
      <div>
        <div className="topText">
          <h1>Sign In</h1>
          <h4>Need an account?</h4>
        </div>

        {/* input */}
        <div className="inputDiv flex">
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
        </div>

        {/* btn */}
        <div>
          <button className="btn" type="submit">
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
