import { useEffect } from "react";
import Card from "react-bootstrap/Card";

function MyCard(props: any) {
  useEffect(() => {
    console.log("");
  });

  return (
    <Card>
      <Card.Img variant="top" src={"./img/" + props.imglink} />
      <Card.Body className="bg-grey">
        <Card.Title className="color-blue">{props.title}</Card.Title>
        <Card.Text className="txt-color-white">{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Preis: {props.price}€</small>
      </Card.Footer>
    </Card>
  );
}
export default MyCard;
