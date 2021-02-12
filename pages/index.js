import Layout from '../components/layout'
// import bean from '../src/beans/ethiopia-hunkute-sidamo-g1-natural.md'

export default function Home({title, description}) {
  return (
    <Layout pageTitle={title}>
      <main>
        <h1>{description}</h1>
      </main>
    </Layout>
  )
}


export async function getStaticProps() {
  const configData = await import(`../siteConfig.json`)
  return {
    props: {
      title: configData.title,
      description: configData.description,
    },
  }
}