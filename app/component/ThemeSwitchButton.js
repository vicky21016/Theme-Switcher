"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import styles from "../page.module.css";

export default function ThemeSwitchButton() {
  const  { theme ,toggleTheme} = useTheme();
  return (
    <>
      <button className={`${styles.btn} ${styles[theme]}`} onClick={toggleTheme}>
        切換主題：{theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
}
