import React from "react";
import styles from "../Styles/ThreeTable.module.css"
import iconRepository from "../../assets/iconRepository.png";
import Image from "next/image";

function FiveElement() {
  return (
    <>
      <div className={styles.subCard}>
        <div className={styles.imgSubBox}>
          <Image
            className={styles.iconsSubImg}
            src={iconRepository}
            alt="Rolling Release"
          />
        </div>
        <p className={styles.explain}>
          It has a wide selection of packages in its official repositories and
          in the community. In addition, packages are updated frequently to keep
          the system always up to date.
        </p>
      </div>
    </>
  );
}

export default FiveElement;
