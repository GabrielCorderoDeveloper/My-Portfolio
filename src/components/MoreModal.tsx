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
          My process as a Front End Developer involves following industry
          standards and best practices to ensure high-quality work. Before
          beginning the development, I start with the design phase using Figma
          to create a visual representation of the project{" "}
          <a
            className="text-mainColor font-weight-bold"
            href="https://www.figma.com/proto/T1IsXnN31Z4yBmTxvUEBwg/My-portfolio-2023?node-id=2-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3"
            target="_blank"
          >
            Figma link
          </a>
          . Once the design phase was done the developing phase began. The
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
          To streamline the development process, I utilized a Vite and removed
          unnecessary elements.
        </p>
        <p>
          After that, libraries like React Bootstrap and React Icons were
          installed, followed by Typescript.
        </p>
        <p>
          Next, I installed libraries such as React Bootstrap and React Icons,
          followed by implementing Typescript. Throughout development, I used
          Git for version control, carefully committing changes. Each React
          component was named following Pascal case naming and had its own CSS
          file.
        </p>
        <p>
          In addition, to ensure the security of contact forms, I implemented
          the Axios library to transmit form data to Formspark, while
          integrating the Google reCAPTCHA library to prevent spam. By adhering
          to these standards and utilizing the latest technologies, I create
          projects that are not only visually appealing but also user-friendly
          and secure.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default MoreModal
