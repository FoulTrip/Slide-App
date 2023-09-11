"use client";

import React from "react";
import { useIndexContext } from "../context/IndexGlobal";
import FirstSlide from "../slides/firstSlide";
import SecondSlide from "../slides/secondSlide";
import CountIndex from "./countIndex";
import styles from '../styles/mainSlide.module.css'

function MainSlide() {
  const { index } = useIndexContext();
  const slides = [<FirstSlide key="first" />, <SecondSlide key="second" />];
  return (
    <>
      <div className={styles.mainSlide}>
        {slides[index]}
        <CountIndex />
      </div>
    </>
  );
}

export default MainSlide;
