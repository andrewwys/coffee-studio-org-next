import Link from 'next/link'
import { labels, classes } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

const CoffeeClassBanner = () => {
  const { lang } = useAppContext();
  return (
    <div className='main'>
      <img className='image' src='/images/coffee-class_banner_2.png' alt='coffee class' />
      <div className='circle'>
        <text className='join'>{classes[lang].joinOurClasses}</text>
        <Link href='/coffee-classes'><a className='button'>{labels[lang].learnMore}</a></Link>
      </div>
      
      <style jsx>{`
        .main {
          margin: 50px 92px 50px 0;
          white-space: nowrap;
          position: relative;
          padding-bottom: 60px;
        }
        .image {
          position: relative;
          width: 58vw;
          z-index: 10;
        }
        .circle {
          position: absolute;
          top: 80px;
          left: 45vw;
          background: transparent;
          border-color: var(--gold-subtitle);
          border-style: solid;
          border-width: 6px;
          border-radius: 50%;
          width: 42vw;
          height: 42vw;
          z-index: 9;
        }
        .join {
          position: absolute;
          top: 60px;
          left: 30%;
          width: 370px;
          inline-size: 20vw;
          white-space: normal;
          font-size: 3.2vw;
          color: var(--gold-subtitle);
        }
        .button {
          position: absolute;
          width: 16vw;
          height: 3.3vw;
          right: -4.5vw;
          top: 25.8vw;
          font-size: 2vw;
          padding: 0.7% 0;
          background-color: var(--gold-subtitle);
          color: white;
          border-radius: 50px;
          text-align: center;
          transition: all 0.2s
        }
        .button:hover {
          transform: scale(1.05);
        }
        .button:active {
          right: -6vw
        }
        @media screen and (max-width: 470px) {
          .circle {
            border-color: transparent;
          }
          .join {
            top: -50px;
            font-size: 1.3rem;
            width: 140px;
          }
          .button {
            width: 150px;
            height: 33px;
            font-size: 1.1rem;
            left: 60px;
            top: 30px;
          }
        }
        `}</style>
    </div>
  );
}

export default CoffeeClassBanner;