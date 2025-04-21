"use client";

import { useTheme } from "./ThemeContext";
import styles from "../page.module.css";

export default function Header() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${styles.header} ${styles[theme]}`}>
        <h4>首頁</h4>
        <div className={styles.username}>user</div>
      </div>
    </>
  );
}
