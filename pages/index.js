import Head from 'next/head'
import matter from 'gray-matter'
import Hero from '../components/hero';
import Layout from '../components/layout'
import ProductHighlights from '../components/product-highlights'
import {labels} from '../siteConfig.json'

export default function Home({productList}) {
  const {hk} = labels;
  return (
    <div>
      {/* <Head>
        <html lang="zh-hk"/>
        <title>{hk.homeTitle}</title>
        <link rel="icon" href="/coffee-icon.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="preconnect" href="https://app.snipcart.com"/>
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.css" />
      </Head>
      <div id="snipcart" data-config-modal-style="side" data-api-key="MzIyY2I3MWQtNTFmZC00N2JlLWFmYWQtY2ZkYjQzMDdiOWNlNjM3NDc3ODQ2Njc5MjU5MzQx" hidden></div>
      <script async src="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.js"></script> */}

      <Layout pageTitle={hk.homeTitle}>
        <Hero/>
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
  })(require.context('../src/beans', true, /\.md$/))

  return {
    props: {
      productList: products, 
      title: configData.title,
      description: configData.description,
    },
  }
}