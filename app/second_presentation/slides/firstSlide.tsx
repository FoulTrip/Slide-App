"use client"

import React from "react";
import styles from "../styles/firstSlide.module.css";
import Image from "next/image";
import logoRPI from "@/assets/iconRPI.webp";
import Typewritter from "typewriter-effect";

function FirstSlide() {
  return (
    <>
      <div className={styles.boxSlide}>
        <div className={styles.subBoxSlide}>
          <div className={styles.imgLogo}>
            <Image className={styles.iconRust} src={logoRPI} alt="iconRust" />
          </div>
          <div className={styles.textLogo}>
            <p className={styles.nameLogo}>Raspberry Pi</p>
            <p className={styles.slogan}>
              <Typewritter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Computing for everybody"
                    )
                    // .pauseFor(1500)
                    .changeDelay(10)
                    .start();
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSlide;
