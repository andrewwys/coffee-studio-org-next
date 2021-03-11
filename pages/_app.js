import '../styles/globals.css';
import { AppWrapper } from '../src/context/state'; 
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <html lang="zh-hk"/>
        <title>{`Title`}</title>
        <link rel="icon" href="/coffee-icon.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="preconnect" href="https://app.snipcart.com"/>
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.css" />
      </Head>
      <div id="snipcart" data-config-modal-style="side" data-api-key="MzIyY2I3MWQtNTFmZC00N2JlLWFmYWQtY2ZkYjQzMDdiOWNlNjM3NDc3ODQ2Njc5MjU5MzQx" hidden></div>
      <script async src="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.js"></script>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </div>
    
  );
}

export default MyApp
