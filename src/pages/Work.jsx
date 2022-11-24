import React from "react";
import "./Work.css";
import { motion } from "framer-motion";
import { Button, Panel } from "rsuite";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import ParasitesImage from "../assets/images/ParasitesApp.gif";
import ShoppingAppImage from "../assets/images/ShoppingApp.gif";
import ResumeGeneratorImage from "../assets/images/ResumeGenerator.gif";
import MessageBoardImage from "../assets/images/MessageBoard.gif";

export default function Work() {
  return (
    <motion.main
      className="portfolio-container__work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1 drag className="work__title">
        Work
      </motion.h1>
      <motion.div className="work__container">
        <Panel
          className="card 1"
          header="Find The Parasite App"
          bordered
          shaded
        >
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src={ParasitesImage}
              alt="Searching for Rick and Morty Characters"
            />
            <p className="card__content--description">
              A game created using React and Firebase. Users receive a list of
              characters and are tasked with finding them. Users' scores are
              recorded and uploaded to Firestore. Hosted on Firebase.
            </p>
            <div className="card__content--button-group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  appearance="primary"
                  size="lg"
                  className="card__content--live-button"
                  href="https://find-the-parasite.web.app/"
                  target="_blank"
                >
                  <AiFillEye />
                  Live
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  appearance="primary"
                  size="lg"
                  className="card__content--repo-button"
                  hraf="https://github.com/ParadiseLost69/waldo-project"
                  target="_blank"
                >
                  <AiFillGithub />
                  Repo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Panel>
        <Panel
          className="card 2"
          header="Ecommerce website | Sunday Archive"
          bordered
          shaded
        >
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src={ShoppingAppImage}
              alt="nothing"
              srcset=""
            />
            <p className="card__content--description">
              A fully responsive mock E-commerce website created using React and
              React Router. Sunday Archive is a business that refurbished
              antique furniture and modernizes them. Hosted on Netlify.
            </p>
            <div className="card__content--button-group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  appearance="primary"
                  size="lg"
                  className="card__content--live-button"
                  href="https://golden-basbousa-5e362d.netlify.app/"
                  target="_blank"
                >
                  <AiFillEye />
                  Live
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  appearance="primary"
                  size="lg"
                  className="card__content--repo-button"
                  href="https://github.com/ParadiseLost69/shopping-cart-final"
                  target="_blank"
                >
                  <AiFillGithub />
                  Repo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Panel>
        <Panel className="card 3" header="Resume Generator" bordered shaded>
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src={ResumeGeneratorImage}
              alt="nothing"
              srcset=""
            />
            <p className="card__content--description">
              A responsive resume generator created using React. Users enter
              their credentials into the form and a live resume is instantly
              generated. Hosted on Netlify.
            </p>
            <div className="card__content--button-group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  appearance="primary"
                  size="lg"
                  className="card__content--live-button"
                  href="https://chipper-caramel-550d58.netlify.app/"
                  target="_blank"
                >
                  <AiFillEye />
                  Live
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  appearance="primary"
                  size="lg"
                  className="card__content--repo-button"
                >
                  <AiFillGithub />
                  Repo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Panel>
        <Panel className="card 4" header="Message Board" bordered shaded>
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src={MessageBoardImage}
              alt="nothing"
              srcset=""
            />
            <p className="card__content--description">
              A message board created using Node.js and Express.js using EJS
              templating. Previously hosted on Heroku.
            </p>
            <div className="card__content--button-group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  appearance="primary"
                  size="lg"
                  className="card__content--live-button"
                  href="https://still-ravine-63449.herokuapp.com/"
                  disabled
                >
                  <AiFillEye />
                  Live
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  appearance="primary"
                  size="lg"
                  className="card__content--repo-button"
                  href="https://github.com/ParadiseLost69/mini-message-board"
                  target="_blank"
                >
                  <AiFillGithub />
                  Repo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Panel>
      </motion.div>
    </motion.main>
  );
}
