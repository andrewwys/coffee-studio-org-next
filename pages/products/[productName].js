import Link from 'next/link'
import matter from 'gray-matter'
import { useAppContext } from '../../src/context/state'
import Layout from '../../components/layout'

const ProductDetails = ({fm}) => {
  const {lang} = useAppContext();
  if (!fm) return <></>
  const { country, display_name, process, flavors_main, flavors_desc, description, image, price_200g, price_500g, price_1kg, price_dripbag, sweetness, acidity, mouthfeel, finish, floral, fruits, nuts, sugars} = fm[lang];
  return (
    <Layout pageTitle={`${fm.title}`}>
      <Link href="/">
        <a>Back to homepage</a>
      </Link>
      <img src={image}/>
      <div>
        <div>{country}</div>
        <h3>{display_name}</h3>
        <div>{process}</div>
        <div className='favors-wrapper' style={{display: 'flex'}}>
          {flavors_main.map((flavor)=>(
          <div className='flavor' key={flavor.toString()}>{flavor}</div>
        ))}
        </div> 
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