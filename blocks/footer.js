import { useAppContext } from '../src/context/state'
import styles from './footer.module.css'
import { labels } from '../siteConfig.json'

const Footer = () => {
  const {lang} = useAppContext();
  const { singleOrigin, houseBlend, dripBags } = labels[lang];
  const { shop, info, social, copyright1, copyright2} = labels.footer[lang];
  return(
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.shop}>
          <div className={styles.columnTitle1}>{social}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.columnTitle1}>{social}</div>
        </div>
        <div className={styles.social}>
          <div className={styles.columnTitle2}>{social}</div>
          <div className={styles.iconGroup}>
            <img className={styles.socialIcons} src='/images/fb-icon.png' alt='facebook'/>
            <img className={styles.socialIcons} src='/images/ig-icon.png' alt='instagram'/>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        {`${copyright1}${new Date().getFullYear()}${copyright2}`}
      </div>
    </footer>
  )
}
  
  
export default Footer;