import React, { useState, useEffect } from 'react';
import './ImgSlider.css';

const images = [
  "https://i.imgur.com/Yszno5e.jpg",
  "https://i.imgur.com/ZBzbir7.jpg",
  "https://i.imgur.com/xpeJkkR.jpg",
  "https://i.imgur.com/0NAc45h.jpg"
];

const ImgSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    resetInterval();
  }, [currentImage]);

  const startInterval = () => {
    const id = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
      }, 500);
    }, 5000);
    setIntervalId(id);
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    startInterval();
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 500);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 500);
  };

  return (
    <div className="img-slider down-animation ">
      <div className={`slider-image-container ${showOverlay ? 'overlay-visible' : ''}`}>
        <img className={`slider-image ${showOverlay ? 'blur' : ''}`} src={images[currentImage]} alt="Slider" />
        <div className="slider-overlay"></div>
      </div>
      <button className="slider-button prev-button" onClick={prevImage}>
        &lt;
      </button>
      <button className="slider-button next-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImgSlider;
