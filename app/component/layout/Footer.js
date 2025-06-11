"use client";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
    <div className={`mt-5 ${styles.wavesContainer}`}>
        <svg
          className={styles.waves}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#808085" />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255, 255, 255, 0.2)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="#808085"
            />
          </g>
        </svg>
      </div>
      <footer className={styles.footer}>
        <div className={`container `}>
          <div className="row pt-5">
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
              <h4 className="mb-4 fw-bold">立申電機有限公司</h4>
              <p>
                <a
                  href="https://www.google.com/maps?q=新竹市東區光復路一段268巷9弄4號"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-geo-alt-fill me-2"></i>新竹市光復路一段268巷9弄4號1樓
                </a>
              </p>
              <p className="mb-2"><i className="bi bi-telephone-fill" style={{ fontSize: "0.9rem", marginRight: "6px" }}></i>(03)579-7586</p>
              <p className="mb-2"><i className="bi bi-printer-fill" style={{ fontSize: "1.1rem", marginRight: "6px" }}></i>(03)579-7627</p>
            </div>
            {/* <div className="col-12 col-sm-6 col-lg-4 mb-4">
              <p className="mb-2"><i className="bi bi-telephone-fill" style={{ fontSize: "1.3rem", marginRight: "6px" }}></i>(03)579-7586</p>
              <p className="mb-2"><i className="bi bi-printer-fill" style={{ fontSize: "1.5rem", marginRight: "6px" }}></i>(03)579-7627</p>
            </div> */}
            
            <div className={`col-12 col-sm-6 col-lg-4 ${styles.about}`}>
              <ul className="space-y-2">
              <h5 className="fw-bold mb-4">客戶服務</h5>
                <li className="mb-2">
                  <Link href="/about" className="">
                    關於我們
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/requrst" className="">
                    您的詢價單
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="">
                    聯絡我們
                  </Link>
                </li>
                <li className="mb-5">
                  <Link href="/about/policy" className="">
                    隱私權政策
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 mb-4">
             <h5 className="fw-bold mb-4">社群信箱</h5>
              <p className="mb-2">
                <Link
                  href="https://www.facebook.com/easyhmi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-facebook"
                    style={{ fontSize: "1.3rem", marginRight: "6px" }}
                  ></i>
                  立申電機有限公司
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link
                  href="mailto:reason@easyhmi.com.tw"
                  className="text-decoration-none"
                >
                  <i
                    className="bi bi-envelope-fill"
                    style={{ fontSize: "1.2rem", marginRight: "6px" }}
                  ></i>
                  reason@easyhmi.com.tw{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className={` ${styles.sbar}`}></div>
      <div className={`text-center ${styles.bottom}`}>
        © {new Date().getFullYear()} Reason Automation co.,ltd. All Rights
        Reserved.
      </div>
    </>
  );
}
