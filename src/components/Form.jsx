import React from "react";
import { motion } from "framer-motion";
import { Button, Input } from "rsuite";
import "./Form.css";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const FormDisplay = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const verified =
    form.name.length > 0 && form.email.length > 0 && form.message.length > 0;

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted ? (
        <motion.div
          className="form-submitted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3>
            Message submitted. I will get back to you as soon as possible.
          </h3>
        </motion.div>
      ) : (
        <form name="contact" method="post" className="form">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Smith"
              required
            />
          </p>
          <p>
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
              required
            />
          </p>
          <p>
            <label htmlFor="message">Message</label> <br />
            <textarea
              style={{ resize: "none" }}
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={10}
              cols={50}
              required
            ></textarea>
          </p>
          <p>
            <Button type="submit" appearance="primary">
              Submit
            </Button>
          </p>
        </form>
      )}
    </>
  );
};

export default FormDisplay;
