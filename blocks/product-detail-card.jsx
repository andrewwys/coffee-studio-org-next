import styles from './product-detail-card.module.css'

const ProductDetailCard = ({ country, process, color }) => {
  return (
    <div className={styles.card} style={{backgroundColor: color}}>
      <img className={styles.bgPattern} src='/patternBG_SO.svg' alt='background pattern' />
      <div className={styles.col1}>
        <div>{country}</div>
        <div>{process}</div>
        <div>--</div>
        <div>--</div>
      </div>
      <div className={styles.col2}>
        <div>{country}</div>
        <div>{process}</div>
        <div>--</div>
        <div>--</div>
      </div>
      
    </div>
  )
}

export default ProductDetailCard;