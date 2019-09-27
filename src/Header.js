import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <header>
          <div className="wrapper flex between">
            <h1>Conduit</h1>
            <nav className="nav">
              <ul className="navList flex">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Sign in</a>
                </li>
                <li>
                  <a href="#">Sign out</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
