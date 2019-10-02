import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

class Feed extends React.Component {
  render() {
    return (
      <>
        <div className="feedContainer">
          <div>
            <h4>Global Feed</h4>
            <hr></hr>
          </div>
          <div>
            <Card style={{ width: "60rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="btn" variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Feed;
