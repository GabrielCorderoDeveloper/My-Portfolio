import Modal from 'react-bootstrap/Modal';
import './MoreModal.css';

interface Props {
    showModal: boolean;
    handleCloseModal: () => void;
}
const MoreModal = ({ showModal, handleCloseModal }: Props) => {

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>How this project was made?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          The project before being coded was designed using Figma{" "}
          <a
            href="https://www.figma.com/proto/T1IsXnN31Z4yBmTxvUEBwg/My-portfolio-2023?node-id=2-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3"
            target="_blank"
          >
            Project link
          </a>{" "}
          and once the design phase was done the developing phase began. The
          project was built using the following technologies:
        </p>
        <ul>
          <li>React</li>
          <li>Bootstrap 5</li>
          <li>Typescript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <p>
          The boilerplate of the application was made using vite, and then all
          the unnecessary elements were removed.
        </p>
        <p>
          After that, libraries like React Bootstrap and React Icons were
          installed, followed by Typescript.
        </p>
        <p>
          Then the git repository was initialized, in which all the changes were
          carefully committed. All the react components follow Pascal case
          naming, and each one has its own CSS file.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default MoreModal
