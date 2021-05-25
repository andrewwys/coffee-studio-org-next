import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import { useAppContext } from '../src/context/state'
import { labels } from '../siteConfig.json'

const ContactUs = () => {
  const { lang } = useAppContext();
  const { contact } = labels[lang];
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <div className='info-wrapper'>
          <InfoBlock title={contact} content={labels[lang].comingSoon}/>
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

export default ContactUs;