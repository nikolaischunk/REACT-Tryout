import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./css/style.css";
import ListUser from "./ListUser";
import IUser from "./IUser";
import UserForm from "./UserForm";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <Container className="users">
      <UserForm></UserForm>
        <br></br>
      <ListUser
        firstname="Firstname"
        lastname="Lastname"
        adress="Adress"
        plz="PLZ"
        city="City"
      ></ListUser>

      {data &&
        data.map(function (element: IUser) {
          return (
            <ListUser
              firstname={element.firstname}
              lastname={element.lastname}
              adress={element.adress}
              plz={element.plz}
              city={element.city}
            ></ListUser>
          );
        })}
    </Container>
  );
}

export default Users;
