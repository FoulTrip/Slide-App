import iconPersonalizacion from "../../assets/iconPersonalizacion.png";
import Image from "next/image";
import styles from "../Styles/ThreeTable.module.css"

function SecondElement() {
  return (
    <>
      <div className={styles.subCard}>
        <div className={styles.imgSubBox}>
          <Image
            className={styles.iconsSubImg}
            src={iconPersonalizacion}
            alt="Rolling Release"
          />
        </div>
        <p className={styles.explain}>
          Too flexible and allows users to customize every aspect of the
          operating system according to their needs. It does not include
          unnecessary software, allowing users to decide which programs and
          features they want to install.
        </p>
      </div>
    </>
  );
}

export default SecondElement;
