"use client";

import Link from "next/link";
import styles from "./productsCard.module.css"

export default function productsCard() {
  return (
    <>
      <div className="col-6 col-lg-3 p-0">
        <Link className={styles.courseCard} href={`/course/${course.id}`}>
          <img
            className={styles.img}
            src={`/course/img/${course.img_url}`}
            alt={course.name}
          />

          <h2 className={styles.name}>{course.name}</h2>
          <h5 className={styles.tag}>{course.type_name}</h5>
        </Link>
      </div>
    </>
  );
}
