import Image from "next/image";
import iconDisp from "@/assets/explainDispRPI.png";
import styles from "../styles/threeSlide.module.css";

import cpuIcon from "@/assets/cpu.svg";
import iconDisplay from "@/assets/monitor.svg";
import iconUSB from "@/assets/server.svg";
import iconRedes from "@/assets/rss.svg";
import resultFinal from "@/assets/exampleRasp.jpg";
import secontResult from "@/assets/Raspberry-Pi-con-pantalla.webp";
import FullScreen from "../components/fullScreen";

function ThreeSlide() {
  return (
    <>
      <div className={styles.Box}>
        <div className={styles.subBox}>
          <Image src={iconDisp} alt="iconDisp" />
        </div>
        <div className={styles.subBox}>
          <div className={styles.detailSpecific}>
            <p className={styles.titleSpec}>Specifications</p>
            <div className={styles.specific}>
              <div className={styles.imgCPU}>
                <Image className={styles.iconCPU} src={cpuIcon} alt="cpuIcon" />
              </div>
              <p>
                Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @
                1.8GHz
              </p>
            </div>

            <div className={styles.specific}>
              <div className={styles.imgCPU}>
                <Image
                  className={styles.iconCPU}
                  src={iconDisplay}
                  alt="cpuIcon"
                />
              </div>
              <p>2 × micro-HDMI® ports (up to 4kp60 supported)</p>
            </div>

            <div className={styles.specific}>
              <div className={styles.imgCPU}>
                <Image className={styles.iconCPU} src={iconUSB} alt="cpuIcon" />
              </div>
              <p>2 USB 3.0 ports; 2 USB 2.0 ports.</p>
            </div>

            <div className={styles.specific}>
              <div className={styles.imgCPU}>
                <Image className={styles.iconCPU} src={cpuIcon} alt="cpuIcon" />
              </div>
              <p>1GB, 2GB, 4GB or 8GB LPDDR4-3200 SDRAM</p>
            </div>

            <div className={styles.specific}>
              <div className={styles.imgCPU}>
                <Image
                  className={styles.iconCPU}
                  src={iconRedes}
                  alt="cpuIcon"
                />
              </div>
              <p>
                2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE
                Gigabit Ethernet
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.exampleFinal}>
        <div className={styles.boxImage}>
          <Image
            className={styles.iconExample1}
            src={resultFinal}
            alt="exampleFinal"
          />
        </div>
        <div className={styles.boxImage}>
          <Image
            className={styles.iconExample2}
            src={secontResult}
            alt="examplesFinal"
          />
        </div>
      </div>

      <FullScreen />
    </>
  );
}

export default ThreeSlide;
