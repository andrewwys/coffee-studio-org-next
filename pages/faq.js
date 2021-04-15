import InfoBlock from '../components/info-block'
import Layout from '../components/layout'
import Hero from '../components/hero'

const Faq = () => {
  return (
    <div>
      <Layout>
        <Hero bgImg='/images/bg-classes.png' heroLine1='yyy' heroLine2='zzz' />
        <InfoBlock title='FAQ' content='blablalblalalal'/>
      </Layout>
    </div>
  );
}

export default Faq;