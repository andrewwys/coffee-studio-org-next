import ProductCard from '../blocks/product-card'
import styles from './product-highlights.module.css'
// import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

const ProductHighlights = ({ productList, title, defaultPackageOpt, orderType }) => {
  const {lang} = useAppContext();
  if (!productList) return null;
  return(
    <div className={styles.productHighlights}>
      <div className={styles.highlightHeader} id='highlights'>{title}</div>
      <div className={styles.productWrapper}>
        {productList.map((product)=>
          { 
            // if (product.fm[lang].highlight)
            return <ProductCard key={product.slug} productProps={product.fm} slug={product.slug} defaultPackageOpt={defaultPackageOpt} orderType={orderType}/>
          }
        )}
      </div>
    </div>
  )
}

export default ProductHighlights;