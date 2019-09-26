import React from "react";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  render() {
    const username = this.props.username;
    const email = this.props.email;
    const password = this.props.password;

    this.handleSubmit = event => {
      this.setState({ value: event.target.value });
      console.log(this.username);
    };

    return (
      <>
        <div>
          <h2>Sign Up</h2>
          <h4 className="green-text">Need an account?</h4>
        </div>

        <form className="inputDiv flex">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleSubmit}
          ></input>
          <input type="email" placeholder="Email" value={email}></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
          ></input>
        </form>

        <div>
          <button className="btn">Sign Up</button>
        </div>
      </>
    );
  }
}

export default Register;
