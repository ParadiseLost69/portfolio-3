import { motion } from "framer-motion";
import React from "react";
import "./About.css";
import cssLogo from "../assets/images/CSS-logo.png";
import expressLogo from "../assets/images/Expressjs-logo.png";
import htmlLogo from "../assets/images/HTML-logo.png";
import jsLogo from "../assets/images/JavaScript-logo.png";
import nextLogo from "../assets/images/nextjs.png";
import nodeLogo from "../assets/images/node-js-logo.png";
import reactLogo from "../assets/images/react-logo.png";
import wordpressLogo from "../assets/images/wordpress-logo.png";
import viteLogo from "../assets/images/vite-logo.png";
import framerLogo from "../assets/images/framer-motion-logo.png";
import reduxLogo from "../assets/images/redux-logo.png";
import webpackLogo from "../assets/images/webpack-logo.png";
import teddyPhoto from "../assets/images/teddy-profile.jpg";

export default function About(props) {
  return (
    <motion.section
      className="portfolio-container__about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={props.aboutRef}
    >
      <h2 className="about__title">About</h2>
      <div className="about__content">
        <img src={teddyPhoto} alt="nothing" className="content__picture" />
        <h2 className="content__name">Teddy Loukas</h2>
        <p className="content__description">
          Full-stack web developer from Canada. I mainly utilize React and the
          surrounding ecosystem to develop responsive, accessible, and visually
          pleasing websites, games, and more. In my free time I enjoy playing
          guitar, snowboarding, and coding. If you would like to get in contact
          please send a message to{" "}
          <a href="mailto:tedloukas@outlook.com">tedloukas@outlook.com</a> or
          head over to the contact section below.
        </p>
        <div className="content__skills-group">
          <h3 className="skills-group__title">Skills</h3>
          <motion.div className="skills-group__skill">
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring" }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={htmlLogo}
              alt="HTML5"
              title="HTML5"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.1 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={cssLogo}
              alt="CSS3"
              title="CSS3"
            />

            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.2 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={jsLogo}
              alt="Javascript"
              title="Javascript"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.3 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={reactLogo}
              alt="React"
              title="React"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.4 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={nodeLogo}
              alt="Node.js"
              title="Node.js"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.5 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={viteLogo}
              alt="Vite"
              title="Vite"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.6 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={expressLogo}
              alt="Express.js"
              title="Express.js"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.7 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={wordpressLogo}
              alt="Wordpress"
              title="Wordpress"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.8 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={framerLogo}
              alt="Framer Motion"
              title="Framer Motion"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.9 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={nextLogo}
              alt="Next.js"
              title="Next.js"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 1 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={reduxLogo}
              alt="Redux"
              title="Redux"
            />
            <motion.img
              initial={{ scale: 0 }}
              transition={{ duration: 1, type: "spring", delay: 1.1 }}
              animate={{ scale: 1 }}
              className="skill__image"
              src={webpackLogo}
              alt="Webpack"
              title="Webpack"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
