import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { useAppContext } from '../src/context/state'
import { labels } from '../siteConfig.json'

const PhotoAttribution = () => {
  const {lang } = useAppContext();
  const { photoAttribution } = labels[lang];
  return (
    <div>
      <Layout>
        <Hero bgImg='/images/bg-classes.png' heroLine1='aaa' heroLine2='bbb' />
        <InfoBlock title={photoAttribution} content='blablalblalalal'/>
      </Layout>
    </div>
  );
}

export default PhotoAttribution;