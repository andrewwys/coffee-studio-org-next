import Head from 'next/head'
import Header from '../blocks/header'
import Footer from '../blocks/footer'

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/coffee-icon.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header/>
      <section>
        <div>{children}</div>
      </section>
      <Footer/>
    </>
  )
}