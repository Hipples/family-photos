import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';

import './image-slider.css';

const ImageSlider = ({ images }) => { 
  const [sliderIndex, setSliderIndex] = useState(0);

  const showPrevImage = () => {
    setSliderIndex(index => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });  
  }
  const showNextImage = () => {
    setSliderIndex(index => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  const isActive = (index) => sliderIndex === index;  

  return (
    <>
      <a href="#after-image-slider-controls" className="skip-link">Skip Image Slider Controls</a>
      <div className='img-slider-container'>
        {images.map(({ url, alt }, index) => (
          <img 
            key={url} src={url} alt={alt}
            aria-hidden={!isActive(index)}
            className={`img-slider-img ${isActive(index) ? 'active' : ''}`} />
        ))}
      </div>
      <button 
        onClick={showPrevImage} 
        className='img-slider-btn' 
        style={{ left: 0 }}
        aria-label='View Previous Image' >
        <ArrowBigLeft aria-hidden />
      </button>
      <button 
        onClick={showNextImage}
        className='img-slider-btn' 
        style={{ right: 0 }}
        aria-label='View Next Image' >
        <ArrowBigRight aria-hidden />
      </button>
      <div style={{ 
        position: 'absolute', 
        bottom: '.5rem', 
        left: '50%', 
        translate: '-50%',
        display: 'flex',
        gap: '.25rem' }}>
          {images.map((_, index) => (
            <button 
              key={index}
              className='img-slider-dot-btn'
              aria-label={`View Image ${index + 1}`}
              onClick={() => setSliderIndex(index)} >
                {index === sliderIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
            </button>
          ))}
      </div>
      <div id="after-image-slider-controls" />
    </>
  );
}

export default ImageSlider;
