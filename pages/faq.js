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
        <Hero heroLine1='yyy' heroLine2='zzz' />
        <InfoBlock title={faq} content='blablalblalalal'/>
      </Layout>
    </div>
  );
}

export default Faq;