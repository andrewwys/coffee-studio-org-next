import Head from 'next/head'
import matter from 'gray-matter'
import Hero from '../components/hero';
import Layout from '../components/layout'
import ProductHighlights from '../components/product-highlights'
import CategoryMenu from '../components/category-menu'
import {labels} from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

export default function Home({productList}) {
  const { lang } = useAppContext();
  return (
    <div>
      <Layout pageTitle={labels[lang].homeTitle}>
        <Hero/>
        <ProductHighlights productList={productList} title={labels[lang].prductHighlights}/>
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