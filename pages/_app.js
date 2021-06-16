import '../styles/globals.css';
import { AppWrapper } from '../src/context/state'
import Head from 'next/head'
import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

function MyApp({ Component, pageProps }) {
  const { lang } = useAppContext();
  // const langTag = lang === 'hk' ? 'zh-Hant' : 'en';
  // console.log('lang: ', langTag);
  return (
    <div>
      <AppWrapper>
        <Head>
          {/* <html lang="zh-Hant" key="html-tag" /> */}
          <title>{labels[lang].homeTitle}</title>
          <link rel="icon" href="/coffee-icon.png" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <link rel="preconnect" href="https://app.snipcart.com"/>
          <link rel="preconnect" href="https://cdn.snipcart.com"/>
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.css" />
        </Head>
        <div id="snipcart" data-config-modal-style="side" data-api-key="OTBlOGYzYTktNjMyZC00ZThiLWJjODgtMzI1OTZjZWYyMzM1NjM3NDc3ODQ2Njc5MjU5MzQx" data-currency="hkd" hidden></div>
        <script async src="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.js"></script>
        <Component {...pageProps} />
      </AppWrapper>
    </div>
    
  );
}

export default MyApp
