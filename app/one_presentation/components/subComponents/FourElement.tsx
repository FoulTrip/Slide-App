import styles from "../Styles/ThreeTable.module.css";
import Image from "next/image";
import iconRendimiento from "../../assets/iconRendimiento.png";

function FourElement() {
  return (
    <>
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
          Despite being a rolling release distribution, Arch Linux is known for
          its stability and performance. By allowing users to continually update
          their system, problems and fixes can be addressed quickly.
        </p>
      </div>
    </>
  );
}

export default FourElement;
