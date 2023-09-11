import styles from "../styles/secondSlide.module.css";
import Image from "next/image";
import logoRPI from "@/assets/iconRPI.webp";
import authRPI from "@/assets/RPICReator.jpg";
import dispRPI from "@/assets/dispositivoRPI.png";

import iconAffro from "@/assets/dollar-sign.svg"
import iconComppac from "@/assets/codesandbox.svg"
import iconVersat from "@/assets/move.svg"
import iconCommunity from "@/assets/users.svg"
import iconGPI from "@/assets/sliders.svg"
import iconEnergy from "@/assets/battery-charging.svg"

function SecondSlide() {
  return (
    <>
      <div className={styles.boxSlide}>
        <div className={styles.logoName}>
          <div className={styles.subLogoName}>
            <Image className={styles.iconRPI} src={logoRPI} alt="logoRPI" />
            <p className={styles.textLogo}>Raspberry Pi</p>
          </div>
        </div>
        <div className={styles.creatorInfo}>
          <div className={styles.subCreatorInfo}>
            <div className={styles.boxOne}>
              <Image className={styles.creator} src={authRPI} alt="authRPI" />
              <div className={styles.descriptionAuth}>
                <div className={styles.subDescription}>
                  <p className={styles.nameAuth}>Eben Upton</p>
                  <p className={styles.cargo}>Computer engineer</p>
                </div>
              </div>
            </div>
            <div className={styles.boxTwo}>
              <p>
                In 2012, the Raspberry Pi Model B changed the rules of the game,
                opening the door to creativity and innovation accessible to all.
                A true pioneer that inspired a generation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.explainTopic}>
        {/* <div className={styles.titleTopic}>
          <p>What's Raspberry Pi?</p>
        </div> */}
        <div className={styles.modelRPI}>
          <Image className={styles.dispRPI} src={dispRPI} alt="disRPI" />
        </div>
        <div className={styles.textExplain}>
          <div className={styles.details}>

            <div className={styles.subDetails}>
              <div className={styles.imgDetail}>
                <Image className={styles.iconDetail} src={iconAffro} alt="Affordabilit" />
              </div>
              <p className={styles.titleDetail}>Affordability</p>
            </div>

            <div className={styles.subDetails}>
              <div className={styles.imgDetail}>
                <Image className={styles.iconDetail} src={iconComppac} alt="Affordabilit" />
              </div>
              <p className={styles.titleDetail}>Compact</p>
            </div>

            <div className={styles.subDetails}>
              <div className={styles.imgDetail}>
                <Image className={styles.iconDetail} src={iconVersat} alt="Affordabilit" />
              </div>
              <p className={styles.titleDetail}>Versatility</p>
            </div>

            <div className={styles.subDetails}>
              <div className={styles.imgDetail}>
                <Image className={styles.iconDetail} src={iconCommunity} alt="Affordabilit" />
              </div>
              <p className={styles.titleDetail}>Community</p>
            </div>  

            <div className={styles.subDetails}>
              <div className={styles.imgDetail}>
                <Image className={styles.iconDetail} src={iconGPI} alt="Affordabilit" />
              </div>
              <p className={styles.titleDetail}>Compatibility</p>
            </div>

            <div className={styles.subDetails}>
              <div className={styles.imgDetail}>
                <Image className={styles.iconDetail} src={iconEnergy} alt="Affordabilit" />
              </div>
              <p className={styles.titleDetail}>Energy</p>
            </div>

          </div>
          <p>
            Raspberry Pi is a low-cost, credit card-sized minicomputer used to
            learn programming, create electronic projects and perform various
            computing tasks. It is a versatile and affordable tool for students,
            enthusiasts and technology professionals.
          </p>
        </div>
      </div>
    </>
  );
}

export default SecondSlide;
