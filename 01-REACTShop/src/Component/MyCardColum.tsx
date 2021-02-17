import Card from "react-bootstrap/Card";
import CardColumns from 'react-bootstrap/CardColumns'
import Container from "react-bootstrap/Container";

function MyCardColumns() {
  return (
    <Container>
      <CardColumns>
        <Card className={"custom-card-border"}>
          <Card.Img variant="top" src="./img/2.jpg" />
          <Card.Body className="bg-grey">
            <Card.Title className="color-blue">ROTER SAFT</Card.Title>
            <Card.Text className="txt-color-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Preis: 5.50€</small>
          </Card.Footer>
        </Card>
        <Card className={"custom-card-border"}>
          <Card.Img variant="top" src="./img/4.jpg" />
          <Card.Body className="bg-grey">
            <Card.Title className="color-blue">PRALINE</Card.Title>
            <Card.Text className="txt-color-white">
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Preis: 0.30€</small>
          </Card.Footer>
        </Card>
        <Card className={"custom-card-border"}>
          <Card.Img variant="top" src="./img/6.jpg" />
          <Card.Body className="bg-grey">
            <Card.Title className="color-blue">ROSE WEIN</Card.Title>
            <Card.Text className="txt-color-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Preis: 12€</small>
          </Card.Footer>
        </Card>
      </CardColumns>
    </Container>
    
  );
}

export default MyCardColumns;
