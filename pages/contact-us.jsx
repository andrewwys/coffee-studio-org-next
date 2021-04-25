import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { useAppContext } from '../src/context/state'
import { labels } from '../siteConfig.json'

const ContactUs = () => {
  const { lang } = useAppContext();
  const { contact } = labels[lang];
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <Hero heroLine1='ccc' heroLine2='ddd' />
        <InfoBlock title={contact} content='blablalblalalal'/>
      </Layout>
    </div>
  );
}

export default ContactUs;