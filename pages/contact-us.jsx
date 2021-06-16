import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import { useAppContext } from '../src/context/state'
import { labels } from '../siteConfig.json'
import { contactInfo } from '../siteContent'

const ContactUs = () => {
  const { lang } = useAppContext();
  const { contact } = labels[lang];
  const content = contactInfo[lang];
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <div className='info-wrapper'>
          <InfoBlock title={contact} content={content}/>
          <p>Whatsapp: <b>6961-1689</b></p>
          <p>Email: <b><a href='mailto:order@coffeestudio.org' target='_blank'>order@coffeestudio.org</a></b></p>
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