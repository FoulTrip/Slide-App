import iconRollingRelease from "../../assets/iconRollingRelease.png"
import styles from "../Styles/ThreeTable.module.css"
import Image from "next/image";

function FirstElement() {
  return (
    <>
      <div className={styles.subCard}>
        <div className={styles.imgSubBox}>
          <Image
            className={styles.iconsSubImg}
            src={iconRollingRelease}
            alt="Rolling Release"
          />
        </div>
        <p className={styles.explain}>
          It contains a "rolling release" model, which means that it does not
          have specific versions. Instead, it is constantly updated, providing
          users with the latest software releases without having to wait for a
          new version of the distribution.
        </p>
      </div>
    </>
  );
}

export default FirstElement;
