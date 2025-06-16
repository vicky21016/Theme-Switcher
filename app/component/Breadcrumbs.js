"use client";

import Link from "next/link";
import styles from "../page.module.css";

export default function Breadcrumbs({ links }) {
  return (
    <div className={`${styles.breadcrumb} ${styles.breadcrumbScroll}`}>
      {links.map((link, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          {link.active ? (
            <span className={styles.BreadcrumbsActive}>
              {truncateText(link.label, 30)}
            </span>
          ) : (
            <Link
              href={link.href}
              className={link.active ? styles.BreadcrumbsActive : ""}
            >
              {truncateText(link.label, 30)}
            </Link>
          )}
          {index < links.length - 1 && <span className="mx-1">/</span>}
        </span>
      ))}
    </div>
  );
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
