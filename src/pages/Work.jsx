import React from "react";
import "./Work.css";
import { motion } from "framer-motion";
import { Button, Panel } from "rsuite";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

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
        <Panel className="card" header="Find The Parasite App" bordered shaded>
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src="/"
              alt="nothing"
              srcset=""
            />
            <p className="card__content--description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, maxime consectetur maiores dolorum animi natus
              doloribus neque ducimus quae perferendis fugit quas minus tenetur
              sint provident repudiandae aliquid cumque blanditiis!
            </p>
            <div className="card__content--button-group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  className="card__content--live-button"
                  href="https://find-the-parasite.web.app/"
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
                <Button className="card__content--repo-button">
                  <AiFillGithub />
                  Repo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Panel>
        {/* <motion.div drag> */}
        <Panel
          className="card"
          header="Ecommerce Website | Sunday Archive"
          bordered
          shaded
        >
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src="/"
              alt="nothing"
              srcset=""
            />
            <p className="card__content--description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, maxime consectetur maiores dolorum animi natus
              doloribus neque ducimus quae perferendis fugit quas minus tenetur
              sint provident repudiandae aliquid cumque blanditiis!
            </p>
            <div className="card__content--button-group">
              <Button className="card__content--live-button">Live</Button>
              <Button className="card__content--repo-button">Repo</Button>
            </div>
          </motion.div>
        </Panel>
        {/* </motion.div> */}
        <Panel className="card" header="Resume Generator" bordered shaded>
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src="/"
              alt="nothing"
              srcset=""
            />
            <p className="card__content--description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, maxime consectetur maiores dolorum animi natus
              doloribus neque ducimus quae perferendis fugit quas minus tenetur
              sint provident repudiandae aliquid cumque blanditiis!
            </p>
            <div className="card__content--button-group">
              <Button className="card__content--live-button">Live</Button>
              <Button className="card__content--repo-button">Repo</Button>
            </div>
          </motion.div>
        </Panel>
        <Panel className="card" header="Blog" bordered shaded>
          <motion.div className="card__content">
            <img
              className="card__content--image"
              src="/"
              alt="nothing"
              srcset=""
            />
            <p className="card__content--description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, maxime consectetur maiores dolorum animi natus
              doloribus neque ducimus quae perferendis fugit quas minus tenetur
              sint provident repudiandae aliquid cumque blanditiis!
            </p>
            <div className="card__content--button-group">
              <Button className="card__content--live-button">Live</Button>
              <Button className="card__content--repo-button">Repo</Button>
            </div>
          </motion.div>
        </Panel>
      </motion.div>
    </motion.main>
  );
}
