"use client";

import styles from "./page.module.css";
import ThemeProvider from "./component/ThemeContext";
import Siderbar from "./component/Sidebar";
import Header from "./component/Header";
import Main from "./component/Main";
import ThemedBox from "./component/ThemedBox";

export default function Home() {

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Siderbar />
        <div className={styles.content}>
          <Header />
          <Main />
          <ThemedBox />
        </div>
      </div>
    </ThemeProvider>
  );
}
