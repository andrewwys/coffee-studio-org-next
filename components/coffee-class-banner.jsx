import Link from 'next/link'
import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

const CoffeeClassBanner = () => {
  const { lang } = useAppContext();
  return (
    <div className='main'>
      <div className='tag'>{`${labels[lang].coffeeClasses}`}</div>
      <Link href='/coffee-classes'><a className='link'>{`${labels[lang].learnMore} >`}</a></Link>
      <style jsx>{`
        .main {
          margin: 50px 0;
          height: 100vh;
          white-space: nowrap;
          position: relative;
        }
        .main::before {
          position: absolute;
          content: "";
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: url('/images/coffee-class-banner.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          opacity: 0.8;
          transition: all 0.2s ease;
        }
        .main:hover::before {
          opacity: 0.9;
        }
        .tag {
          display: inline-block;
          position: relative;
          top: 5%;
          width: 40%;
          height: 128px;
          background-image: url('/images/fading-tag-brown.png');
          background-repeat: no-repeat;
          background-position: right top;
          background-size: cover;
          text-indent: 50px;
          color: white;
          font-size: var(--fsize-3);
          line-height: 128px;
        }
        .link {
          position: relative;
          width: 100%;
          top: 75%;
          font-size: var(--fsize-2);
          color: white;
          text-shadow: 2px 2px black;
          display: none;
          text-align: left;
        }
        .link:active {
          left: 5px;
        }
        .main:hover .link {
          display: inline-block;
        }
        `}</style>
    </div>
  );
}

export default CoffeeClassBanner;