"use client"

import Link from "next/link";
import styles from "../page.module.css";

export default function Breadcrumbs ({ links }) {
  return (
    <div className={styles.breadcrumb}>
      {links.map((link, index) => (
        <span key={index}>
          <Link
            href={link.href}
            className={link.active ? styles.BreadcrumbsActive : ""}
          >
            {link.label}&nbsp;
          </Link>
          &nbsp;
          {index < links.length - 1 && 
           <span>/</span>
          }
        </span>
      ))}
    </div>
  );
};

