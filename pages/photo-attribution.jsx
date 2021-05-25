import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { useAppContext } from '../src/context/state'
import { labels } from '../siteConfig.json'

const attrLinks = () => (
  <div>
    <a href="https://www.freepik.com/photos/coffee">Coffee photo created by freepik - www.freepik.com</a><br/>
    <a href="https://www.freepik.com/photos/background">Background photo created by jcomp - www.freepik.com</a><br/>
    <a href="https://www.freepik.com/photos/food">Food photo created by jcomp - www.freepik.com</a><br/>
    <a href="https://www.freepik.com/photos/vintage">Vintage photo created by jcomp - www.freepik.com</a><br/>
    <a href="https://www.freepik.com/photos/frame">Frame photo created by master1305 - www.freepik.com</a>
  </div>
);

const PhotoAttribution = () => {
  const {lang } = useAppContext();
  const { photoAttribution } = labels[lang];
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <div className='info-wrapper'>
          <InfoBlock title={photoAttribution} content={attrLinks()}/>
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

export default PhotoAttribution;