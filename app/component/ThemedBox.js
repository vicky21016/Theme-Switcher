"use client";

import { useTheme } from './ThemeContext';
import styles from "../page.module.css";

export default function ThemedBox() {
  const { theme } = useTheme();

  return (
    <div className={styles.theme}>
      目前主題為：{theme}
    </div>
  );
}
