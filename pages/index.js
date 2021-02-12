import matter from 'gray-matter'

import Layout from '../components/layout'
import ProductHighlights from '../components/product-highlights'

export default function Home({title, description, productList}) {
  return (
    <Layout pageTitle={title}>
      <main>
        <h1>{description}</h1>
      </main>
      <ProductHighlights productList={productList}/>
    </Layout>
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
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../src/beans/hk', true, /\.md$/))

  return {
    props: {
      productList: products, 
      title: configData.title,
      description: configData.description,
    },
  }
}