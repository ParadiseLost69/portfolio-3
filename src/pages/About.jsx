import { motion } from "framer-motion";
import React from "react";
import "./About.css";

export default function About() {
  return (
    <motion.main
      className="portfolio-container__about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>About</h1>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          laudantium veritatis mollitia earum, molestiae, nisi eveniet dolorum
          sapiente, esse ex facere perferendis debitis. Nihil, voluptatum
          provident odit mollitia quae ratione?
        </p>
      </div>
    </motion.main>
  );
}
