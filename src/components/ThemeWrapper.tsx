import React from 'react';

type Theme = 'light' | 'dark';

interface ThemeWrapperProps {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ theme, children }) => {
  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      {children}
    </div>
  );
};