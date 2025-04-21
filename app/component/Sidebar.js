"use client";

import { useTheme } from "./ThemeContext";
import TheamSwitchButtton from "./ThemeSwitchButton";
import styles from "../page.module.css";

export default function Siderbar() {
  const { theme } = useTheme();

  return (
    <>
      <div className={`${styles.sidebar} ${styles[theme]}`}>
        <h4>Logo</h4>
        <ul>
          <li className={styles.active}>首頁</li>
          <li>頁面01</li>
        </ul>
        <TheamSwitchButtton />
      </div>
    </>
  );
}
