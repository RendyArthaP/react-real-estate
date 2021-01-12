import React, {useState, useRef, useEffect} from 'react';
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';

const Hero = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null)

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent(current => (current === length - 1 ? 0 : current + 1))
  //   };

  //   timeout.current = setTimeout(nextSlide, 3000);

  //   return function() {
  //     if(timeout.current) {
  //       clearTimeout(timeout.current)
  //     }
  //   }
  // }, [current, length])

  const prevSlide = () => {
    if(current === 0) {
      setCurrent(length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if(current === length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="w-full h-full flex relative justify-center items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div className="w-full h-full z-10" key={index}>
            {index === current && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img src={slide.image} alt={slide.alt} className="absolute top-0 left-0 w-screen h-screen object-cover"/>
                <div className="relative pt-20 z-10 flex flex-col w-full px-6 text-white text-left">
                  <h1 className="font-bold font-display text-2xl w-1/2 lg:w-full">{slide.title}</h1>
                  <p className="font-display font-medium py-1">{slide.price}</p>
                  <button
                  to={slide.path}
                  className="bg-black w-32 h-10 py-1 px-1 rounded"
                >
                  <div className="flex flex-row justify-between px-2">
                    <p className="text-gray-300 font-medium">
                      {slide.label}
                    </p>
                    <div className="w-4 h-4 fill-white mt-1">
                      <ArrowRight/>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            )}
          </div>
        ))}
        <div className="absolute flex flex-row bottom-50 right-35 z-10">
          <div
            className="focus:outline-none w-10 h-10 ml-2 cursor-pointer bg-black fill-white rounded-full p-1 hover:bg-yellow-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            onClick={prevSlide}
          >
            <ArrowLeft />
          </div>
          <div
            className="focus:outline-none w-10 h-10 ml-2 cursor-pointer bg-black fill-white rounded-full p-1 hover:bg-yellow-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            onClick={nextSlide}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
