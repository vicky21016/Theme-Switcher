"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import Card from "../component/AllCard";
import styles from "./about.module.css";

export default function about() {
  return (
   <section>
   <div className={`${styles.bag}`}>
      <h2 className={`fw-bold text-center ${styles.about}`}>關於我們</h2>
      </div>
       <div className="">
       <div className="wrapper">
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
      <h4 className={`fw-bold my-4`}>關於立申</h4>
      {/* <div className={`mb-5 ${styles.sbar}`}></div> */}
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
     </div>
     <div className={`pt-1 pb-4 ${styles.management}`}>
     <div className="wrapper">
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
      </div>
      </div>
      <div className="wrapper">
       <h4 className="fw-bold mb-5">後勤支援服務</h4>
            {/* <div className={`mb-5 ${styles.sbar}`}></div> */}
      <div className="container mb-5">
        <div className="row">
          <Card
        icon="bi bi-cpu"
        col="col-12 col-md-4"
        name="PLC 技術支援"
        text="提供 PLC 應用建議與基礎諮詢"
        link="/support/plc"
      />
      <Card
        icon="bi bi-gear"
        col="col-12 col-md-4"
        name="伺服設定建議"
        text="根據負載需求提供參數建議"
        link="/support/servo"
      />
      <Card
        icon="bi bi-book"
        col="col-12 col-md-4"
        name="HMI 教學"
        text="人機介面快速導入與教學"
        link="/support/hmi"
      />
        </div>
        </div>
      </div>
    </div>
    </section>
  );
}
