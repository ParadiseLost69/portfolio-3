import React from "react";
import { Nav } from "rsuite";
import "./Navbar.css";

export const Navbar = ({ active, onSelect, ...props }) => {
  return (
    <Nav
      className="nav-item"
      justified
      {...props}
      activeKey={active}
      onSelect={onSelect}
    >
      <Nav.Item eventKey="home">Home</Nav.Item>
      <Nav.Item eventKey="work">Work</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
      <Nav.Item eventKey="contact">Contact</Nav.Item>
    </Nav>
  );
};
