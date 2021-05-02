import Layout from '../components/layout'
import Hero from '../components/hero'
import ProductHighlights from '../components/product-highlights'
import { labels, packageOptions } from '../siteConfig.json'
import { productType } from '../src/utils/global-var'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import { useAppContext } from '../src/context/state'

const ProductPreview = ({ productList }) => {
  const { lang } = useAppContext();
  const { PO_200g, PO_dripbag } = packageOptions[lang];
  const router = useRouter();
  let title = '';
  let filteredProducts;
  const specialProducts = productList.filter((prod)=>(prod.fm[lang].category === 'Special'));
  let defaultPackageOpt = PO_200g;
  let orderType = productType.ROASTED_BEANS;
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
      defaultPackageOpt = PO_dripbag;
      orderType = productType.DRIP_BAGS;
      break;
    default: 
      title = labels[lang].singleOrigin;
      filteredProducts = productList.filter((prod)=>(prod.fm[lang].category === 'Single Origin'))
  }
  return (
    <Layout  bgImg='/images/hero1.png'>
      <div>
        <Hero heroLine1={labels[lang].heroLine1} heroLine2={labels[lang].heroLine2} />
        <ProductHighlights productList={filteredProducts} title={title} defaultPackageOpt={defaultPackageOpt} orderType={orderType} />
        { ( title === labels[lang].singleOrigin && specialProducts.length > 0 ) ?  // show special S.O. products 
          <ProductHighlights productList={specialProducts} title={labels[lang].special}  defaultPackageOpt={defaultPackageOpt} orderType={orderType} />
          : null
        }
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