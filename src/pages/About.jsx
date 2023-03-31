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
import { Button, ButtonToolbar, Popover, Whisper } from "rsuite";

//Popover content

const HtmlSpeaker = (
  <Popover title="HTML5">
    <p>A markup language used to structure and present content</p>
  </Popover>
);

const CSSSpeaker = (
  <Popover title="CSS3">
    <p>
      A style sheet language used to describe the presentation of a document
    </p>
  </Popover>
);
const JSSpeaker = (
  <Popover title="Javascript">
    <p>A programming language that conforms to the ECMAScript specification</p>
  </Popover>
);
const ReactSpeaker = (
  <Popover title="React">
    <p>A JavaScript library for building user interfaces</p>
  </Popover>
);
const NodeSpeaker = (
  <Popover title="Node.js">
    <p>
      An open-source, cross-platform, back-end JavaScript runtime environment
    </p>
  </Popover>
);
const ViteSpeaker = (
  <Popover title="Vite">
    <p>
      A web development build tool that serves your code via native ES Module
      imports during development
    </p>
  </Popover>
);
const ExpressSpeaker = (
  <Popover title="Express.js">
    <p>A web application framework for Node.js</p>
  </Popover>
);
const WordpressSpeaker = (
  <Popover title="Wordpress">
    <p>
      A free and open-source content management system written in PHP and paired
      with a MySQL or MariaDB database
    </p>
  </Popover>
);
const NextSpeaker = (
  <Popover title="Next.js">
    <p>
      A free and open-source React-based web framework that enables
      functionality such as server-side rendering and generating static websites
      for React based web applications.
    </p>
  </Popover>
);
const FramerSpeaker = (
  <Popover title="Framer Motion">
    <p>
      A popular open-source animation library for React that makes it easy to
      create smooth and interactive animations, transitions, and gestures
    </p>
  </Popover>
);
const ReduxSpeaker = (
  <Popover title="Redux">
    <p>
      A predictable state management library for JavaScript applications that
      simplifies the management of application state in a single immutable
      store.
    </p>
  </Popover>
);
const WebpackSpeaker = (
  <Popover title="Webpack">
    <p>
      A module bundler for JavaScript applications that processes and optimizes
      code and assets
    </p>
  </Popover>
);

//About page component

export default function About(props) {
  return (
    <motion.section
      className="portfolio-container__about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
            <Whisper placement="bottom" trigger="hover" speaker={HtmlSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring" }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={htmlLogo}
                alt="HTML5"
              />
            </Whisper>
            <Whisper placement="bottom" trigger="hover" speaker={CSSSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.1 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={cssLogo}
                alt="CSS3"
              />
            </Whisper>

            <Whisper placement="bottom" trigger="hover" speaker={JSSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.2 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={jsLogo}
                alt="Javascript"
              />
            </Whisper>
            <Whisper placement="bottom" trigger="hover" speaker={ReactSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.3 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={reactLogo}
                alt="React"
              />
            </Whisper>
            <Whisper placement="bottom" trigger="hover" speaker={NodeSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.4 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={nodeLogo}
                alt="Node.js"
              />
            </Whisper>
            <Whisper placement="bottom" trigger="hover" speaker={ViteSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.5 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={viteLogo}
                alt="Vite"
              />
            </Whisper>
            <Whisper
              placement="bottom"
              trigger="hover"
              speaker={ExpressSpeaker}
            >
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.6 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={expressLogo}
                alt="Express.js"
              />
            </Whisper>
            <Whisper
              placement="bottom"
              trigger="hover"
              speaker={WordpressSpeaker}
            >
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.7 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={wordpressLogo}
                alt="Wordpress"
              />
            </Whisper>
            <Whisper placement="bottom" trigger="hover" speaker={FramerSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.8 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={framerLogo}
                alt="Framer Motion"
              />
            </Whisper>
            <Whisper placement="bottom" trigger="hover" speaker={NextSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.9 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={nextLogo}
                alt="Next.js"
              />
            </Whisper>
            <Whisper placement="bottom" trigger="hover" speaker={ReduxSpeaker}>
              <motion.img
                initial={{ scale: 0 }}
                transition={{ duration: 1, type: "spring", delay: 1 }}
                whileInView={{ scale: 1 }}
                className="skill__image"
                src={reduxLogo}
                alt="Redux"
              />
            </Whisper>
            <Whisper
              placement="bottom"
              trigger="hover"
              speaker={WebpackSpeaker}
            >
              <motion.img
                initial={{ scale: 0, opacity: 0 }}
                transition={{ duration: 1, type: "spring", delay: 1.1 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="skill__image"
                src={webpackLogo}
                alt="Webpack"
              />
            </Whisper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
