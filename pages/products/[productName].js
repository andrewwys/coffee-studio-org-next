import matter from 'gray-matter'
import { useAppContext } from '../../src/context/state'
import Layout from '../../components/layout'
import NavPath from '../../bits/nav-path'
import flavorFormatter from '../../src/utils/flavor-formatter'
import ProductDetailCard from '../../blocks/product-detail-card'
import InfoRow from '../../blocks/info-row'

import { labels } from '../../siteConfig.json'
import styles from './[productName].module.css'

const ProductDetails = ({fm}) => {
  const { details } = labels;
  const {lang} = useAppContext();
  if (!fm) return <></>
  const { country, display_name, process, flavors_main, flavors_desc, description, image, price_200g, price_500g, price_1kg, price_dripbag, sweetness, acidity, mouthfeel, finish, floral, fruits, nuts, sugars} = fm[lang];
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
          <InfoRow name={details[lang].flavors}>{'Flavours'}</InfoRow>
          <div>{country}</div>
          <div>{process}</div>
          <div className='favors-wrapper' style={{display: 'flex'}}>
            {flavors_main.map((flavor)=>(
            <div className='flavor' key={flavor.toString()}>{flavor}</div>
          ))}
          </div> 
          <div>{description}</div>
          <div>{flavors_desc}</div>
          <div className='prices'>
            {`200g: HKD${price_200g} 500g:   HKD${price_500g}    1kg: HKD${price_1kg}    Dripbag: HKD${price_dripbag}`}
          </div>
          <div className='flavor-chart'>
            <div>{`花香 ${floral}    水果 ${fruits}    堅果 ${nuts}    糖香 ${sugars}`}</div>
            <div>{`酸度 ${acidity}    甜度 ${sweetness}    醇厚 ${mouthfeel}    餘韻 ${finish}`}</div>
          </div>
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
      console.log('slug: ', slug);
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