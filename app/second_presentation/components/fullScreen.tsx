import React from "react";
import Image from "next/image";
import styles from "../styles/screen.module.css"
import { useScreenContext } from "../context/screenContext";

import iconMax from "@/assets/blackMaximize.svg";
import iconMin from "@/assets/blackMinimize.svg";

function FullScreen() {
    const { fullScreen, toggleFullScreen } = useScreenContext()
  return (
    <>
      <div className={styles.fullScreen}>
        {fullScreen == true ? (
          <Image
            className={styles.iconScreen}
            src={iconMin}
            alt="iconMin"
            onClick={toggleFullScreen}
          />
        ) : (
          <Image
            className={styles.iconScreen}
            src={iconMax}
            alt="iconMax"
            onClick={toggleFullScreen}
          />
        )}
      </div>
    </>
  );
}

export default FullScreen;
