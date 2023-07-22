import styles from "../Styles/ThreeTable.module.css"
import Image from "next/image";
import iconAUR from "../../assets/iconNucleo.png";

function SixElement() {
  return (
    <>
      <div className={styles.subCard}>
        <div className={styles.imgSubBox}>
          <Image
            className={styles.iconsSubImg}
            src={iconAUR}
            alt="Rolling Release"
          />
        </div>
        <p className={styles.explain}>
          In addition to the official repositories, Arch Linux has access to the
          AUR, a community collection of build scripts that allow you to install
          and maintain community-developed software. This further expands the
          catalog of available software.
        </p>
      </div>
    </>
  );
}

export default SixElement;
