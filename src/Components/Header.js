import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="headerContainer">
          <nav className="nav flex-between">
            <div>
              <Link to="/">
                <h4> conduit</h4>
              </Link>
            </div>
            <div>
              <ul className="navLink">
                <Link to="/">Home</Link>

                <Link to="/signin">Sign in</Link>

                <Link to="/signup">Sign out</Link>
              </ul>
            </div>
          </nav>
        </header>

        <div className="banner">
          <h2>Conduit</h2>
          <h4>A place to share your knowledge.</h4>
        </div>
      </>
    );
  }
}

export default Header;
