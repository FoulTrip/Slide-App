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
        <div className={styles.explain}>
          <h3 className={styles.title}>Installation complications</h3>
          <p>
            Arch Linux relies on the command line to perform
            configurations and tasks. This means that users must be comfortable
            with the terminal and have basic command knowledge to install and
            maintain the system. For those who are used to graphical interfaces
            and prefer a more mouse-oriented experience, this can be a
            challenge.
          </p>
        </div>
      </div>
    </>
  );
}

export default FiveTable;
