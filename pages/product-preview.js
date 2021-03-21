import Layout from '../components/layout'
import Hero from '../components/hero'
import ProductHighlights from '../components/product-highlights'
import { labels } from '../siteConfig.json'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import { useAppContext } from '../src/context/state'

const ProductPreview = ({ productList }) => {
  const { lang } = useAppContext();
  const router = useRouter()
  let title = '';
  let filteredProducts;
  switch (router.query.cat) {
    case 'single-origin': 
      title = labels[lang].singleOrigin;
      filteredProducts = productList.filter((prod)=>(prod.fm[lang].category === 'Single Origin'));
      break;
    case 'blends':
      title = labels[lang].houseBlend;
      filteredProducts = productList.filter((prod)=>(prod.fm[lang].category === 'Blend'));
      break;
    case 'drip-bags':
      title = labels[lang].dripBags;
      filteredProducts = productList.filter((prod)=>(prod.fm[lang].category === 'Single Origin' || prod.fm[lang].category === 'Blends'));
      break;
    default: 
      title = labels[lang].singleOrigin;
      filteredProducts = productList.filter((prod)=>(prod.fm[lang].category === 'Single Origin'))
  }
  return (
    <Layout title='Coffee Studio | Products'>
      <div>
        <Hero/>
        <ProductHighlights productList={filteredProducts} title={title}/>
      </div>
    </Layout>
  );
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

export default ProductPreview;