import React, { useState, useEffect, useRef } from 'react';
import './WhoIAm.css';

const WhoIAm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => { // When the user is on the Who I Am section an animation will be activated
    const observer:any = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

      <div className={`col-lg-7 who-spacing ${isVisible ? 'left-animation' : ''}`}>
        <iframe
          className="responsive-iframe"
          src="https://www.youtube.com/embed/wRwXM96wlhI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className={`col-lg-5 pt-lg-5 `}>
        <p className="paragraph text-darkGray who-spacing d-flex align-items-center">
          As a technology enthusiast, I have always been fascinated by the endless
          possibilities of the tech industry. From the early days of my childhood,
          I spent countless hours tinkering with computers and software, eager to
          explore and learn as much as I could. This passion has only grown
          stronger over the years, as I have witnessed firsthand the
          transformative power of technology in our world. From artificial
          intelligence to virtual reality.

        </p>
        <p className="paragraph text-darkGray who-spacing d-flex align-items-center">
          Driven by my love of technology and a desire to excel in my career, I
          have dedicated myself to becoming a top-tier Front End developer. From
          staying up-to-date with the latest technologies to actively seeking out
          opportunities for growth and development, I am committed to excellence
          in every aspect of my journey. By choosing me as your Front
          End developer, you can rest assured that you are getting someone who
          will go above and beyond to deliver outstanding results.
        </p>
      </div>
    </div>
  );
};

export default WhoIAm;