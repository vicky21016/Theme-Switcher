"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import styles from "./about.module.css";

export default function about() {
  return (
    <>
      <h2 className={`fw-bold text-center`}>關於我們</h2>
      <Breadcrumbs
        links={[
          { label: "首頁", href: "/" },
          {
            label: " 關於我們",
            href: "/about",
            active: true,
          },
        ]}
      />
      <h4 className={`fw-bold text-center`}>關於立申</h4>
      <div className={`mb-4 ${styles.sbar}`}></div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-6">
            立申以「小而美」為出發點，透過持續討論，長期與客戶配合，隨時間與需求之變化，提供諮詢與建議，以及最優化之產品服務，縮短前置時程，協助客戶即時滿足多樣化市場要求。
            <br />
            <br />
            服務的產業涵蓋：半導體廠務、自動化系統、綠能、機械製造業等，按客戶需要，提供各式人機介面(HMI)產品與服務，迅速導入現有系統/環境，提供系統即時回饋，減少停機時間，增加系統使用彈性，藉此為客戶創造更大價值。
          </div>
          <div className="col-12 col-md-6"></div>
        </div>
      </div>
      <h4 className="fw-bold text-center">後勤支援</h4>
            <div className={`mb-4 ${styles.sbar}`}></div>
      <div className="container  mb-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center fw-bold">
            HMI技術指導課程
            <br />
            伺服馬達選用
            <br />
            PLC基礎使用諮詢
          </div>
          <div className="col-12 col-md-6"></div>
        </div>
      </div>
      <h4 className="fw-bold text-center ">經營理念</h4>
            <div className={`mb-4 ${styles.sbar}`}></div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-6"></div>
          <div className="col-12 col-md-6 text-center">
            親切負責的態度、專業至上的服務，我用心、您安心、大家都放心。
            <br />
            立申電機，將與您攜手共創美好未來
          </div>
        </div>
      </div>
    </>
  );
}
