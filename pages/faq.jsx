import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import { useAppContext } from '../src/context/state'
import { labels } from '../siteConfig.json'
import { faqList } from '../siteContent'

const faqObject = (q, a) => (
  <details key={q}>
    <summary>{q}</summary>
    <p>{a}</p>
  </details>
)

const Faq = () => {
  const { lang } = useAppContext();
  const { faq } = labels[lang];
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <div className='info-wrapper'>
          <InfoBlock title={faq} content=''/>
            <div className='content'>
              {faqList[lang].map(item => {
                return (
                  faqObject(item.q, item.a)
                )
              })}
            </div>
        </div>
        
      </Layout>
      <style jsx>
        {`
          .info-wrapper {
            margin-top: 80px;
            padding-left: 30px;
          }
          .content {
            margin-left: 50px;
          }
          @media screen and (max-width: 960px) {
            .content {
              margin-left: 30px;
            }
          }
          @media screen and (max-width: 470px) {
            .content {
              margin-left: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Faq;