"use client";

import { useEffect } from "react";

export default function Translate() {
  useEffect(() => {
    // 初始化翻譯元件
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "zh-TW",
          includedLanguages: "zh-TW,en",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    addScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }}
    ></div>
  );
}
