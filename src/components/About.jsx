import { useTheme } from "../context/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import icons from "../assets/icons";
import aboutLight from "../assets/about-light.png"; 
import aboutDark from "../assets/about-dark.png";

const About = () => {
  const { darkMode } = useTheme();

  const socialLinks = [
    { href: "https://github.com", key: "github" },
    { href: "https://linkedin.com", key: "linkedin" },
    { href: "https://twitter.com", key: "twitter" },
    { href: "https://telegram.org", key: "telegram" },
    { href: "https://instagram.com", key: "instagram" },
    { href: "https://facebook.com", key: "facebook" },
  ];

  const iconStyle = {
    width: "28px",
    height: "28px",
    transition: "0.3s",
  };

  return (
    <section className="py-5 mt-5">
      <Container>
        <Row className="align-items-center flex-column flex-lg-row">
          {/* Left Images */}
          <Col xs={12} lg={12}>
            <img
              src={darkMode ? aboutDark : aboutLight}
              alt="About Illustration"
              className="img-fluid rounded"
              style={{ maxHeight: "300px" }}
            />
            <p className="lead">
              Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. 
He holds a bachelor degree in Computer Applications. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative. 

His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 3D floor plan

When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
            </p>

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
        </Row>
      </Container>
    </section>
  );
};

export default About;
