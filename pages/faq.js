import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { useAppContext } from '../src/context/state'
import { labels } from '../siteConfig.json'

const Faq = () => {
  const {lang } = useAppContext();
  const { faq } = labels[lang];
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <div className='info-wrapper'>
          <InfoBlock title={faq} content='blablalblalalal'/>
        </div>
      </Layout>
      <style jsx>
        {`
          .info-wrapper {
            margin-top: 80px;
            padding-left: 30px;
          }
        `}
      </style>
    </div>
  );
}

export default Faq;