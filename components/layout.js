import Head from 'next/head'
import Header from '../blocks/header'
import Footer from '../blocks/footer'
import { snipcartAPIKey } from '../siteConfig.json'

export default function Layout({ children, pageTitle }) {
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
          min-height: calc(100vh - 265px);
        }
      `} </style>
    </div> 
  )
}