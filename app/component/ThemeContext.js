"use client";

import { createContext, useContext, useState } from 'react';
import styles from "../page.module.css";

// 提供主題資料的 Context
const ThemeContext = createContext();

export default function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState('light');

  // 切換主題
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${styles.app} ${styles[theme]}`}>{children}
      </div>
    </ThemeContext.Provider>
  );
};

// 自訂 hook 
export const useTheme = () => useContext(ThemeContext);


