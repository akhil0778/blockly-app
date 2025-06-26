import profile from "../assets/profile.png";
import hello from "../assets/Hello.png";
import icons from "../assets/icons";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();

  const iconStyle = {
    width: "28px",
    height: "28px",
    transition: "0.3s",
  };

  const socialLinks = [
    { href: "https://github.com", key: "github" },
    { href: "https://linkedin.com", key: "linkedin" },
    { href: "https://twitter.com", key: "twitter" },
    { href: "https://telegram.org", key: "telegram" },
    { href: "https://instagram.com", key: "instagram" },
  ];

  return (
    <section className="py-5 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-5 mb-md-0">
            <img src={hello} alt="Hello" style={{ height: "40px" }} className="mb-3" />
            <h1 className="mb-3">I’m Anish 👋</h1>
            <p className="lead">
              UI/UX Designer, Front-End Developer & Thinker. Based in India.
            </p>

            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-4">
              <Button
                variant="outline-secondary"
                href="/cv.pdf"
                style={{
                  background: "linear-gradient(90deg, #DF580C 0%, #FD993D 100%)",
                  color: "white",
                  border: "1px solid white",
                }}
                download
              >
                Download CV
              </Button>

              <Button
                href="#contact"
                style={{
                  background: "linear-gradient(90deg, #434343 0%, #000000 100%)",
                  color: "white",
                  border: "1px solid white",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "10px",
                }}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Icons */}
            <div className="d-flex flex-row flex-md-column align-items-center align-items-md-start gap-3 mt-4">
              {socialLinks.map(({ href, key }) => (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={darkMode ? icons[key].dark : icons[key].light}
                    alt={`${key} icon`}
                    style={iconStyle}
                  />
                </a>
              ))}
            </div>
          </Col>

          <Col xs={12} md={6} className="text-center">
            <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "250px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
