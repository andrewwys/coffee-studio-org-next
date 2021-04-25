//import Head from 'next/head'
import Header from '../blocks/header'
import Footer from '../blocks/footer'
//import { snipcartAPIKey } from '../siteConfig.json'

export default function Layout({ bgImg, children }) {
  return (
    <div className='layout'>
      <Header/>
      <section>
        <div>{children}</div>
      </section>
      <Footer/>
      <style jsx>{`
        .layout {
          min-width: 460px;
        }
        section {
          background: url(${bgImg}) no-repeat right top;
          background-size: 60% auto;
          min-height: calc(100vh - 265px);
        }
      `} </style>
    </div> 
  )
}