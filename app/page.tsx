import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import iconArrowRight from "@/assets/arrow-right.svg";
import iconArch from "@/assets/miniaturaArch.png";
import iconWork from "@/assets/iconDiapositivas.png";
import iconGithub from "@/assets/iconGithub.svg";
import iconWeb from "@/assets/iconGlobe.svg";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.subBannerOne}>
          <div className={styles.imgBanner}>
          <Image className={styles.iconBanner} src={iconWork} alt="iconWork" />
          </div>
          <p className={styles.Title}>
          Swift<span className={styles.titlePart}>Slide</span>
          </p>
          <div className={styles.redes}>
            <Link
              href="https://portafolio-foultrip.vercel.app/"
              className={styles.linkRedes}
            >
              <Image
                className={styles.iconRed}
                src={iconWeb}
                alt="iconGithub"
              />
              <p className={styles.nameAuth}>FoulTrip</p>
            </Link>
            <Link
              href="https://github.com/FoulTrip/Slide-App.git"
              className={styles.linkRedes}
            >
              <Image
                className={styles.iconRed}
                src={iconGithub}
                alt="iconGithub"
              />
              <p className={styles.nameAuth}>Repository</p>
            </Link>
          </div>
        </div>
      </div>
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
