"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import styles from "./request.module.css";

export default function request() {
  return (
    <section>
      <div className={`${styles.bag}`}>
        <h2 className={`fw-bold text-center ${styles.about}`}>詢價單</h2>
      </div>
      <div className="wrapper">
        <Breadcrumbs
          links={[
            { label: "首頁", href: "/" },
            {
              label: " 詢價單",
              href: "/request",
              active: true,
            },
          ]}
        />
        <div className={`row g-3 mt-3 ${styles.customTable}`}>
          <div className="col-12 col-md-8">
            <table className="w-100">
              <thead>
                <tr>
                  <th style={{ width: 280 }} className={styles.imgth} />
                  <th>品項</th>
                  {/* <th>單價</th> */}
                  <th>數量</th>
                  {/* <th>總價</th> */}
                  <th />
                </tr>
              </thead>
            </table>
          </div>
          <div className={` col-12 col-md-4 mt-3 mb-5 ${styles.container}`}>
            <h5 className={`fw-bold mb-5`}>發送詢價需求</h5>

            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="company" className="form-label fw-bold">
                  公司名稱&部門 <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.inputStyle}`}
                  id="company"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  聯絡人姓名 <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.inputStyle}`}
                  id="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-bold">
                  聯絡人電話或手機 <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="tel"
                  className={`form-control ${styles.inputStyle}`}
                  id="phone"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className={`form-control ${styles.inputStyle}`}
                  id="email"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="form-label fw-bold">
                  備註
                </label>
                <textarea
                  className={`form-control ${styles.inputStyle}`}
                  id="message"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className={`btn w-100 ${styles.btnSub}`}>
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
