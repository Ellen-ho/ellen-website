import React, { useState } from 'react';

interface CarouselWrapperProps {
  images: { src: string; alt: string }[];
  prefix: string;
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  images,
  prefix,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
          >
            <img src={image.src} alt={image.alt} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={goToPreviousSlide} className="btn btn-circle">
                ❮
              </button>
              <button onClick={goToNextSlide} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`btn btn-xs ${index === currentSlide ? 'btn-active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselWrapper;
