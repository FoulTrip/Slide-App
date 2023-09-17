import React from "react";
import Link from "next/link";
import styles from "../styles/fourSlide.module.css";
import FullScreen from "../components/fullScreen";

function FourSlide() {
  return (
    <>
      <div className={styles.mainFinal}>
        <div className={styles.submainFinal}>
          <p>Thanks</p>
          <div className={styles.boxBtnFinal}>
            <Link className={styles.btnHome} href="/">
              Home
            </Link>
          </div>
        </div>
      </div>
      <FullScreen />
    </>
  );
}

export default FourSlide;
