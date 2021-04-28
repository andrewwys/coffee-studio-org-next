import { useAppContext } from '../src/context/state'
import Link from 'next/link'
// import CardColor from '../src/utils/cardColor'
import CardPatternPicker from '../src/utils/card-pattern-picker'
import flavorFormatter from '../src/utils/flavor-formatter'
import styles from './product-card.module.css'
import AddToCartShortcut from '../bits/add-to-cart-shortcut'
import DetailButton from '../bits/details-button'
import SnipcartButton from '../bits/snipcart-button'
import { display, siteBaseUrl, packageOptions, labels } from '../siteConfig.json'

const ProductCard = ({ productProps, slug, defaultPackageOpt }) => {
  const {lang} = useAppContext();
  const { PO_dripbag } = packageOptions[lang];
  const { dripBagUnit } = labels[lang];
  const { [lang]: { pid, category, country, display_name, process, flavors_main, price_200g, price_500g, price_1kg, price_dripbag, price_gb, image, theme_color} } = productProps;
    const flavorStr = flavorFormatter(flavors_main);
    const themeColorStr = display[theme_color];
    let priceStr; // = defaultPackageOpt === PO_dripbag ? `${price_dripbag}/${dripBagUnit}` : `${price_200g}/200g`;
    if (defaultPackageOpt === PO_dripbag){
      priceStr = `${price_dripbag}/${dripBagUnit}`;
    } else if (category === 'Special') {
      priceStr = `${price_200g}/250g`;
    } else {
      priceStr = `${price_200g}/200g`;
    }
    return (
      <div className={styles.productCard}>      
          <div className={styles.imageArea} style={{backgroundColor: themeColorStr}}>
            <img className={styles.bgPattern} src={CardPatternPicker(category)} alt='background pattern' />
            <div className={styles.country}>{country}</div>
            <div className={styles.name}>{display_name}</div>
            <div className={styles.process}>{process}</div>
            <div className={`${styles.addToCart}`}>
              <SnipcartButton 
                pid={pid} 
                url={`${siteBaseUrl}/products/${slug}`} 
                category={category} country={country} 
                display_name={display_name} 
                process={process} 
                price_200g={price_200g} 
                price_500g={price_500g} 
                price_1kg={price_1kg} 
                price_dripbag={price_dripbag} 
                price_gb={price_gb} 
                image={image}
                defaultPackageOpt={defaultPackageOpt}
                >
                <AddToCartShortcut color={themeColorStr} width={60} />
              </SnipcartButton>
            </div>
            {/* </div> */}
            <Link href={{ pathname: `/products/${slug}`, query: {default: defaultPackageOpt}, }}>
              <div className={styles.detailButton}>
                  <DetailButton color={themeColorStr} width={60} />
              </div>
            </Link>
          </div>
          
        <div className={styles.infoArea}>
          <div className={styles.flavorsMain}>{flavorStr}</div>
          <div className={styles.price}>{`HKD ${priceStr}`}</div>
        </div>
      </div>
    );
}

export default ProductCard;