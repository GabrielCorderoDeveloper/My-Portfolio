import Modal from 'react-bootstrap/Modal';

interface Props {
    showModal: boolean;
    handleCloseModal: () => void;
}
const MoreModal = ({ showModal, handleCloseModal }: Props) => {

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>More Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This is some additional information that you can show in the modal.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default MoreModal
