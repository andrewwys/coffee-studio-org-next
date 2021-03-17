import styles from './product-detail-card.module.css';
import { labels } from '../siteConfig.json';
// import {display} from '../siteConfig.json';
import { useAppContext } from '../src/context/state';

const ProductDetailCard = ({ country, process, color, altitude, varietal, patternStr }) => {
  const { lang } = useAppContext();
  const { details } = labels;
  return (
    <div className={styles.card} style={{backgroundColor: color}}>
      <img className={styles.bgPattern} src={patternStr} alt='background pattern' />
      <div className={styles.col1}>
        <div>{details[lang].country}</div>
        <div>{details[lang].process}</div>
        <div>{details[lang].altitude}</div>
        <div>{details[lang].varietal}</div>
      </div>
      <div className={styles.col2}>
        <div>{country}</div>
        <div>{process}</div>
        <div>{altitude}</div>
        <div>{varietal}</div>
      </div>
    </div>
  )
}

export default ProductDetailCard;