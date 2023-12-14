import { useState, useEffect, useRef } from 'react';
import './WhoIAm.css';
import { Typewriter } from 'react-simple-typewriter';
import gabriel from '../../public/assets/gabriel.jpg';

const WhoIAm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => { // When the user is on the Who I Am section an animation will be activated
    const observer:any = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          setTimeout(() => {
            setIsSign(true);
          }, 4_800)
        }
      });
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="whoIAm"
      className={`d-flex row align-content-between main-w-container ${
        isVisible ? 'visible' : ''
      }`}
    >
      <p className="col-md-12 title who-t-spacing">Who I am?</p>

      <div className={`col-lg-6 who-spacing ${isVisible ? 'left-animation' : ''}`}>
        {/* <iframe
          className="responsive-iframe"
          src="https://www.youtube.com/embed/wRwXM96wlhI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
        <img className='g-image' src={gabriel} alt="Image of Gabriel Cordero" />
      </div>

      <div className={`col-lg-5 pt-xl-5 `}> 
      {isVisible ? ( //This will be rendered only when the user is on the Who I am section.
      <>
        <p className="paragraph text-darkGray who-spacing d-flex align-items-center caveat">
              Driven by my love of technology and a desire to excel in my career, I
              have dedicated myself to becoming a top-tier Full-stack developer. From
              staying up-to-date with the latest technologies to actively seeking out
              opportunities for growth and development.
        </p>

        <p className="paragraph text-darkGray who-spacing d-flex align-items-center caveat">
          <Typewriter //Typing effect of the second paragraph
            words={[
              `I am committed to excellence
              in every aspect of my journey. By choosing me as your Full-stack developer
              , you can rest assured that you are getting someone who
              will go above and beyond to deliver outstanding results.`,
            ]}
            typeSpeed={12}
            deleteSpeed={999999999}
          />
        </p>

        <p className='resume'>
          <a className='paragraph d-flex align-items-center caveat ps-5 ps-md-0' target='blank' href='https://drive.google.com/file/d/18hnc70iAA6Qxrp955--pNWUBJrDW3UgC/view?usp=sharing'>View my resume
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </a>
        </p>
        
        <p className='ps-5 ps-md-0'>
        <span className='typing-text who-spacing paragraph'>
          <br />
        {isSign ? (
          <Typewriter //Typing effect of my sign
          words={[
            `Gabriel Cordero.`,
          ]}
          typeSpeed={100}
          deleteSpeed={999999999}
        />
        ) : ''}
        </span>
        </p>
        
      </> ) : ''}

      </div>
    </div>
  );
};

export default WhoIAm;