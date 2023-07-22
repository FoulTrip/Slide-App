import React from "react";
import iconAprendizaje from "../../assets/iconAprendizaje.png";
import styles from "../Styles/ThreeTable.module.css";
import Image from "next/image";

function ThreeElement() {
  return (
    <>
      <div className={styles.subCard}>
        <div className={styles.imgSubBox}>
          <Image
            className={styles.iconsSubImg}
            src={iconAprendizaje}
            alt="Rolling Release"
          />
        </div>
        <p className={styles.explain}>
          By installing and configuring Arch Linux from scratch, users can gain
          a greater understanding of the inner workings of the system and the
          individual components that make it up. This provides greater control
          and understanding of their system.
        </p>
      </div>
    </>
  );
}

export default ThreeElement;
