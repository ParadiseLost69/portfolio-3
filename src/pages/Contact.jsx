import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { Button } from "rsuite";
import FormDisplay from "../components/Form";
export default function Contact(props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="portfolio--container__contact"
      ref={props.contactRef}
    >
      <h2 className="contact__title">Contact</h2>
      <FormDisplay />
    </motion.section>
  );
}
