"use client";

import React from "react";

import styles from "./project.module.css";

export default function Project({ index, title, setModal }) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2>{title}</h2>
      <p>Desingn & Development</p>
    </div>
  );
}
