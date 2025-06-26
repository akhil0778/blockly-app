import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import logo1 from "../assets/logo1.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { useTheme } from "../context/ThemeContext.jsx";
import "./Header.css";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Navbar
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      className="py-3"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <span style={{ fontSize: "1.5rem" }}>
            <img src={darkMode ? logo1 : logo} alt="logo" />
          </span>
          <span className="ms-2 fs-6">ANISH KUMAR SINHA</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-center">
          <Nav className="gap-3 text-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link onClick={toggleTheme} className="d-none d-lg-block">
              <img src={darkMode ? sun : moon} alt="theme-toggle" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;