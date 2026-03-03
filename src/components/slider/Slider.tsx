import { useContext, useEffect } from "react";
import { SliderContext, SliderProvider } from "./SliderContext";
import { Dots } from "./Dots";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

const slides = [slide1, slide2, slide3];

const SliderContent = () => {
  const context = useContext(SliderContext);
  if (!context) return null;

  const { currentSlide, setCurrentSlide, setDirection } = context;

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img key={index} src={img} alt="slide" loading="lazy" />
        ))}
      </div>
      <Dots slidesCount={slides.length} />
    </div>
  );
};

export const Slider = () => (
  <SliderProvider>
    <SliderContent />
  </SliderProvider>
);