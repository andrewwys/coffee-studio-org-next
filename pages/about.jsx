import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import Hero from '../components/hero'

const About = () => {
  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <Hero heroLine1='www' heroLine2='sss' />
        <InfoBlock title='About us...' content='flafalflaflalaflalaf'/>
      </Layout>
    </div>
  );
}

export default About;