import styles from "./Styles/ThreeTable.module.css";
import Image from "next/image";

import iconRollingRelease from "../assets/iconRollingRelease.png";
import iconPersonalizacion from "../assets/iconPersonalizacion.png";
import iconAprendizaje from "../assets/iconAprendizaje.png";
import iconRendimiento from "../assets/iconRendimiento.png";
import iconRepository from "../assets/iconRepository.png";
import iconAUR from "../assets/iconNucleo.png";

function ThreeTable() {
  return (
    <>
      <h3 className={styles.titleTable}>Advantages of arch linux</h3>

      <div className={styles.groups}>
        <div className={styles.firstGroup}>
          {/* #4 characteristics */}
          <div className={styles.subCard}>
            <div className={styles.imgSubBox}>
              <Image
                className={styles.iconsSubImg}
                src={iconRollingRelease}
                alt="Rolling Release"
              />
            </div>
            <p className={styles.explain}>
              It contains a "rolling release" model, which means that it does
              not have specific versions. Instead, it is constantly updated,
              providing users with the latest software releases without having
              to wait for a new version of the distribution.
            </p>
          </div>

          {/* #2 characteristics */}
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

          {/* #3 characteristics */}
          <div className={styles.subCard}>
            <div className={styles.imgSubBox}>
              <Image
                className={styles.iconsSubImg}
                src={iconAprendizaje}
                alt="Rolling Release"
              />
            </div>
            <p className={styles.explain}>
              By installing and configuring Arch Linux from scratch, users can
              gain a greater understanding of the inner workings of the system
              and the individual components that make it up. This provides
              greater control and understanding of their system.
            </p>
          </div>
        </div>

        <div className={styles.secondGroup}>
          <div className={styles.subCard}>
            {/* #4 characteristics */}
            <div className={styles.imgSubBox}>
              <Image
                className={styles.iconsSubImg}
                src={iconRendimiento}
                alt="Rolling Release"
              />
            </div>
            <p className={styles.explain}>
              Despite being a rolling release distribution, Arch Linux is known
              for its stability and performance. By allowing users to
              continually update their system, problems and fixes can be
              addressed quickly.
            </p>
          </div>

          {/* #5 characteristics */}
          <div className={styles.subCard}>
            <div className={styles.imgSubBox}>
              <Image
                className={styles.iconsSubImg}
                src={iconRepository}
                alt="Rolling Release"
              />
            </div>
            <p className={styles.explain}>
              It has a wide selection of packages in its official repositories
              and in the community. In addition, packages are updated frequently
              to keep the system always up to date.
            </p>
          </div>

          <div className={styles.subCard}>
            <div className={styles.imgSubBox}>
              <Image
                className={styles.iconsSubImg}
                src={iconAUR}
                alt="Rolling Release"
              />
            </div>
            <p className={styles.explain}>
              In addition to the official repositories, Arch Linux has access to
              the AUR, a community collection of build scripts that allow you to
              install and maintain community-developed software. This further
              expands the catalog of available software.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeTable;
