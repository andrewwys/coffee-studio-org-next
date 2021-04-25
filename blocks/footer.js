import { useAppContext } from '../src/context/state'
import styles from './footer.module.css'
import { labels } from '../siteConfig.json'
import Link from 'next/link'
import CoffeeClasses from '../pages/coffee-classes'

const Footer = () => {
  const {lang, toggleLang } = useAppContext();
  const wrappedToggleLang = ( name ) => {
    if ( name === lang ) { 
      return null;
    } else {
      toggleLang();
    }
  }

  const { singleOrigin, houseBlend, dripBags, subscription, contact, aboutUs, faq, photoAttribution, coffeeClasses } = labels[lang];
  const { shop, information, social, languages, copyright1, copyright2} = labels.footer[lang];
  return(
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.shop}>
          <div className={styles.columnTitle}>{shop}</div>
          <div className={`${styles.indent}`}>
            <div className={styles.item}>
              <Link href='/product-preview?cat=single-origin#highlights' passHref>
                <a href="#">{singleOrigin}</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href='/product-preview?cat=blends#highlights' passHref>
                <a href="#">{houseBlend}</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href='/product-preview?cat=drip-bags#highlights' passHref>
                <a href="#">{dripBags}</a>
              </Link>
            </div>
            {/* <div className={styles.item}><a href='#'>{subscription}</a></div> */}
            <div className={styles.item}>
              <Link href='/coffee-classes' passHref>
                <a href="#">{coffeeClasses}</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.columnTitle}>{information}</div>
          <div className={styles.indent}>
              <div className={styles.item}>
                <Link href={{ pathname: '/about' }}>
                  <a href='#'>{aboutUs}</a>
                </Link>
              </div>
              <div className={styles.item}>
                <Link href={{ pathname: '/faq' }}>
                  <a href='#'>{faq}</a>
                </Link>
              </div>
              <div className={styles.item}>
                <Link href={{ pathname: '/contact-us' }}>
                  <a href='#'>{contact}</a>
                </Link>
              </div>
              <div className={styles.item}>
                <Link href={{ pathname: '/photo-attribution' }}>
                  <a href='#'>{photoAttribution}</a>
                </Link>
              </div>
            </div>
        </div>
        <div className={styles.social}>
          <div className={styles.columnTitle}>{social}</div>
          <div className={`${styles.iconGroup} ${styles.indent}`}>
            <a href='https://www.facebook.com/CoffeeStudio.org/' target='_blank'>
              <img className={styles.socialIcons} src='/images/fb-icon.png' alt='facebook'/>
            </a>
            <a href='https://www.instagram.com/coffee_studio/' target='_blank'>
              <img className={styles.socialIcons} src='/images/ig-icon.png' alt='instagram'/>
            </a>
          </div>
        </div>
        <div className={styles.languages}>
          <div className={styles.columnTitle}>{languages}</div>
            <div className={styles.indent}>
              <div className={styles.item}><a href='#' onClick={()=>{wrappedToggleLang('hk')}}>中文</a></div>
              <div className={styles.item}><a href='#' onClick={()=>{wrappedToggleLang('en')}}>English</a></div>
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