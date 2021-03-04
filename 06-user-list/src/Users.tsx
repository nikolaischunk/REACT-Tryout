import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./css/style.css";
import ListUser from "./ListUser";
import User from "./User";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/users/1")
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <Container>
      <ListGroup horizontal>
        <ListGroup.Item>ID</ListGroup.Item>
        <ListGroup.Item>Name</ListGroup.Item>
        <ListGroup.Item>Age</ListGroup.Item>
        <ListGroup.Item>EMail</ListGroup.Item>
      </ListGroup>

      {data &&
        data.map(function (element: User) {
          return (
            <ListUser
              id={element.id}
              name={element.name}
              age={element.age}
              email={element.email}
            ></ListUser>
          );
        })}
    </Container>
  );
}

export default Users;
