import React from "react";
import { Nav } from "rsuite";
import "./Navbar.css";

export const Navbar = ({
  active,
  onSelect,
  scrollToRef,
  workRef,
  aboutRef,
  contactRef,
  ...props
}) => {
  return (
    <div className="sticky-nav">
      <Nav
        className="nav-item"
        justified
        {...props}
        activeKey={active}
        onSelect={onSelect}
      >
        <Nav.Item
          eventKey="home"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Home
        </Nav.Item>
        <Nav.Item onClick={() => scrollToRef(workRef)}>Work</Nav.Item>
        <Nav.Item onClick={() => scrollToRef(aboutRef)} eventKey="about">
          About
        </Nav.Item>
        <Nav.Item onClick={() => scrollToRef(contactRef)} eventKey="contact">
          Contact
        </Nav.Item>
      </Nav>
    </div>
  );
};
