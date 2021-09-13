import { Container, Navbar } from "react-bootstrap";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <div className="brandContainer">
          <Navbar.Brand href="#">MKM Ejendomsinvest ApS</Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
