import styles from "./Styles/FourTable.module.css";
import screen002 from "../assets/pantallazo02.webp";
import Image from "next/image";

function FiveTable() {
  return (
    <>
      <div className={styles.subBox_2}>
        <div className={styles.imgBox}>
          <Image className={styles.iconBox} src={screen002} alt="screen002" />
        </div>
        <p className={styles.explain}>
          The installation of Arch Linux is known to be a manual and detailed
          process compared to other more process compared to other more
          beginner-friendly distributions. beginner-friendly distributions. New
          users may find the installation installation challenging if they are
          unfamiliar with the manual setup process. manual.
        </p>
      </div>
    </>
  );
}

export default FiveTable;
