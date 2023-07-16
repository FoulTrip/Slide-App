"use client";

import styles from "./page.module.css";
import FirstTable from "./components/FirstTable";
import SecondTable from "./components/SecondTable";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import iconArrowLeftCirc from "@/assets/arrow-left-circle.svg";
import iconArrowRightCirc from "@/assets/arrow-right-circle.svg";
import iconRestart from "@/assets/iconRefresh.svg";
import iconHome from "@/assets/iconHome.svg"
import ThreeTable from "./components/ThreeTable";
import FourTable from "./components/FourTable";
import FiveTable from "./components/FiveTable";
import SixTable from "./components/SixTable";

function PageFirstPresentation() {
  const [index, setIndex] = useState(0);

  const table = [
    <FirstTable />,
    <SecondTable />,
    <ThreeTable />,
    <FourTable />,
    <FiveTable />,
    <SixTable />,
  ];

  const handleNext = () => {
    setIndex(index + 1);
  };

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleRestart = () => {
    setIndex(0);
  };

  return (
    <>
      <div className={styles.PrincipalModel}>
        <div className={styles.subPrincipalModel}>{table[index]}</div>
      </div>
      <div className={styles.controlls}>
        <div className={styles.subControlls}>
          {index == 0 ? (
            ""
          ) : (
            <Image
              src={iconArrowLeftCirc}
              onClick={handlePrev}
              alt="arrowLeft"
            />
          )}

          {index != 0 ? (
            <Image src={iconRestart} onClick={handleRestart} alt="restart" />
          ) : (
            ""
          )}

          {index <= table.length - 2 ? (
            <Image
              src={iconArrowRightCirc}
              onClick={handleNext}
              alt="arrowRight"
            />
          ) : (
            ""
          )}

          <Link href="/"><Image src={iconHome} alt="iconHome" /></Link>
        </div>
      </div>
    </>
  );
}

export default PageFirstPresentation;
