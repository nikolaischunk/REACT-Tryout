import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function MyNavbar() {
  return (
    <Navbar className="custom-navcolor" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home" className="navbar-brand">
        FoodShop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="color-blue">
          <Nav.Link href="#shop" className="color-blue hover-melon">
            Shop
          </Nav.Link>
          <Nav.Link href="#deets" className="color-blue hover-melon">
            Aktionen
          </Nav.Link>
          <Nav.Link href="#memes" className="color-blue hover-melon">
            Neuheiten
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
