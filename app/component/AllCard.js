"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./AllCard.module.css"

export default function AllCard ({ icon, col, name, text, link }) {
  return (
   
      <div className={`mb-5 ${col}`}>
      <Link href={link} passHref className="text-decoration-none">
        <div className={styles.card6}>
          <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '128px' }}>
            <i className={`${icon}`} style={{ fontSize: '48px', color: '#045EDD' }}></i>
          </div>
          <div className={styles.card6Title}>
            {name}
          </div>
          <p className={styles.card6Description}>
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
};


