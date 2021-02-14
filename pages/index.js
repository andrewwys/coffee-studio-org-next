import matter from 'gray-matter'
import Layout from '../components/layout'
import ProductHighlights from '../components/product-highlights'

export default function Home({title, description, productList}) {
  return (
    <div>
      {/* <Head>
        <link rel="preconnect" href="https://app.snipcart.com"/>
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.js"></script>
      </Head>
      <div id="snipcart" data-config-modal-style="side" data-api-key="MzIyY2I3MWQtNTFmZC00N2JlLWFmYWQtY2ZkYjQzMDdiOWNlNjM3NDc3ODQ2Njc5MjU5MzQx" hidden></div> */}
      <Layout pageTitle={title}>
        <main>
          <h1>{description}</h1>
        </main>
        <ProductHighlights productList={productList}/>
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