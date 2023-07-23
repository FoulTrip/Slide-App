import Image from 'next/image'
import styles from './Styles/FirstTable.module.css'
import iconArchLinux from '../assets/iconArchLinux.webp'

function FirstTable() {
  return (
    <>
      <div className={styles.principalBox}>
        <div className={styles.imgSubBox}>
          <Image className={styles.iconBanner} src={iconArchLinux} alt='iconBanner' />
        </div>
        <div className={styles.textSubBox}>
          <div className={styles.subTextSubBox}>
            <h3 className={styles.titlePrincipal}>Arch Linux</h3>
            <p>Linux distribution for enthusiasts and lovers of customization and total control of their operating system.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstTable