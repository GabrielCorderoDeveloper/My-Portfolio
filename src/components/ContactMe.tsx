import { Component, ChangeEvent, FormEvent } from 'react';
import Modal from 'react-bootstrap/Modal';
import './ContactMe.css';

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

class ContactMe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(this.state);
    this.props.handleCloseModalContact();
  }

  onNameChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    this.setState({ message: event.target.value })
  }

  render() {
    return (
      <Modal
        className="contact"
        show={this.props.showModalContact}
        onHide={this.props.handleCloseModalContact}
        size="lg"
      >
        <Modal.Header className="contact" closeButton>
          <Modal.Title className="contact">{this.props.text ? this.props.text : 'Contact me'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group  mt-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control  rounded-4 mb-4"
                placeholder="Your name"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control rounded-4 mb-4"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control rounded-4"
                rows={5}
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
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
  }
}

export default ContactMe;