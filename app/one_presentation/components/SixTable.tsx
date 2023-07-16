import React from "react";
import Image from "next/image";
import iconConclusion from "../assets/iconConclusion.png";
import styles from "./Styles/SixTable.module.css";

function SixTable() {
  return (
    <>
      <div className={styles.principalBox}>
        <div className={styles.subBox01}>
          <Image
            className={styles.iconBox}
            src={iconConclusion}
            alt="iconPortatil"
          />
        </div>
        <div className={styles.subBox02}>
          <h3>Conclusion</h3>
          <p>
            Arch stands out as a Linux distribution for those looking for a
            minimalist, simple and highly customizable system. Its focus on
            simplicity, minimalism and constant updating appeals to users who
            value control and transparency in their Linux experience.
          </p>
        </div>
      </div>
    </>
  );
}

export default SixTable;
