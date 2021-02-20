import { useAppContext } from '../src/context/state'
import styles from './hero.module.css'
import { labels } from '../siteConfig.json'

const Hero = () => {
  const { lang } = useAppContext();
  const l = labels[lang];
  return (
    <div className={styles.hero}>
      <div className={styles.headlines}>
        <h3 className={styles.line1}>
          <mark className={styles.marker}>{l.heroLine1}</mark>
        </h3>
        <p className={styles.line2}><mark className={styles.marker}>{l.heroLine2}</mark></p>
      </div>
    </div>
  );
}

export default Hero;