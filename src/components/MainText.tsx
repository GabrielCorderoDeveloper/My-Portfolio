import { useState } from 'react';
import './MainText.css';
import ContactMe from './ContactMe';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const MainText = () => {
      //1! Contact modal
      const [showModalContact, setShowModalContact] = useState(false);
      const handleShowModalContact = () => setShowModalContact(true);
      const handleCloseModalContact = () => setShowModalContact(false);
      //This contain 15 empty spaces to avoid line breaking with the typing effect
      const spaces = Array(15).fill('\u00A0').join('');

  return (
    <>
      <div className="main-container col-lg-3 col-md-5 col-10 left-animation">
        <div className="d-flex flex-column justify-content-start white-transparent-bg">
          <p className="title text-lightBlack">
            My name <br />
            is <b className="roboto">Gabriel</b>
          </p>
          <p className="paragraph text-darkGray">
          Hello, I'm Gabriel Cordero, Front-End developer. Fluent in both English and Spanish. I believe my unique journey and diverse background make me          <span className='typing-text'>
            <Typewriter //Typing effect
              words={[' an exceptional candidate ', ' the perfect candidate ']}
              loop={true}
              delaySpeed={3000}
            />
          </span>
          <Cursor/>
           for your team.{spaces}
          </p>
        </div>
        <button
          className="bg-mainColor button text-clearWhite"
          onClick={handleShowModalContact}
        >
          Contact me
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
