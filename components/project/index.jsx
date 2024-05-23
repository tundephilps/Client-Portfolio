"use client";
import React from "react";
import styles from "./style.module.css";

export default function index({ index, title, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2 className="text-[30px] lg:text=[60px]">{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
