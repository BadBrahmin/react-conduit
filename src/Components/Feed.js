import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Feed(props) {
  return (
    <>
      <div className="feedContainer">
        <div>
          <h4>Global Feed</h4>
          <hr></hr>
        </div>
        <div>
          <ul>
            {props.articles &&
              props.articles.map(articles => (
                <li>
                  <Card style={{ width: "60rem" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title>{articles.title}</Card.Title>
                      <Card.Text>{articles.description}</Card.Text>
                      <Card.Link href="#">{articles.author.username}</Card.Link>
                      <Button className="btn" variant="primary">
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
