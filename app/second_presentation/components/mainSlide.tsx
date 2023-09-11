"use client";

import React from "react";
import { useIndexContext } from "../context/IndexGlobal";
import FirstSlide from "../slides/firstSlide";
import SecondSlide from "../slides/secondSlide";
import CountIndex from "./countIndex";
import styles from '../styles/mainSlide.module.css'

interface componentProps {
  index: number;
}

function MainSlide() {
  const { index } = useIndexContext();
  const slides = [<FirstSlide />, <SecondSlide />];
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
