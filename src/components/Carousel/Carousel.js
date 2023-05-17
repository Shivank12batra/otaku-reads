import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RiRadioButtonLine, RiRadioButtonFill } from 'react-icons/ri';
import naruto from '../../assets/naruto.jpg';
import haiykuu from '../../assets/haiykuu.jpg';
import death_note from '../../assets/death_note.jpg';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      imageUrl: naruto,
      title: 'Action-Packed Manga',
      description: 'Unleash your adrenaline with this action-packed manga.',
    },
    {
      imageUrl: haiykuu,
      title: 'Slice-of-Life Manga',
      description: 'Discover the warmth of friendship and love in this slice-of-life manga.',
    },
    {
      imageUrl: death_note,
      title: 'Fantasy Realm Manga',
      description: 'Embark on a fantastical journey in this captivating manga saga.',
    },
  ]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }, [slides]);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const changeSlide = (index) => {
    if (index !== currentSlide) {
        setCurrentSlide(index)
    }
  }

  useEffect(() => {
    const timer = setTimeout(handleNextSlide, 7000);
    return () => clearTimeout(timer);
  }, [currentSlide, handleNextSlide]);

  return (
    <div className="carousel">
      <div className="carousel-content">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].description}</p>
        <Link className="carousel-button">Visit Store</Link>
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
      </div>
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
      <div className="carousel-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => changeSlide(index)}
            >
              {index === currentSlide ? <RiRadioButtonFill /> : <RiRadioButtonLine />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
