import styles from './hero.module.css'
import { labels } from '../siteConfig.json'

const Hero = () => {
  const {hk} = labels;
  return (
    <div className={styles.hero}>
      <div className={styles.headlines}>
        <h3 className={styles.line1}>
          <mark className={styles.marker}>{hk.heroLine1}</mark>
        </h3>
        <p className={styles.line2}><mark className={styles.marker}>{hk.heroLine2}</mark></p>
      </div>
    </div>
  );
}

export default Hero;