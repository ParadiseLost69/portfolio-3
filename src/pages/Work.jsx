import React from "react";
import "./Work.css";
import { motion } from "framer-motion";
import { Button, Panel } from "rsuite";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import ParasitesImage from "../assets/images/ParasitesApp.gif";
import ShoppingAppImage from "../assets/images/ShoppingApp.gif";
import ResumeGeneratorImage from "../assets/images/ResumeGenerator.gif";
import MessageBoardImage from "../assets/images/sushiInventorygif.gif";

export default function Work(props) {
  return (
    <motion.section
      style={{ opacity: props.opacity }}
      className="portfolio-container__work"
      //reveal on scroll
      initial={{ opacity: 0 }}
      animate={{ opacity: props.opacity }}
      exit={{ opacity: 0 }}
      ref={props.workRef}
    >
      <motion.h2 className="work__title">Work</motion.h2>
      <motion.div className="work__container">
        <Panel className="card" header="Find The Parasite App" bordered shaded>
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
                  href="https://github.com/ParadiseLost69/waldo-project"
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
          className="card"
          header="E-commerce Website | Sunday Archive"
          bordered
          shaded
        >
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src={ShoppingAppImage}
              alt="nothing"
            />
            <p className="card__content--description">
              A fully responsive website for Sunday Archive. Sunday Archive is a
              business that refurbishes antique furniture and modernizes them.
              Hosted on Netlify.
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
        <Panel className="card" header="Resume Generator" bordered shaded>
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src={ResumeGeneratorImage}
              alt="nothing"
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
                  href="https://github.com/ParadiseLost69/resume-generator"
                  target="_blank"
                >
                  <AiFillGithub />
                  Repo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Panel>
        <Panel className="card" header="Sushi Inventory" bordered shaded>
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src={MessageBoardImage}
              alt="nothing"
            />
            <p className="card__content--description">
              A CRUD app created using Node.js, Mongoose, MongoDb, and
              Express.js using pug templating. create, delete, and update
              popular or imaginary sushi. Hosted with Railway.
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
                  href="https://sushi-restaurant-inventory-production.up.railway.app/sushi"
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
                  href="https://github.com/ParadiseLost69/sushi-restaurant-inventory"
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
    </motion.section>
  );
}
