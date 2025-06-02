"use client";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {

  return (
    <>
    <footer className={styles.footer}>
      <div className={`container `}>
      <div className="row pt-4">
        <div className="col-6 col-md-3">
          <h6 className="mb-2 fw-bold">立申電機有限公司</h6>
          <p>新竹市光復路一段268巷9弄4號1樓</p>
        </div>
        <div className="col-6 col-md-3">
          <p className="mb-1">電話：(03)579-7586</p>
          <p className="mb-1">傳真：(03)579-7627</p>
        </div>
        <div className="col-6 col-md-3">
          <p className="mb-1">FB：立申電機有限公司</p>
          <p className="mb-1">E-Mail：reason@easyhmi.com.tw</p>
        </div>
        <div className="col-6 col-md-3">
          <ul className="space-y-2">
            <li><Link href="/about" className="">關於我們</Link></li>
            <li><Link href="/product" className="">您的詢價單</Link></li>
            <li><Link href="/contact" className="">聯絡我們</Link></li>
            <li><Link href="/product" className="">隱私權政策</Link></li>
          </ul>
        </div>
      </div>
    
    </div>
    </footer>
    <div className={`text-center ${styles.bottom}`} >
        © {new Date().getFullYear()} Reason Automation co.,ltd. All Rights Reserved.
      </div>
    </>
    
  );
}
