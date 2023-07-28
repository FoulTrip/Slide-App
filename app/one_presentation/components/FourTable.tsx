import styles from "./Styles/FourTable.module.css";
import screen001 from "../assets/pantallazo01.webp";

import Image from "next/image";

function FourTable() {
  return (
    <>
      <div className={styles.subBox}>
        <div className={styles.explain}>
          <h3 className={styles.title}>Installation complications</h3>
          <p>
            Unlike many other Linux distributions that offer graphical
            installers that guide users through the entire process, Arch Linux
            uses a more minimalist installer that requires users to do most of
            the work manually. This includes partitioning the disk, configuring
            the network, installing and configuring the boot loader, and
            selecting packages to build the base system.
          </p>
        </div>
        <div className={styles.imgBox}>
          <Image className={styles.iconBox} src={screen001} alt="screen001" />
        </div>
      </div>
    </>
  );
}

export default FourTable;
