import Modal from 'react-bootstrap/Modal';
import './ContactMe.css';

interface Props {
    showModalContact: boolean;
    handleCloseModalContact: () => void;
}
const ContactMe = ({ showModalContact, handleCloseModalContact }: Props) => {

  return (
    <Modal className='contact' show={showModalContact} onHide={handleCloseModalContact} size="lg">
      <Modal.Header className='contact' closeButton>
        <Modal.Title className='contact'>Contact me</Modal.Title>
      </Modal.Header>
      <Modal.Body className='contact'>
        <p></p>
      </Modal.Body>
    </Modal>
  );
}

export default ContactMe
