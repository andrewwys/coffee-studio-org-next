import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import Hero from '../components/hero'

const About = () => {
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <div className='info-wrapper'>
          <InfoBlock title='About us...' content='Coming soon...'/>
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

export default About;