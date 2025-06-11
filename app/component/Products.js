"use client";

import Link from "next/link";
import styles from "./products.module.css";

export default function Products() {
  return (
    <div className={`${styles.bag}`}>
      <section className="container">
        <div className={`row g-5 ${styles.product}`}>
          <div className={`col-12 col-sm-6 col-lg-4  ${styles.card}`}>
            <h5 className="my-5">威綸 WEINTEK人機介面</h5>
            <img src="./weintek.png" className="mb-3" />
            <button className={`btn ${styles.readMore}`}>查看更多</button>
          </div>
          <div className={`col-12 col-sm-6 col-lg-4 ${styles.card}`}>
            <h5 className="my-5">可程式控制器PLC</h5>
            <img src="./plc.png" className="mb-3" />
            <button className={`btn ${styles.readMore}`}>查看更多</button>
          </div>
          <div className={`col-12 col-sm-6 col-lg-4 ${styles.card}`}>
            <h5 className="my-5">伺服馬達及驅動器</h5>
            <img src="./se3.jpg" className="mb-3" />
            <button className={`btn mb-5 ${styles.readMore}`}>查看更多</button>
          </div>
          <div className={`col-12 col-sm-6 col-lg-4 mb-2 ${styles.card}`}>
            <h5 className="my-5">變頻器INVERTER</h5>
            <img src="./MR-J5.jpg" className="mb-3" />
            <button className={`btn ${styles.readMore}`}>查看更多</button>
          </div>
          <div className={`col-12 col-sm-6 col-lg-4 mb-2 ${styles.card}`}>
            <h5 className="my-5">世協減速機</h5>
            <img src="./AD1048.png" className="mb-3" />
            <button className={`btn ${styles.readMore}`}>查看更多</button>
          </div>
          <div className={`col-12 col-sm-6 col-lg-4 mb-2 ${styles.card}`}>
            <h5 className="my-5">電源供應器</h5>
            <img src="./PGF.png" className="mb-3" />
            <button className={`btn mb-5 ${styles.readMore}`}>查看更多</button>
          </div>
        </div>
      </section>
    </div>
  );
}
