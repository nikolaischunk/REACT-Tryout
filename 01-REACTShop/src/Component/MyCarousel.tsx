import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";

function MyCarousel() {
  return (
    <Container>
      <br></br>
      <Carousel
        interval={5000}
        indicators={false}
        prevIcon={null}
        nextIcon={null}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/carousel/steak.png"
            alt="Fleisch"
          />
          <Carousel.Caption className={"caption-bg"}>
            <h3>Fleisch</h3>
            <p>Das ist ein saftiges Stück Fleisch. Perfekt für Geniesser!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/carousel/beer.png"
            alt="Third slide"
          />
          <Carousel.Caption className={"caption-bg"}>
            <h3>Bier</h3>
            <p>Für echte Feinschmecker. Das ChillBier lange gereift.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/carousel/avocado.png"
            alt="Third slide"
          />
          <Carousel.Caption  className={"caption-bg"}>
            <h3>Avocado</h3>
            <p>Für Gesunde. Die Südamerikanische Avocado.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
    </Container>
  );
}

export default MyCarousel;
