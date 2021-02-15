import ProductCard from '../blocks/product-card'
import styles from './product-highlights.module.css'
import { labels } from '../siteConfig.json'

const ProductHighlights = ({productList}) => {
  if (!productList) return null;
  return(
    <div className={styles.productHighlights}>
      <div className={styles.highlightHeader}>{labels.hk.prductHighlights}</div>
      <div className={styles.productWrapper}>
        {productList.map((product)=>(<ProductCard key={product.slug} productProps={product.fm} slug={product.slug}/>))}
      </div>
    </div>
  )
}

export default ProductHighlights;