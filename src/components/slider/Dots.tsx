import { useContext } from "react";
import { SliderContext } from "./SliderContext";

export const Dots = ({ slidesCount }: { slidesCount: number }) => {
  const context = useContext(SliderContext);
  if (!context) return null;

  const { currentSlide, setCurrentSlide, setDirection } = context;

  const handleClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="dots">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <span
          key={index}
          className={index === currentSlide ? "dot active" : "dot"}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};