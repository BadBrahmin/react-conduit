import React from "react";
import Header from "./Header";
import Feed from "./Feed";

class Profile extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <>
        <Header />
        <div className="wrapper">
          <div className="boxContainer">
            <div className="flex-column flex-center">
              <div>
                <h2>Profile</h2>
              </div>
              <div className="profileContainer">
                {/* <img src="">Img</img> */}
                <h2>User Name</h2>
                <div className="profileFeed">
                  <h4>Article Feed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
