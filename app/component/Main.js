"use client";

import { useTheme } from "./ThemeContext";
import styles from "../page.module.css";

export default function Main() {
  const { theme } = useTheme();
    return (
      <>
      <div className={styles.main}>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 1</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 2</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 3</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 4</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 5</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 6</div>
    </div></>
    );
  }