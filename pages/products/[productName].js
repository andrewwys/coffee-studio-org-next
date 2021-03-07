import matter from 'gray-matter'
import { useAppContext } from '../../src/context/state'
import Layout from '../../components/layout'
import NavPath from '../../bits/nav-path'
import flavorFormatter from '../../src/utils/flavor-formatter'
import ProductDetailCard from '../../blocks/product-detail-card'
import AddToCartButton from '../../bits/add-to-cart-button'
import InfoRow from '../../blocks/info-row'
import FlavorProfileChart from '../../components/flavor-profile-chart'

import { labels } from '../../siteConfig.json'
import styles from './[productName].module.css'

const ProductDetails = ({fm}) => {
  const { details } = labels;
  const {lang} = useAppContext();
  if (!fm) return <></>
  const { country, display_name, process, flavors_main, flavors_desc, description, image, price_200g, price_500g, price_1kg, price_dripbag, price_gb, sweetness, acidity, mouthfeel, finish, floral, fruits, nuts, sugars} = fm[lang];
  const flavorStr = flavorFormatter(flavors_main);
  return (
    <Layout pageTitle={`${fm[lang].title}`}>
      <div className={styles.wrapper}>
        <NavPath />
        <div className={styles.main}>
          <div className={styles.title}>{display_name}</div>
          <ProductDetailCard country={country} process={process} color='#D09797' />
          <div className={styles.lineBreak}></div>
          <InfoRow name={details[lang].profile}>{flavorStr}</InfoRow>
          <InfoRow name={details[lang].flavors}>
            <FlavorProfileChart floral={floral} fruits={fruits} nuts={nuts} sugars={sugars} acidity={acidity} sweetness={sweetness} mouthfeel={mouthfeel} finish={finish} />
          </InfoRow>
          <InfoRow name={details[lang].details}>{description}</InfoRow>
          <InfoRow name={details[lang].flavorDesc}>{flavors_desc}</InfoRow>
          <InfoRow name={details[lang].package}>{details[lang].packageText}</InfoRow>
          <InfoRow name={details[lang].price}>{`HKD ${price_200g} / ${price_500g} / ${price_1kg} / ${price_dripbag} / ${price_gb}`}</InfoRow>
        </div>
        <div className={styles.addToCart}>
          <div className={styles.addToCartText} >add to cart &gt;</div>
          <div className={styles.addToCartButton} ><AddToCartButton size='70' /></div>
        </div>
      </div>
      
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { productName } = ctx.params
  //console.log('product name: ', productName)
  //const productNameSliced = productName.slice(0, -3)
  const content = await import(`../../src/beans/${productName}.md`)
  const data = matter(content.default)

  return {
    props: {
      fm: data.data
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