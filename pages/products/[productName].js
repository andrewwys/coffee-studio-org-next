import matter from 'gray-matter'
import { useAppContext } from '../../src/context/state'

import Layout from '../../components/layout'
import NavPath from '../../bits/nav-path'
import flavorFormatter from '../../src/utils/flavor-formatter'
import ProductDetailCard from '../../blocks/product-detail-card'
// import AddToCartButton from '../../bits/add-to-cart-button'
import SnipcartButton from '../../bits/snipcart-button'
import AddToCartShortcut from '../../bits/add-to-cart-shortcut'
import InfoRow from '../../blocks/info-row'
import FlavorProfileChart from '../../components/flavor-profile-chart'
import CardPatternPicker from '../../src/utils/card-pattern-picker'

import { labels, display } from '../../siteConfig.json'
import styles from './[productName].module.css'

import  { useEffect, useRef, useState } from 'react';

const ProductDetails = ({fm, productName}) => {
  const { details } = labels;
  const {lang} = useAppContext();

  const [isSticky, setSticky] = useState(true);
  const ref1 = useRef(null); //add to cart link
  const ref2 = useRef(null); //add to cart icon
  const handleScroll = () => {
    const y = window.pageYOffset;
    const w = window.innerHeight;
    if (ref1.current) {
      setSticky(ref1.current.offsetTop >= w + y - 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (!fm) return <></>
  const { pid, country, display_name, process, flavors_main, flavors_desc, description, altitude, varietal, roast_level, image, price_200g, price_500g, price_1kg, price_dripbag, price_gb, sweetness, acidity, mouthfeel, finish, floral, fruits, nuts, sugars, theme_color, category } = fm[lang];
  const flavorStr = flavorFormatter(flavors_main);
  const themeColorStr = display[theme_color];
  const patternStr = CardPatternPicker(category);
  return (
    <div>
      <Layout>
        <div className={styles.wrapper}>
          <NavPath />
          <div className={styles.main}>
            <div className={styles.title}>{display_name}</div>
            <ProductDetailCard country={country} process={process} color={themeColorStr} altitude={altitude} varietal={varietal} patternStr={patternStr}  />
            <div className={styles.lineBreak}></div>
            <InfoRow name={details[lang].profile}>{flavorStr}</InfoRow>
            <InfoRow name={details[lang].flavors}>
              <FlavorProfileChart floral={floral} fruits={fruits} nuts={nuts} sugars={sugars} acidity={acidity} sweetness={sweetness} mouthfeel={mouthfeel} finish={finish} />
            </InfoRow>
            <InfoRow name={details[lang].details}>{description}</InfoRow>
            <InfoRow name={details[lang].flavorDesc}>{flavors_desc}</InfoRow>
            <InfoRow name={details[lang].roastLevel}>{roast_level}</InfoRow>
            <InfoRow name={details[lang].package}>{details[lang].packageText}</InfoRow>
            <InfoRow name={details[lang].price}>{`HKD ${price_200g} / ${price_500g} / ${price_1kg} / ${price_dripbag} / ${price_gb}`}</InfoRow>
          </div>
          <div className={styles.addToCart}>
            {/* the floating icon to add product to cart */}
            <div className={ isSticky ? 'cart-button-sticky' : 'cart-button'} ref={ref2} >
              <SnipcartButton pid={pid} url={`/products/${productName}`} category={category} country={country} display_name={display_name} process={process} price_200g={price_200g} price_500g={price_500g} price_1kg={price_1kg} price_dripbag={price_dripbag} price_gb={price_gb} image={image}>
                <AddToCartShortcut color={display.headerGreen} width={71} />
              </SnipcartButton>  
            </div>
            {/* the link to add product to cart */}
            <div className={ isSticky ? 'cart-link' : 'cart-link cart-fix'} ref={ref1} >
              <SnipcartButton pid={pid} url={`/products/${productName}`} category={category} country={country} display_name={display_name} process={process} price_200g={price_200g} price_500g={price_500g} price_1kg={price_1kg} price_dripbag={price_dripbag} price_gb={price_gb} image={image}>
                <div className='add-to-cart-text'>add to cart &gt;</div>
              </SnipcartButton>        
            </div>   
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .cart-link {
          padding-right: 175px;
          text-align: right;
          float: right;
        }
        .cart-button-sticky {
          position: fixed;
          bottom: 10%;
          right: 90px;
        }
        .cart-fix {
          padding-right: 2px;
        }
        .cart-button {
          float: right;
          padding-right: 90px;
          position: relative;
          bottom: 45px;
        }
        .add-to-cart-text {
          text-decoration: underline;
          font-size: var(--fsize-5);
          color: var(--green-header);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { productName } = ctx.params
  const content = await import(`../../src/beans/${productName}.md`)
  const data = matter(content.default)

  return {
    props: {
      fm: data.data,
      productName: productName
    },
  }
}

export async function getStaticPaths() {
  const productSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })
    return data
  })(require.context('../../src/beans', true, /\.md$/))

  const paths = productSlugs.map((slug) => `/products/${slug}`)
  // path example: "/products/ethiopia-chaka-gesha-village-n-hk"

  return {
    paths,
    fallback: false,
  }
}

export default ProductDetails;