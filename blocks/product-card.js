import { useAppContext } from '../src/context/state'
import Link from 'next/link'
import CardColor from '../src/utils/cardColor'
import flavorFormatter from '../src/utils/flavor-formatter'
import styles from './product-card.module.css'
import AddToCartShortcut from '../bits/add-to-cart-shortcut'
import DetailButton from '../bits/details-button'
import SnipcartButton from '../bits/snipcart-button'

const ProductCard = ({ productProps, slug }) => {
  const {lang} = useAppContext();
  const { [lang]: { pid, category, country, display_name, process, flavors_main, price_200g, price_500g, price_1kg, price_dripbag, price_gb, image} } = productProps;
    const flavorStr = flavorFormatter(flavors_main);
    const color = CardColor(productProps[lang]);
    return (
      <div className={styles.productCard}>
        
          <div className={styles.imageArea} style={{backgroundColor: color}}>
            <img className={styles.bgPattern} src='/patternBG_SO.svg' alt='background pattern' />
            <div className={styles.country}>{country}</div>
            <div className={styles.name}>{display_name}</div>
            <div className={styles.process}>{process}</div>
            {/* <div className={`${styles.addToCart} snipcart-add-item`}
              data-item-id={pid}
              data-item-price={price_200g}
              data-item-url={`/products/${slug}`}
              data-item-description={category}
              data-item-image={image}
              data-item-name={`${country} ${display_name} ${process}`}
              data-item-weight='200'
              data-item-custom1-name="研磨度"
              data-item-custom1-options="不需要研磨|粗 (手沖)|中 (Aeropress)|幼 (Espresso)"
              data-item-custom1-value="不需要研磨"
              data-item-custom1-required="true"
              data-item-custom2-name="包裝/種類"
              data-item-custom2-options={`200g|500g[+${price_500g-price_200g}]|1kg[+${price_1kg-price_200g}]|掛耳包[+${price_dripbag-price_200g}]|生豆[+${price_gb-price_200g}]`}
              data-item-custom2-value="200g"
              data-item-custom2-required="true"
            > */}
            <div className={`${styles.addToCart}`}>
              <SnipcartButton pid={pid} url={`/products/${slug}`} category={category} country={country} display_name={display_name} process={process} price_200g={price_200g} price_500g={price_500g} price_1kg={price_1kg} price_dripbag={price_dripbag} price_gb={price_gb} image={image}>
                <AddToCartShortcut color={color} width={60} />
              </SnipcartButton>
            </div>
            {/* </div> */}
            <Link href={`/products/${slug}`}>
              <div className={styles.detailButton}>
                  <DetailButton color={color} width={60} />
              </div>
            </Link>
          </div>
          
        <div className={styles.infoArea}>
          <div className={styles.flavorsMain}>{flavorStr}</div>
          <div className={styles.price}>{`HKD ${price_200g}/200g`}</div>
        </div>
        {/* <style jsx> {`
          .snipcart-add-item {
            transition: all 500ms ease;
            background-color: transparent;
          }
          .snipcart-add-item:hover {
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05); 
            transform: scale(1.05);
            cursor: pointer;
          }
        `} </style> */}
      </div>
    );
}

export default ProductCard;