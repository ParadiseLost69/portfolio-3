import React, { useState } from "react";
import "./App.css";
import { Button, Nav, Container } from "rsuite";
import { Navbar } from "./components/Navbar";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Work from "./pages/Work";
import About from "./pages/about";

function App() {
  const [active, setActive] = React.useState("home");

  return (
    <div className="App">
      <Navbar
        reversed
        appearance="default"
        active={active}
        onSelect={setActive}
      />
      {active === "home" && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="portfolio-container__home"
        >
          <motion.div className="intro">
            {/* Motion for H1 name intro__item */}
            <motion.div
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
              <h1 className="intro__item name">Teddy Loukas</h1>
            </motion.div>
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
                onClick={() => setActive("work")}
              >
                See Work
              </Button>
            </motion.div>
          </motion.div>
          <div className="intro__item socials-group">
            <SocialIcon url="https://www.linkedin.com/in/teddy-loukas-1777b81b0/" />
            <SocialIcon url="https://github.com/ParadiseLost69" />
            <SocialIcon url="https://twitter.com/TeddyConst" />
          </div>
        </motion.main>
      )}
      {/* WORK SECTION */}
      {active === "work" && <Work />}
      {active === "about" && <About />}
    </div>
  );
}

export default App;
