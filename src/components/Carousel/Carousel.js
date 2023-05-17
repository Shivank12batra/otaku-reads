import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RiRadioButtonLine, RiRadioButtonFill } from 'react-icons/ri';
import naruto from '../../assets/naruto.jpg';
import haiykuu from '../../assets/haiykuu.jpg';
import death_note_2 from '../../assets/death_note_2.jpg';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      imageUrl: naruto,
      title: 'Slide 1',
      description: 'Description for Slide 1',
    },
    {
      imageUrl: haiykuu,
      title: 'Slide 2',
      description: 'Description for Slide 2',
    },
    {
      imageUrl: death_note_2,
      title: 'Slide 3',
      description: 'Description for Slide 3',
    },
  ]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }, [slides]);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const timer = setTimeout(handleNextSlide, 7000);
    return () => clearTimeout(timer);
  }, [currentSlide, handleNextSlide]);

  return (
    <div className="carousel">
      <div className="carousel-content">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].description}</p>
        <button className="carousel-button">Visit Store</button>
      </div>
      <div className="carousel-image">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.imageUrl}
            alt={`Slide ${index + 1}`}
            className={`slide-image ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
        <div className="carousel-arrow right">
            <div className="arrow" onClick={handleNextSlide}>
            <FaArrowRight />
            </div>
        </div>
        <div className="carousel-arrow left">
            <div className="arrow" onClick={handlePreviousSlide}>
            <FaArrowLeft />
            </div>
        </div>

        {/* <div className='carousel-arrow-right'>
            <div className="arrow" onClick={handleNextSlide}>
                <FaArrowRight />
            </div>
        </div> */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
            >
              {index === currentSlide ? <RiRadioButtonFill /> : <RiRadioButtonLine />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
