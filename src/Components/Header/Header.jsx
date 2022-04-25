import React from "react";
import { Container } from "reactstrap";
import { SiNintendogamecube } from "react-icons/si";
import { BiWallet } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  const navArr = [
    {
      display: "Home",
      url: "/",
    },
    {
      display: "Market",
      url: "/market",
    },
    {
      display: "Create",
      url: "/create",
    },
    {
      display: "Contact",
      url: "/contact",
    },
  ];
  return (
    <header>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <SiNintendogamecube />
              </span>
              NFT Market
            </h2>
          </div>

          <div className="nav-menu">
            <ul className="nav-list">
              {navArr.map((nav) => (
                <li key={nav.url} className="nav-item">
                  <NavLink
                    to={nav.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {nav.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-right d-flex align-items-center gap-5">
            <button className="btn">
              <Link to="/wallet" className="d-flex gap-2 align-items-center">
                <span>
                  <BiWallet />
                </span>
                Connect Wallet
              </Link>
            </button>

            <span className="mobile-menu">
              <RiMenu4Fill
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  display: "none",
                }}
              />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
