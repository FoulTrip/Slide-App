import styles from "./Styles/SecondTable.module.css";
import iconServer from "../assets/iconCPU.png";
import Image from "next/image";

function SecondTable() {
  return (
    <>
      <div className={styles.principalBox}>
        <div className={styles.textSubBox}>
          <div className={styles.subTextSubBox}>
            <h3>About Arch Linux</h3>
            <p>
              Known for its minimalist and " do-it-yourself " approach. Unlike
              other distributions, it does not come preconfigured with a set of
              applications and utilities, allowing users to build an operating
              system according to their needs and preferences.
            </p>
            <p>
              Arch Linux is focused on learning and knowledge. By installing and
              configuring the system from scratch, users gain an in-depth
              understanding of how the internal components work and how to
              customize every detail to suit their specific needs.
            </p>
          </div>
        </div>
        <div className={styles.imgSubBox}>
          <Image
            className={styles.iconBanner}
            src={iconServer}
            alt="iconBanner"
          />
        </div>
      </div>
    </>
  );
}

export default SecondTable;
