import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header>
      <button onClick={toggleTheme}>
        Переключить тему (сейчас: {theme})
      </button>
    </header>
  );
};