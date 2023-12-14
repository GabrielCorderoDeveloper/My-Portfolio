import { useState, useEffect } from 'react';
import './ImgSlider.css';

//The are the images that I will use
const images = [
  "./assets/Modern_stack.png",
  "./assets/Unit_testing.png",
  "./assets/Artistic_background.png"
];

const ImgSlider = () => {
  const [currentImage, setCurrentImage] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => { //Every six seconds the image will change
    if (seconds >= 6) {
      nextImage();
    }
  }, [seconds]);

  useEffect(() => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 500);
  }, [currentImage]);

  const nextImage = () => {  //When the image changes the conter is set to 0
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setSeconds(0);
  };

  const prevImage = () => {  //When the image changes the conter is set to 0
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    setSeconds(0);
  };

  return (
    <div className="img-slider down-animation">
      <div className={`slider-image-container ${showOverlay ? 'overlay-visible' : ''}`}>
        <img className={`slider-image ${showOverlay ? 'blur' : ''}`} src={images[currentImage]} alt="Slider" />
        <div className="slider-overlay"></div>
      </div>
      <button className="slider-button prev-button" onClick={prevImage}>
        &lt; {/* < symbol */}
      </button>
      <button className="slider-button next-button" onClick={nextImage}>
        &gt; {/* > symbol */}
      </button>
    </div>
  );
};

export default ImgSlider;
