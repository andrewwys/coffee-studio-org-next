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
          top: 75%;
          font-size: var(--fsize-4);
          padding: 10px 20px;
          color: var(--green-header);
          display: inline;
          border: 5px solid var(--green-header);
          background-color: var(--white-bg);
          border-radius: 5px;
          box-shadow: 6px 6px 9px rgb(0 0 0 / 75%);
          transition: all 0.1s ease;
        }
        .link:hover {
          border-width: 6px;
          font-weight: 400;
        }
        `}</style>
    </div>
  );
}

export default CoffeeClassBanner;