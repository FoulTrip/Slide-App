import styles from "./Styles/ThreeTable.module.css";
import iconRollingRelease from "../assets/iconRollingRelease.png";
import iconPersonalizacion from "../assets/iconPersonalizacion.png";
import iconAprendizaje from "../assets/iconAprendizaje.png";
import iconRendimiento from "../assets/iconRendimiento.png";
import iconRepository from "../assets/iconRepository.png";
import iconAUR from "../assets/iconNucleo.png";
import Image from "next/image";
import { useState } from "react";

function ThreeTable() {
  const [numberView, setNumberView] = useState(0);
  const [mouseOn, setMouseOn] = useState(false);
  const [clickIcon, setClickIcon] = useState(false);

  const handleContent = () => {
    setClickIcon(true)
  }

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
            onClick={handleContent}
          >
            <Image
              className={styles.iconSubGroup}
              src={iconRollingRelease}
              alt="iconRollingRelease"
            />
          </div>

          {/* Second View */}
          <div
            className={styles.previw}
            onMouseEnter={() => {
              setNumberView(2);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
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
            className={styles.previw}
            onMouseEnter={() => {
              setNumberView(3);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
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
            className={styles.previw}
            onMouseEnter={() => {
              setNumberView(4);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
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
            className={styles.previw}
            onMouseEnter={() => {
              setNumberView(5);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
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
            className={styles.previw}
            onMouseEnter={() => {
              setNumberView(6);
              setMouseOn(true);
            }}
            onMouseLeave={() => {
              setNumberView(0);
              setMouseOn(false);
            }}
          >
            <Image
              className={styles.iconSubGroup}
              src={iconAUR}
              alt="iconAUR"
            />
            <div className={styles.nameGroup}></div>
          </div>
        </div>
        {}
        

        {numberView == 0 && mouseOn == false ? <p className={styles.nameCharacter}>...</p> : ""}

        {numberView == 1 && mouseOn == true ? (
          <p className={styles.nameCharacter}>Rolling Release</p>
        ) : (
          ""
        )}

        {numberView == 2 && mouseOn == true ? (
          <p className={styles.nameCharacter}>Customization</p>
        ) : (
          ""
        )}

        {numberView == 3 && mouseOn == true ? (
          <p className={styles.nameCharacter}>Learning</p>
        ) : (
          ""
        )}

        {numberView == 4 && mouseOn == true ? (
          <p className={styles.nameCharacter}>Performance</p>
        ) : (
          ""
        )}

        {numberView == 5 && mouseOn == true ? (
          <p className={styles.nameCharacter}>Large Repositories</p>
        ) : (
          ""
        )}

        {numberView == 6 && mouseOn == true ? (
          <p className={styles.nameCharacter}>AUR</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ThreeTable;
