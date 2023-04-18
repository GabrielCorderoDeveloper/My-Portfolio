import { Component, ChangeEvent, FormEvent, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './ContactMe.css';
import axios from 'axios';

interface Props {
  showModalContact: boolean;
  handleCloseModalContact: () => void;
  text?: string;
}

interface State {
  name: string;
  email: string;
  message: string;
}

const ContactMe = (props: Props) => {
  const [state, setState] = useState<State>({
    name: "",
    email: "",
    message: "",
  });

  const formId = 'U6zRswS7';
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // props.handleCloseModalContact();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      name: state.name,
      email: state.email,
      message: state.message,
    }

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      resetForm();

    } catch(error) {
      console.log(error);
    }
  }

  const resetForm = () => {
    setState({ name: ``, email: ``, message: `` });
  };

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, name: event.target.value });
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, email: event.target.value });
  };

  const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, message: event.target.value });
  };

  return (
    <Modal
      className="contact"
      show={props.showModalContact}
      onHide={props.handleCloseModalContact}
      size="lg"
    >
      <Modal.Header className="contact" closeButton>
        <Modal.Title className="contact">{props.text ? props.text : 'Contact me'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="contact">
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group  mt-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control  rounded-4 mb-4"
              placeholder="Your name"
              value={state.name}
              onChange={onNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control rounded-4 mb-4"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={state.email}
              onChange={onEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control rounded-4"
              rows={5}
              value={state.message}
              onChange={onMessageChange}
            />
          </div>
          <button
            type="submit"
            className="contact btn btn-lg btn-mainColor mt-4 px-5 pt-2 pb-0 rounded-5 font-weight-bold"
          >
            Submit
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactMe;
