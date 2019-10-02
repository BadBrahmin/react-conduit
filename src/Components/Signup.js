import React from "react";
import Header from "./Header";

class Signup extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="wrapper">
          <div className="boxContainer">
            <div className="flex-column flex-center">
              <div>
                <h2>Sign Up</h2>
              </div>

              <div className="flex-center flex-column">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </div>

              <button className="btn" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
