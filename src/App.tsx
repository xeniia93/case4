import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeWrapper } from "./components/ThemeWrapper";
import { ThemeContext } from "./context/ThemeContext";
import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { SliderPage } from "./pages/SliderPage";
import { RegisterPage } from "./pages/RegisterPage";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeWrapper theme={theme}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

      </ThemeWrapper>
    </ThemeContext.Provider>
  );
}

export default App;