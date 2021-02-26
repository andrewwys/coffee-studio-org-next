import { useAppContext } from '../src/context/state'
import CardColor from '../src/utils/cardColor'
import styles from './product-card.module.css'

const ProductCard = ({ productProps, slug }) => {
  const {lang} = useAppContext();
  const { [lang]: { pid, category, country, display_name, process, flavors_main, price_200g, price_500g, price_1kg, price_dripbag, price_gb, image} } = productProps;
  const flavorStr = flavors_main.reduce((str, flavor, i)=>{ //break flavors array into one line
    if (i < flavors_main.length -1) {
        return (str + flavor + ' - ')
      } else return str + flavor
    }, '');
    const color = CardColor(productProps[lang]);
    return (
      <div className={styles.productCard}>
        <div className='snipcart-add-item'
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
        >
          <div className={styles.imageArea} style={{backgroundColor: color}}>
            <img className={styles.bgPattern} src='/patternBG_SO.svg' alt='background pattern' />
            <div className={styles.country}>{country}</div>
            <div className={styles.name}>{display_name}</div>
            <div className={styles.process}>{process}</div>
          </div>
        </div>
        <div className={styles.infoArea}>
          <div className={styles.flavorsMain}>{flavorStr}</div>
          <div className={styles.price}>{`HKD ${price_200g}`}</div>
        </div>
        <style jsx> {`
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
        `} </style>
      </div>
    );
}

export default ProductCard;