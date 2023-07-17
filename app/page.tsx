import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import iconArrowRight from "@/assets/arrow-right.svg";
import iconArch from "@/assets/miniaturaArch.png";

export default function Home() {
  return (
    <>
      <h3 className={styles.titleMain}>List of presentation</h3>
      <div className={styles.BoxPresentation}>
        <div className={styles.card}>
          <div className={styles.iconcard}>
            <Image
              className={styles.iconSubCard}
              src={iconArch}
              alt="iconArch"
            />
          </div>
          <p>Arch Linux</p>
          <Link href="/one_presentation" className={styles.linkPresentation}>
            <p>Leer</p>
            <div className={styles.subImgLink}>
              <Image
                className={styles.iconLink}
                src={iconArrowRight}
                alt="iconArrow"
              />
            </div>
          </Link>
        </div>

        {/* <div className={styles.card}>
          <div className={styles.iconcard}>
            <Image
              className={styles.iconSubCard}
              src={iconArch}
              alt="iconArch"
            />
          </div>
          <p>Arch Linux</p>
          <Link href="/one_presentation" className={styles.linkPresentation}>
            <p>Leer</p>
            <div className={styles.subImgLink}>
              <Image
                className={styles.iconLink}
                src={iconArrowRight}
                alt="iconArrow"
              />
            </div>
          </Link>
        </div> */}
      </div>
    </>
  );
}
