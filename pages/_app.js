import '../styles/globals.css';
import { AppWrapper } from '../src/context/state'
import Head from 'next/head'
import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'
import { metaData } from '../siteConfig.json'

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
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content={metaData[lang].siteDesc}></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href="/coffee-icon.png" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <link rel="preconnect" href="https://app.snipcart.com"/>
          <link rel="preconnect" href="https://cdn.snipcart.com"/>
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.css" />
        </Head>
        <div 
          id="snipcart" 
          data-config-modal-style="side" 
          data-api-key="OTBlOGYzYTktNjMyZC00ZThiLWJjODgtMzI1OTZjZWYyMzM1NjM3NDc3ODQ2Njc5MjU5MzQx" 
          data-currency="hkd" 
          hidden>
            
            {/* Overriding snipcart default templates */}
            <address-fields>
              <div>
                <fieldset class="snipcart-form__set">

                  <div class="snipcart-form__row">
                    <div class="snipcart-form__field snipcart-form__cell--large">
                      <snipcart-label
                        class="snipcart__font--tiny"
                        for="address1"
                      >Address</snipcart-label>
                      <snipcart-input name="address1"></snipcart-input>
                      <snipcart-error-message name="address1"></snipcart-error-message>
                    </div>
                  </div>

                  <div class="snipcart-form__row">
                    <div class="snipcart-form__field snipcart-form__cell--large">
                      <snipcart-label class="snipcart__font--tiny" for="phone">
                        City
                      </snipcart-label>
                      <snipcart-input name="city"></snipcart-input>
                      <snipcart-error-message name="city"></snipcart-error-message>
                    </div>
                    <div class="snipcart-form__field snipcart-form__cell--large">
                      <snipcart-label class="snipcart__font--tiny" for="phone">
                        Province
                      </snipcart-label>
                      <snipcart-input name="province"></snipcart-input>
                      <snipcart-error-message name="province"></snipcart-error-message>
                    </div>
                  </div>

                  <div class="snipcart-form__field">
                    <snipcart-label
                      class="snipcart__font--tiny"
                      for="country"
                    >Country</snipcart-label>
                    <snipcart-typeahead type="dropdown" name="country" autocomplete="country"></snipcart-typeahead>
                  </div>

                  <div class="snipcart-form__row">
                    <div class="snipcart-form__field snipcart-form__cell--large">
                      <snipcart-label class="snipcart__font--tiny" for="phone">
                        Mobile Number / 手提電話 **
                      </snipcart-label>
                      <snipcart-input name="phone">
                      </snipcart-input>
                    </div>
                    <div class="snipcart-form__field snipcart-form__cell--large">
                      <snipcart-label class="snipcart__font--tiny" for="phone">
                        Postal Code
                      </snipcart-label>
                      <snipcart-input name="postalCode"></snipcart-input>
                      <snipcart-error-message name="postalCode"></snipcart-error-message>
                    </div>
                  </div>

                </fieldset>
              </div>
            </address-fields>

          </div>
        <script async src="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.js"></script>
        <Component {...pageProps} />
      </AppWrapper>
    </div>
    
  );
}

export default MyApp
