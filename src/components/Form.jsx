import React from "react";
import { motion } from "framer-motion";
import { Form, ButtonToolbar, Button, Input } from "rsuite";
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
        // <Form name="contact" method="POST" data-netlify="true">
        //   <input type="hidden" name="form-name" value="contact" />
        //   <Form.Group onChange={(e) => handleFormChange(e)} controlId="name">
        //     <Form.ControlLabel>Name</Form.ControlLabel>
        //     <Form.Control name="name" />
        //     <Form.HelpText>Name is required</Form.HelpText>
        //   </Form.Group>
        //   <Form.Group onChange={(e) => handleFormChange(e)} controlId="email">
        //     <Form.ControlLabel>Email</Form.ControlLabel>
        //     <Form.Control
        //       onClick={(e) => {
        //         console.log(e.target.value);
        //       }}
        //       name="email"
        //       type="email"
        //     />
        //     <Form.HelpText tooltip>Email is required</Form.HelpText>
        //   </Form.Group>

        //   <Form.Group onChange={(e) => handleFormChange(e)} controlId="message">
        //     <Form.ControlLabel>Message</Form.ControlLabel>
        //     <Form.Control
        //       rows={5}
        //       name="message"
        //       value={form.message}
        //       accepter={Textarea}
        //     />
        //   </Form.Group>
        //   <Form.Group>
        //     <ButtonToolbar>
        //       <Button
        //         appearance="primary"
        //         disabled={!verified}
        //         onClick={handleSubmit}
        //       >
        //         Submit
        //       </Button>
        //     </ButtonToolbar>
        //   </Form.Group>
        // </Form>
        <form name="contact" method="post" className="form">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" name="message" required></textarea>
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
