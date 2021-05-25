import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import { labels } from '../siteConfig.json'
import { instructorInfo } from '../siteContent'
import { useAppContext } from '../src/context/state'

const About = () => {
  const { lang } = useAppContext();
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <div className='info-wrapper'>
          <InfoBlock title={labels[lang].aboutUs} content={instructorInfo[lang]}/>
        </div>
      </Layout>
      <style jsx>
        {`
          .info-wrapper {
            padding: 80px 0 0 30px;
            white-space: pre;
          }
        `}
      </style>
    </div>
  );
}

export default About;