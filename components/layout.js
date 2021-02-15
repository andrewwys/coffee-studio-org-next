import Head from 'next/head'
import Header from '../blocks/header'
import Footer from '../blocks/footer'
import { snipcartAPIKey } from '../siteConfig.json'

export default function Layout({ children, pageTitle }) {
  return (
    <div className='layout'>
      <Head>
        <html lang="zh-hk"/>
        <title>{pageTitle}</title>
        <link rel="icon" href="/coffee-icon.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="preconnect" href="https://app.snipcart.com"/>
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.css" />
      </Head>
      <Header/>
      <section>
        <div>{children}</div>
      </section>
      <Footer/>
      <script async src="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.js"></script>
      <div id="snipcart" data-config-modal-style="side" data-api-key={snipcartAPIKey} hidden></div>
    </div> 
  )
}