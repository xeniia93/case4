import { createContext, useState } from "react";

interface SliderContextType {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  direction: number;
  setDirection: (dir: number) => void;
}

export const SliderContext = createContext<SliderContextType | null>(null);

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  return (
    <SliderContext.Provider
      value={{ currentSlide, setCurrentSlide, direction, setDirection }}
    >
      {children}
    </SliderContext.Provider>
  );
};