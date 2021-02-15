import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>by Coffee Studio HK - {new Date().getFullYear()}</div>
  </footer>
)
export default Footer;