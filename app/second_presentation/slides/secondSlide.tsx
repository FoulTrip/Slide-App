import styles from "../styles/secondSlide.module.css";
import Image from "next/image";
import logoRPI from "@/assets/iconRPI.webp";
import authRPI from "@/assets/RPICReator.jpg";

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
            <Image className={styles.creator} src={authRPI} alt="authRPI" />
            <div className={styles.descriptionAuth}>
              <div className={styles.subDescription}>
                <p className={styles.nameAuth}>Eben Upton</p>
                <p className={styles.cargo}>Ingeniero informático</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.explainTopic}>
        <div>
          /
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SecondSlide;
