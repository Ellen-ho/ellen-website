import React, { useState } from 'react';

interface CarouselWrapperProps {
  images?: { src: string; alt: string }[];
  prefix: string;
  className?: string;
  imgClassName?: string;
  theme: string;
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  images = [],
  prefix,
  className,
  imgClassName,
  theme,
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

  const arrowColor = theme === 'night' ? '#E4D8B4' : '#0D1424';
  const borderColor = theme === 'night' ? '#E4D8B4' : '#0D1424';
  const arrowBackgroundColor =
    theme === 'night' ? 'rgba(228, 216, 180, 0.2)' : 'rgba(13, 20, 36, 0.1)';
  const arrowHoverBackgroundColor =
    theme === 'night' ? 'rgba(228, 216, 180, 0.4)' : 'rgba(13, 20, 36, 0.3)';

  if (images.length === 0) {
    return null;
  }

  const arrowButtonStyle = {
    backgroundColor: arrowBackgroundColor,
    color: arrowColor,
    border: `1px solid ${borderColor}`,
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    cursor: 'pointer',
    outline: 'none',
    position: 'relative' as const,
    overflow: 'hidden',
    transition: 'background-color 0.3s ease',
    zIndex: 10,
  };

  const arrowStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '12px',
    lineHeight: '1',
  };

  const numberButtonStyle = (index: number) => ({
    backgroundColor: index === currentSlide ? arrowColor : 'transparent',
    border: `1px solid ${borderColor}`,
    color: index === currentSlide ? '#fff' : arrowColor,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '4px 8px',
    borderRadius: '4px',
    minWidth: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  });

  return (
    <div className={`${className} relative`} style={{ zIndex: 1 }}>
      <div className="carousel relative w-full overflow-hidden">
        <div
          className="carousel-inner flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className={`h-full w-full object-cover ${imgClassName}`}
                style={{ width: '100%', height: '330px' }}
              />
            </div>
          ))}
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={goToPreviousSlide}
            style={arrowButtonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                arrowHoverBackgroundColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = arrowBackgroundColor)
            }
          >
            <span style={arrowStyle}>❮</span>
          </button>
          <button
            onClick={goToNextSlide}
            style={arrowButtonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                arrowHoverBackgroundColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = arrowBackgroundColor)
            }
          >
            <span style={arrowStyle}>❯</span>
          </button>
        </div>
      </div>

      <div
        className="flex w-full justify-center gap-2 py-4"
        style={{ zIndex: 10, position: 'relative' }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="hover:opacity-80 focus:outline-none"
            style={numberButtonStyle(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselWrapper;
