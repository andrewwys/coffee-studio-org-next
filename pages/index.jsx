import matter from 'gray-matter'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ProductHighlights from '../components/product-highlights'
import CategoryMenu from '../components/category-menu'
import CoffeeClassBanner from '../components/coffee-class-banner'
import {labels, packageOptions} from '../siteConfig.json'
import { useAppContext } from '../src/context/state'


export default function Home({productList}) {
  const { lang } = useAppContext();
  const { PO_200g } = packageOptions[lang];
  const hProductList = productList.filter((product)=>(product.fm[lang].highlight === true));
  return (
    <div>
      <Layout bgImg='/images/bg-landing.png'>
        <Hero heroLine1={labels[lang].heroLine1} heroLine2={labels[lang].heroLine2} />
        <CoffeeClassBanner />
        <ProductHighlights productList={hProductList} title={labels[lang].prductHighlights} defaultPackageOpt={PO_200g}/>
        <CategoryMenu productList={productList} />
      </Layout>
    </div>
  )
}


export async function getStaticProps() {
  const configData = await import(`../siteConfig.json`);
  
  const products = ((context) => { 
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        fm: document.data,
        // markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../src/beans', true, /\.md$/))

  return {
    props: {
      productList: products, 
      title: configData.title,
      description: configData.description,
    },
  }
}
