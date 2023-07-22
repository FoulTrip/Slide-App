"use client";

import styles from "./page.module.css";
import FirstTable from "./components/FirstTable";
import SecondTable from "./components/SecondTable";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import iconArrowLeftCirc from "@/assets/arrow-left-circle.svg";
import iconArrowRightCirc from "@/assets/arrow-right-circle.svg";
import iconRestart from "@/assets/iconRefresh.svg";
import iconHome from "@/assets/iconHome.svg";
import ThreeTable from "./components/ThreeTable";
import FourTable from "./components/FourTable";
import FiveTable from "./components/FiveTable";
import SixTable from "./components/SixTable";

function PageFirstPresentation() {
  const [index, setIndex] = useState(0);

  const table = [
    <FirstTable key="first" />,
    <SecondTable key="second" />,
    <ThreeTable key="three" />,
    <FourTable key="four" />,
    <FiveTable key="five" />,
    <SixTable key="six" />,
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

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrev();
    }
  }

  useEffect(() => {
    // Esto es el event listener para el evento 'keydown' cuando el componente se monte
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  });

  return (
    <>
      <div className={styles.boxPrincipal}>
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
                className={styles.iconControll}
              />
            )}

            {index != 0 ? (
              <Image
                src={iconRestart}
                onClick={handleRestart}
                alt="restart"
                className={styles.iconControll}
              />
            ) : (
              ""
            )}

            {index <= table.length - 2 ? (
              <Image
                src={iconArrowRightCirc}
                onClick={handleNext}
                alt="arrowRight"
                className={styles.iconControll}
              />
            ) : (
              ""
            )}

            <Link href="/">
              <Image
                src={iconHome}
                className={styles.iconControll}
                alt="iconHome"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageFirstPresentation;
