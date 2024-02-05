import { useState, useEffect, useRef } from 'react';
import './WhoIAm.css';
import { Typewriter } from 'react-simple-typewriter';

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
        <img className='g-image' src='./assets/gabriel_c.png' alt="Image of Gabriel Cordero" />
      </div>

      <div className={`col-lg-5 pt-xl-5 `}> 
      {isVisible ? ( //This will be rendered only when the user is on the Who I am section.
      <>
        <p className="paragraph text-darkGray who-spacing d-flex align-items-center caveat">
         I've cultivated a deep understanding of both front-end and back-end development processes. My teaching experience at BrainStation, where I served as a Software Engineer TA, provided me with invaluable insights into the nuances of web development and effective collaboration within cross-functional teams. From leading students through the intricacies of Full Stack Web Development to conducting code reviews and promoting cross-collaboration across Web Development.
        </p>

        <p className="paragraph text-darkGray who-spacing d-flex align-items-center caveat">
          <Typewriter //Typing effect of the second paragraph
            words={[
              `From spearheading the digital transformation of ANCA Tile Inc., to introducing dynamic translation for Hijos De Dios, my experience reflects a track record of innovation and achievement. Consistently pushing the boundaries of what's possible in software engineering. As your developer, you can trust that I will bring a unique blend of technical expertise, creativity, and dedication to every project.`,
            ]}
            typeSpeed={12}
            deleteSpeed={999999999}
          />
        </p>

        <p className='resume'>
          <a className='paragraph d-flex align-items-center caveat ps-5 ps-lg-0' target='blank' href='https://drive.google.com/file/d/18hnc70iAA6Qxrp955--pNWUBJrDW3UgC/view?usp=sharing'>View my resume
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </a>
        </p>
        
        <p className='ps-5 ps-lg-0'>
        <span className='typing-text who-spacing paragraph  pt-0'>
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



