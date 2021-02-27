import Link from 'next/link'
import {display} from '../siteConfig.json'

const NavPath = () => {
  return (
    <div className='nav-path'>
      <Link href="/">
        <a>Home</a>
      </Link>
      <style jsx>{`
        @media screen and (max-width: ${display.mobileWidth}) {
          .nav-path {
            display: none;
          }
        }
        .nav-path {
          text-align: right;
          padding: 30px 20px 10px 0;
          color: var(--green-header);
          text-decoration: underline;
          font-size: var(--fsize-5);
        }
      `}</style>
    </div>
  );
}

export default NavPath;