import React from "react";
import { motion } from "framer-motion";
import { Form, ButtonToolbar, Button, Input } from "rsuite";
import "./Form.css";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const FormDisplay = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

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
        <Form name="contact" method="POST" data-netlify="true">
          <Form.Group controlId="name">
            <Form.ControlLabel>Name</Form.ControlLabel>
            <Form.Control name="name" />
            <Form.HelpText>Name is required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control
              onClick={(e) => {
                console.log(e.target.value);
              }}
              onChange={(e) => checkValidity(e)}
              name="email"
              type="email"
            />
            <Form.HelpText tooltip>Email is required</Form.HelpText>
          </Form.Group>

          <Form.Group controlId="textarea">
            <Form.ControlLabel>Message</Form.ControlLabel>
            <Form.Control rows={5} name="textarea" accepter={Textarea} />
          </Form.Group>
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button appearance="default">Cancel</Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      )}
    </>
  );
};

export default FormDisplay;
