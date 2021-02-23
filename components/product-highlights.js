import ProductCard from '../blocks/product-card'
import styles from './product-highlights.module.css'
import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

const ProductHighlights = ({productList}) => {
  const {lang} = useAppContext();
  if (!productList) return null;
  return(
    <div className={styles.productHighlights}>
      <div className={styles.highlightHeader}>{labels[lang].prductHighlights}</div>
      <div className={styles.productWrapper}>
        {productList.map((product)=>
          { 
            if (product.fm.highlight && product.slug.slice(-2) === lang)
            return <ProductCard key={product.slug} productProps={product.fm} slug={product.slug}/>}
        )}
      </div>
    </div>
  )
}

export default ProductHighlights;