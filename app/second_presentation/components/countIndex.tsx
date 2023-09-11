import { useEffect, useState } from "react";
import styles from "../styles/count.module.css";
import Image from "next/image";
import arrowLeft from "@/assets/arrow-left-circle.svg";
import arrowRight from "@/assets/arrow-right-circle.svg";
import { useIndexContext } from "../context/IndexGlobal";

function CountIndex() {
  const { index, setIndex } = useIndexContext();
  const [menuView, setMenuView] = useState(false);

  const handleIndexNext = () => {
    setIndex(index + 1);
  };

  const handleIndexPrev = () => {
    setIndex(index - 1);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      handleIndexNext();
    } else if (event.key === "ArrowLeft") {
      handleIndexPrev();
    }
  };

  useEffect(() => {
    // Esto es el event listener para el evento 'keydown' cuando el componente se monte
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  // console.log(index);

  return (
    <>
      <div
        className={styles.countBox}
        onMouseEnter={() => setMenuView(true)}
        onMouseLeave={() => setMenuView(false)}
      >
        {menuView == true ? (
          <>
            <div className={styles.opcBtn}>
              <Image
                className={styles.iconBtn}
                onClick={handleIndexPrev}
                src={arrowLeft}
                alt="arrowLeft"
              />
            </div>
            <div className={styles.opcBtn}>
              <Image
                className={styles.iconBtn}
                onClick={handleIndexNext}
                src={arrowRight}
                alt="arrowRight"
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.voidMenu}></div>
          </>
        )}
      </div>
    </>
  );
}

export default CountIndex;
