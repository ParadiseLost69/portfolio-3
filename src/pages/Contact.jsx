import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { Button } from "rsuite";
export default function Contact(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="portfolio--container__contact"
      ref={props.contactRef}
    >
      <h2 className="contact__title">Contact</h2>
      <p>
        For all inquries please send an email to{" "}
        <a href="mailto:tedloukas@outlook.com"> tedloukas@outlook.com</a>
      </p>
      <Button
        appearance="primary"
        onClick={() => (window.location = "mailto:tedloukas@outlook.com")}
      >
        Contact Me
      </Button>
    </motion.div>
  );
}
