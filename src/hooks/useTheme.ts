import { useEffect, useState } from 'react';

enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export const useTheme = () => {
  const activeTheme = localStorage.getItem('theme') || ThemeEnum.light;
  const [theme, setTheme] = useState<ThemeEnum>(activeTheme as ThemeEnum);
  const nextTheme = theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;

  const toggleTheme = () => {
    if (theme === ThemeEnum.light) {
      setTheme(ThemeEnum.dark);
    } else {
      setTheme(ThemeEnum.light);
    }
  };

  useEffect(() => {
    const docHtml = window.document.documentElement;
    localStorage.setItem('theme', theme);
    docHtml.classList.remove(nextTheme);
    docHtml.classList.add(theme);
  }, [theme, nextTheme]);

  return {
    theme,
    toggleTheme,
  };
};
