import { ChangeEvent, FormEvent, useState } from 'react';
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
  formIsValid: boolean;
}

interface ServiceMessage {
  class: string;
  text: string;
}

const ContactMe = (props: Props) => {
  const [state, setState] = useState<State>({
    name: "",
    email: "",
    message: "",
    formIsValid: false,
  });

  const formId = 'U6zRswS7';
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const [submiting, setSubmiting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmiting(true);
    // props.handleCloseModalContact(); this closes the modal
    await postSubmission();
    setSubmiting(false);
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
      setMessage({ /*//1? Success message*/
        class: 'alert-mainColor',
        text: 'Thanks, I will be in touch shortly.'
      })

    } catch(error) {
      console.log(error);
      setMessage({ /*//1? Error message*/
      class: 'alert-danger',
      text: 'Sorry, something went wrong. Please try again.'
    })
    }
  }

  const resetForm = () => { //1? this function resets the form.
    setState({ name: ``, email: ``, message: ``, formIsValid: false });
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

  const validateForm = () => { //1? This validates if all the inputs are complete.
    return state.name.trim() !== "" &&
           state.email.trim() !== "" &&
           state.message.trim() !== "";
  };

  return (
    <Modal
      className="contact"
      show={props.showModalContact}
      onHide={props.handleCloseModalContact}
      size="lg"
    >
      <Modal.Header className="contact" closeButton>
        <Modal.Title className="contact">
          {props.text ? props.text : "Contact me"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="contact">
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group  mt-4">
            {/*//!Alert---------> */}
            {message && <div className={`alert ${message.class}`} role="alert">
              {message.text}
              </div>}
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
            disabled={!validateForm()}
          >
            {submiting ? "Submiting..." : "Submit"}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactMe;
