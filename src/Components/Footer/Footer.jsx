import "./Footer.css";

import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import {
  SiDiscord,
  SiFacebook,
  SiInstagram,
  SiNintendogamecube,
  SiTwitter,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const myAccount = [
    {
      display: "Author Profile",
      url: "/seller-profile",
    },
    {
      display: "Create Item",
      url: "/create",
    },
    {
      display: "Collection",
      url: "/market",
    },
    {
      display: "Edit Profile",
      url: "/edit-profile",
    },
  ];

  const resources = [
    {
      display: "Help Center",
      url: "/h",
    },
    {
      display: "Partner",
      url: "/p",
    },
    {
      display: "Community",
      url: "/c",
    },
    {
      display: "Activity",
      url: "/a",
    },
  ];

  const company = [
    {
      display: "About",
      url: "/a",
    },
    {
      display: "Career",
      url: "/c",
    },
    {
      display: "Ranking",
      url: "/r",
    },
    {
      display: "Contact Us",
      url: "/contact",
    },
  ];

  return (
    <Container>
      <Row>
        <Col lg="3" md="6" sm="6">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <SiNintendogamecube />
              </span>
              NFT Market
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              corporis quos, mollitia veritatis dicta unde expedita tempore
              reiciendis voluptate obcaecati!
            </p>
          </div>
        </Col>
        <Col lg="2" md="3" sm="6" className="mb-4">
          <h5>My Account</h5>
          <ListGroup className="list-item">
            {myAccount.map((item) => (
              <ListGroupItem key={item.url} className="list-item">
                <Link to={item.url}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="2" md="3" sm="6">
          <h5>Resources</h5>
          <ListGroup className="list-group">
            {resources.map((resource) => (
              <ListGroupItem className="list-item" key={resource.url}>
                <Link to={resource.url}>{resource.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="2" md="3" sm="6" className="mb-4">
          <h5>Company</h5>
          <ListGroup className="list-group">
            {company.map((c) => (
              <ListGroupItem key={c.url} className="list-item">
                <Link to={c.url}>{c.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3" md="6" sm="6" className="mb-4">
          <h5>Newsletter</h5>
          <input type="text" className="newsletter" placeholder="Email" />

          <div className="social-links d-flex gaap-3 align-items-center">
            <Link to="#">
              <SiFacebook />
            </Link>
            <Link to="#">
              <SiTwitter />
            </Link>
            <Link to="#">
              <SiInstagram />
            </Link>
            <Link to="#">
              <SiDiscord />
            </Link>
          </div>
        </Col>

        <Col className="mt-4 text-center" lg={12}>
          <p className="copyright">
            Copyrights 2022, Developed by MD Zillur Rahman. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
