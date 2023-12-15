import Modal from 'react-bootstrap/Modal';
import './PumModal.css';

interface Props {
  showPumModal: boolean;
    handleClosePumModal: () => void;
}
const MoreModal = ({ showPumModal, handleClosePumModal }: Props) => {

  return (
    <Modal show={showPumModal} onHide={handleClosePumModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p>
        This project was primarily crafted to empower skilled developers by providing them with the opportunities they need to gain authentic industry experience. Through this endeavor, we aim to not only elevate developers' careers but also contribute meaningfully to the community. We believe in fostering a collaborative environment where developers can showcase their talents, refine their skills, and make a positive impact on the digital landscape. Join us on this journey of mutual growth, where developers thrive, and the community benefits from innovative solutions.
        </p>

        <p>
          •Uses an SQL database to store information about users <br />
          •User Authentication with JWT. <br />
          •Developer user can take aviable projects and start working on them <br />
          •Business users can modify their information, see their projects and contact the developer <br />
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default MoreModal
