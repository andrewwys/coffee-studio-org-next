import { useAppContext } from '../src/context/state'
import styles from './footer.module.css'
import { labels } from '../siteConfig.json'
import Link from 'next/link'

const Footer = () => {
  const {lang} = useAppContext();
  const { singleOrigin, houseBlend, dripBags, subscription, contact, aboutUs, photoAttribution } = labels[lang];
  const { shop, information, social, languages, copyright1, copyright2} = labels.footer[lang];
  return(
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.shop}>
          <div className={styles.columnTitle}>{shop}</div>
          <div className={`${styles.indent}`}>
            <div className={styles.item}>
              <Link href={{ pathname: '/product-preview', query: {cat: 'single-origin'}, }}>
                <a href="#">{singleOrigin}</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href={{ pathname: '/product-preview', query: {cat: 'blends'}, }}>
                <a href="#">{houseBlend}</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href={{ pathname: '/product-preview', query: {cat: 'drip-bags'}, }}>
                <a href="#">{dripBags}</a>
              </Link>
            </div>
            <div className={styles.item}><a href='#'>{subscription}</a></div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.columnTitle}>{information}</div>
          <div className={styles.indent}>
              <div className={styles.item}><a href='#'>{aboutUs}</a></div>
              <div className={styles.item}><a href='#'>{contact}</a></div>
              <div className={styles.item}><a href='#'>{photoAttribution}</a></div>
            </div>
        </div>
        <div className={styles.social}>
          <div className={styles.columnTitle}>{social}</div>
          <div className={`${styles.iconGroup} ${styles.indent}`}>
            <a href='https://www.instagram.com/coffee_studio/' target='_blank'>
              <img className={styles.socialIcons} src='/images/fb-icon.png' alt='facebook'/>
            </a>
            <a href='https://www.facebook.com/CoffeeStudio.org/' target='_blank'>
              <img className={styles.socialIcons} src='/images/ig-icon.png' alt='instagram'/>
            </a>
          </div>
        </div>
        <div className={styles.languages}>
          <div className={styles.columnTitle}>{languages}</div>
            <div className={styles.indent}>
              <div className={styles.item}><a href='#'>中文</a></div>
              <div className={styles.item}><a href='#'>English</a></div>
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