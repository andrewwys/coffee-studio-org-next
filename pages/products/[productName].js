import Link from 'next/link'
import matter from 'gray-matter'

import Layout from '../../components/layout'

const ProductDetails = ({fm}) => {
  if (!fm) return <></>
  return (
    <Layout pageTitle={`${fm.en.title}`}>
      <Link href="/">
        <a>Back to homepage</a>
      </Link>
      <div>
        <h1>{fm.en.title}</h1>
        <p>By {fm.en.flavors}</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { productName } = ctx.params

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

  return {
    paths,
    fallback: false,
  }
}

export default ProductDetails;