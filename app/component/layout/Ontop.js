"use client";
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import styles from "../../page.module.css";

export default function Ontop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 1080);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.topIcon} ${showButton ? styles.show : ""}`}
      onClick={scrollToTop}
    >
      <FaAngleUp className="fs-4 text-white" />
    </button>
  );
}
