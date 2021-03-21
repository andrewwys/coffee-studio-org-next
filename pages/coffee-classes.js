import Layout from '../components/layout'
import Hero from '../components/hero'
import { useAppContext } from '../src/context/state'
import { classes } from '../siteConfig.json'

const CoffeeClasses = () => {
  const { lang } = useAppContext();
  return (
    <div>
      <Layout>
        <Hero bgImg='/images/bg-classes.png' heroLine1={classes[lang].title} heroLine2={classes[lang].subtitle} />
        <div className='wrapper'>
          <div className='menu'>
            Menu
          </div>
          <div className='content'>
            Content
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .wrapper {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          top: -250px;
        }
        .menu {
          width: 30%;
          min-width: 250px;
          font-size: var(--fsize-5);
        }
        .content {
          width: 70%;
          font-size: var(--fsize-4);
        }
      `}</style>
    </div>
  );
}

export default CoffeeClasses;