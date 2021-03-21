import styles from './hero.module.css'
// import { labels } from '../siteConfig.json'

const Hero = ({ bgImg, heroLine1, heroLine2 }) => {
  return (
    <div className={`${styles.hero} hero`}>
      <div className={styles.headlines}>
        <h3 className={styles.line1}>
          <mark className={styles.marker}>{heroLine1}</mark>
        </h3>
        <p className={styles.line2}><mark className={styles.marker}>{heroLine2}</mark></p>
      </div>
      <style jsx>{`
        .hero {
          background-image: url(${bgImg});
        }
      `}</style>
    </div>
  );
}

export default Hero;