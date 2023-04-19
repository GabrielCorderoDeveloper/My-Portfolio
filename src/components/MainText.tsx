import { useState } from 'react';
import './MainText.css';
import ContactMe from './ContactMe';

const MainText = () => {
      //1! Contact modal
      const [showModalContact, setShowModalContact] = useState(false);
      const handleShowModalContact = () => setShowModalContact(true);
      const handleCloseModalContact = () => setShowModalContact(false);

  return (
    <>
      <div className="main-container col-lg-3 col-md-5 col-9 left-animation">
        <div className="d-flex flex-column justify-content-start white-transparent-bg">
          <p className="title text-lightBlack">
            My name <br />
            is <b className="roboto">Gabriel</b>
          </p>
          <p className="paragraph text-darkGray">
            As a passionate and dedicated individual, I am fully committed to
            achieving my dream of becoming a Front End developer. With a
            relentless work ethic and unwavering determination.
          </p>
        </div>
        <button
          className="bg-mainColor button text-clearWhite"
          onClick={handleShowModalContact}
        >
          Hire me
        </button>
      </div>
      <ContactMe
        showModalContact={showModalContact}
        handleCloseModalContact={handleCloseModalContact}
        text="Hire me"
      />
    </>
  );
}

export default MainText
