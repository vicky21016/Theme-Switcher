"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import styles from "./contact.module.css";

export default function contact() {
  return (
    <>
      <h2 className={`fw-bold text-center`}>聯絡我們</h2>
      <Breadcrumbs
        links={[
          { label: "首頁", href: "/" },
          {
            label: " 聯絡我們",
            href: "/contact",
            active: true,
          },
        ]}
      />
      <h2 className={`fw-bold mb-5`}>留下您的需求，與我們聯絡</h2>
      <form className="contact-form">
        <div className="mb-3">
          <label htmlFor="company" className="form-label fw-bold">
            公司名稱&部門 <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="company" required />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            聯絡人姓名 <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label fw-bold">
            公司地址
          </label>
          <input type="text" className="form-control" id="address" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label fw-bold">
            聯絡人電話或手機 <span style={{ color: "red" }}>*</span>
          </label>
          <input type="tel" className="form-control" id="phone" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-bold">
            內容 <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className={`btn ${styles.btnSub}`}>
          送出
        </button>
      </form>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps?q=新竹市東區光復路一段268巷9弄4號&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="公司位置"
          className="text-center"
        ></iframe>
      </div>
    </>
  );
}
