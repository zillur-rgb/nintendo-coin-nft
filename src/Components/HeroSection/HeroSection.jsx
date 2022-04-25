import { MdOutlineTravelExplore, MdOutlineCreate } from "react-icons/md";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./HeroSection.css";
import heroImage from "../../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container className=" d-flex align-items-center">
        <Row>
          <Col lg="6" md="6">
            <div className="hero-content">
              <h2>
                Discover rare digital art amd collect{" "}
                <span>sell extraordinary</span>NFTs
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium recusandae nemo doloremque hic illum
                maiores. Itaque voluptatibus excepturi ducimus!
              </p>

              <div className="hero-btns d-flex align-items-center gap-2">
                <Link to="/market">
                  <button className="explore-btn d-flex align-items-center gap-2">
                    <MdOutlineTravelExplore
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />{" "}
                    Explore
                  </button>
                </Link>
                <Link to="/create">
                  <button className="create-btn d-flex align-items-center gap-2">
                    <MdOutlineCreate
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />{" "}
                    Create
                  </button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero-img">
              <img src={heroImage} alt="HeroImg" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
