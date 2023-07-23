import styles from "./Styles/ThreeTable.module.css";
import iconRollingRelease from "../assets/iconRollingRelease.png";
import iconPersonalizacion from "../assets/iconPersonalizacion.png";
import iconAprendizaje from "../assets/iconAprendizaje.png";
import iconRendimiento from "../assets/iconRendimiento.png";
import iconRepository from "../assets/iconRepository.png";
import iconAUR from "../assets/iconNucleo.png";
import Image from "next/image";
import { useState } from "react";
import iconX from "../assets/iconX.svg";

function ThreeTable() {
  const [numberView, setNumberView] = useState(0);
  const [mouseOn, setMouseOn] = useState(false);
  const [clickIcon, setClickIcon] = useState(false);
  const [selectTopic, setSelectTopic] = useState("");

  const handleClose = () => {
    setSelectTopic("");
  };

  return (
    <>
      <h3 className={styles.titleTable}>Advantages of arch linux</h3>

      <div className={styles.groups}>
        <div className={styles.subGroup}>
          {/* First View */}
          <div
            className={styles.preview}
            onMouseEnter={() => {
              setNumberView(1);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
            }}
            onClick={() => {
              setClickIcon(!clickIcon);
              setSelectTopic("rolling_release");
            }}
          >
            <Image
              className={styles.iconSubGroup}
              src={iconRollingRelease}
              alt="iconRollingRelease"
            />
          </div>

          {/* Second View */}
          <div
            className={styles.preview}
            onMouseEnter={() => {
              setNumberView(2);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
            }}
            onClick={() => {
              setClickIcon(!clickIcon);
              setSelectTopic("custom");
            }}
          >
            <Image
              className={styles.iconSubGroup}
              src={iconPersonalizacion}
              alt="iconPersonalizacion"
            />
          </div>

          {/* Three View */}
          <div
            className={styles.preview}
            onMouseEnter={() => {
              setNumberView(3);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
            }}
            onClick={() => {
              setClickIcon(!clickIcon);
              setSelectTopic("learning");
            }}
          >
            <Image
              className={styles.iconSubGroup}
              src={iconAprendizaje}
              alt="iconAprendizaje"
            />
          </div>

          {/* Four View */}
          <div
            className={styles.preview}
            onMouseEnter={() => {
              setNumberView(4);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
            }}
            onClick={() => {
              setClickIcon(!clickIcon);
              setSelectTopic("performance");
            }}
          >
            <Image
              className={styles.iconSubGroup}
              src={iconRendimiento}
              alt="iconRendimiento"
            />
          </div>

          {/* Five View */}
          <div
            className={styles.preview}
            onMouseEnter={() => {
              setNumberView(5);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
            }}
            onClick={() => {
              setClickIcon(!clickIcon);
              setSelectTopic("repository");
            }}
          >
            <Image
              className={styles.iconSubGroup}
              src={iconRepository}
              alt="iconRepository"
            />
          </div>

          {/* Six View */}
          <div
            className={styles.preview}
            onMouseEnter={() => {
              setNumberView(6);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
            }}
            onClick={() => {
              setClickIcon(!clickIcon);
              setSelectTopic("aur");
            }}
          >
            <Image
              className={styles.iconSubGroup}
              src={iconAUR}
              alt="iconAUR"
            />
          </div>
        </div>

        {selectTopic == "rolling_release" ? (
          <div className={styles.secondSubGroup}>
            <div className={styles.closeBtn}>
              <div className={styles.imgClosebtn}>
                <Image
                  className={styles.iconX}
                  src={iconX}
                  alt="iconX"
                  onClick={handleClose}
                />
              </div>
            </div>
            <p className={styles.explain}>
              It contains a "rolling release" model, which means that it does
              not have specific versions. Instead, it is constantly updated,
              providing users with the latest software releases without having
              to wait for a new version of the distribution.
            </p>
          </div>
        ) : (
          ""
        )}

        {selectTopic == "custom" ? (
          <div className={styles.secondSubGroup}>
            <div className={styles.closeBtn}>
              <div className={styles.imgClosebtn}>
                <Image
                  className={styles.iconX}
                  src={iconX}
                  alt="iconX"
                  onClick={handleClose}
                />
              </div>
            </div>
            <p className={styles.explain}>
              Too flexible and allows users to customize every aspect of the
              operating system according to their needs. It does not include
              unnecessary software, allowing users to decide which programs and
              features they want to install.
            </p>
          </div>
        ) : (
          ""
        )}

        {selectTopic == "learning" ? (
          <div className={styles.secondSubGroup}>
            <div className={styles.closeBtn}>
              <div className={styles.imgClosebtn}>
                <Image
                  className={styles.iconX}
                  src={iconX}
                  alt="iconX"
                  onClick={handleClose}
                />
              </div>
            </div>
            <p className={styles.explain}>
              By installing and configuring Arch Linux from scratch, users can
              gain a greater understanding of the inner workings of the system
              and the individual components that make it up. This provides
              greater control and understanding of their system.
            </p>
          </div>
        ) : (
          ""
        )}

        {selectTopic == "performance" ? (
          <div className={styles.secondSubGroup}>
            <div className={styles.closeBtn}>
              <div className={styles.imgClosebtn}>
                <Image
                  className={styles.iconX}
                  src={iconX}
                  alt="iconX"
                  onClick={handleClose}
                />
              </div>
            </div>
            <p className={styles.explain}>
              Despite being a rolling release distribution, Arch Linux is known
              for its stability and performance. By allowing users to
              continually update their system, problems and fixes can be
              addressed quickly.
            </p>
          </div>
        ) : (
          ""
        )}

        {selectTopic == "repository" ? (
          <div className={styles.secondSubGroup}>
            <div className={styles.closeBtn}>
              <div className={styles.imgClosebtn}>
                <Image
                  className={styles.iconX}
                  src={iconX}
                  alt="iconX"
                  onClick={handleClose}
                />
              </div>
            </div>
            <p className={styles.explain}>
              It has a wide selection of packages in its official repositories
              and in the community. In addition, packages are updated frequently
              to keep the system always up to date.
            </p>
          </div>
        ) : (
          ""
        )}

        {selectTopic == "aur" ? (
          <div className={styles.secondSubGroup}>
            <div className={styles.closeBtn}>
              <div className={styles.imgClosebtn}>
                <Image
                  className={styles.iconX}
                  src={iconX}
                  alt="iconX"
                  onClick={handleClose}
                />
              </div>
            </div>
            <p className={styles.explain}>
              In addition to the official repositories, Arch Linux has access to
              the AUR, a community collection of build scripts that allow you to
              install and maintain community-developed software. This further
              expands the catalog of available software.
            </p>
          </div>
        ) : (
          ""
        )}

        {numberView == 0 && mouseOn == false ? (
          <p className={styles.nameCharacter}>...</p>
        ) : (
          ""
        )}

        {numberView == 1 && mouseOn == true ? (
          <p className={styles.nameCharacterRR}>Rolling Release</p>
        ) : (
          ""
        )}

        {numberView == 2 && mouseOn == true ? (
          <p className={styles.nameCharacterC}>Customization</p>
        ) : (
          ""
        )}

        {numberView == 3 && mouseOn == true ? (
          <p className={styles.nameCharacterLrn}>Learning</p>
        ) : (
          ""
        )}

        {numberView == 4 && mouseOn == true ? (
          <p className={styles.nameCharacterPF}>Performance</p>
        ) : (
          ""
        )}

        {numberView == 5 && mouseOn == true ? (
          <p className={styles.nameCharacterLG}>Large Repositories</p>
        ) : (
          ""
        )}

        {numberView == 6 && mouseOn == true ? (
          <p className={styles.nameCharacterAUR}>AUR</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ThreeTable;
