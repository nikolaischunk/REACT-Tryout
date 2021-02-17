import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import MyCard from "./MyCard";

function MyTestCardDeck() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <Container>
      <CardDeck>
        {data.map(function (element: any) {
          return (
            <MyCard
              imglink={element.imglink}
              title={element.title}
              description={element.description}
              price={element.description}
            ></MyCard>
          );
        })}
      </CardDeck>
    </Container>
  );
}

export default MyTestCardDeck;
