"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Slider() {

  return (
    <section>
      <div className={`mt-5 lumi-all-wrapper ${styles.courseContainer}`}>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                {/* 指示器 */}
                <div className={`carousel-indicators ${styles.carouselbtn}`}>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                </div>
                <div className={`carousel-inner ${styles.carouselTrack}`}>
                  {/* 第一個課程 */}
                  <div
                    className={`carousel-item active ${styles.carouselItem}`}
                  >
                    <img className="d-block w-100" src="/teacher-img/m1.jpg" />
                  </div>
                  <div className={`carousel-item ${styles.carouselItem}`}>
                    <img className="d-block w-100" src="/teacher-img/m2.jpg" />
                  </div>
                  <div className={`carousel-item ${styles.carouselItem}`}>
                    <img className="d-block w-100" src="/teacher-img/m5.jpg" />
                  </div>
                  <div className={`carousel-item ${styles.carouselItem}`}>
                    <img className="d-block w-100" src="/teacher-img/m6.png" />
                  </div>
                  <div className={`carousel-item ${styles.carouselItem}`}>
                    <img className="d-block w-100" src="/teacher-img/m3.jpg" />
                  </div>
                  <div className={`carousel-item ${styles.carouselItem}`}>
                    <img className="d-block w-100" src="/teacher-img/m7.jpg" />
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
    </section>
  );
}


