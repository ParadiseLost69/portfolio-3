import React, { useState, useRef } from "react";
import "./App.css";
import { Button, Nav, Container } from "rsuite";
import { Navbar } from "./components/Navbar";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  //sets navbar highlighting
  const [active, setActive] = React.useState("home");

  //references to scroll pages into view
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        reversed
        appearance="default"
        scrollToRef={scrollToRef}
        workRef={workRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="portfolio-container__home"
      >
        <motion.div className="intro">
          {/* Motion for H1 name intro__item */}
          <motion.h1
            className="intro__item name"
            drag
            animate={{ rotate: 5, y: 25 }}
            transition={{
              duration: 0.4,
              delay: 1,
              type: "spring",
              bounce: 0.5,
              damping: 5,
            }}
          >
            Teddy Loukas
          </motion.h1>
          <h2 className="intro__item sub-header">Full Stack Web Developer</h2>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              appearance="primary"
              className="intro__item"
              onClick={() => scrollToRef(workRef)}
            >
              See Work
            </Button>
          </motion.div>
        </motion.div>
        <div className="intro__item socials-group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <SocialIcon url="https://www.linkedin.com/in/teddy-loukas-1777b81b0/" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <SocialIcon url="https://github.com/ParadiseLost69" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <SocialIcon url="https://twitter.com/TeddyConst" />
          </motion.div>
          .
        </div>
      </motion.section>
      <Work workRef={workRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
