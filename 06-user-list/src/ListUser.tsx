import React from "react";
import "./css/style.css";
import { ListGroup } from "react-bootstrap";
import { useEffect } from "react";

function ListUser(props: any) {
  useEffect(() => {
    console.log("");
  });

  return (
      <ListGroup horizontal>
        <ListGroup.Item>{props.id}</ListGroup.Item>
        <ListGroup.Item>{props.name}</ListGroup.Item>
        <ListGroup.Item>{props.age}</ListGroup.Item>
        <ListGroup.Item>{props.email}</ListGroup.Item>
      </ListGroup>
  );
}

export default ListUser;
