import React from "react";
import "./css/style.css";
import { ListGroup } from "react-bootstrap";
import { useEffect } from "react";

function ListUser(props: any) {
  useEffect(() => {
    console.log("");
  });

  // return (
  //     <ListGroup horizontal>
  //       <ListGroup.Item>{props.firstname}</ListGroup.Item>
  //       <ListGroup.Item>{props.lastname}</ListGroup.Item>
  //       <ListGroup.Item>{props.adress}</ListGroup.Item>
  //       <ListGroup.Item>{props.plz}</ListGroup.Item>
  //       <ListGroup.Item>{props.city}</ListGroup.Item>
  //     </ListGroup>
  // );

  return (
    <ListGroup horizontal>
      <ListGroup.Item as="input" value={props.firstname} disabled></ListGroup.Item>
      <ListGroup.Item as="input" value={props.lastname} disabled></ListGroup.Item>
      <ListGroup.Item as="input" value={props.adress} disabled></ListGroup.Item>
      <ListGroup.Item as="input" value={props.plz} disabled></ListGroup.Item>
      <ListGroup.Item as="input" value={props.city} disabled></ListGroup.Item>
    </ListGroup>
  );
}

export default ListUser;
