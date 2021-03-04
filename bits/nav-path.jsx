import Link from 'next/link'
import useWindowDimensions from '../src/utils/window-size'

const NavPath = () => {
  // const { width } = useWindowDimensions();
  return (
    <div>
      <div className='nav-path'>
        {/* { useWindowDimensions().width > 470 
          ? <Link href="/">
              <a>Home</a>
          </Link>
          : <div className='placeholder'></div>
        } */}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className='placeholder'></div>
      <style jsx>{`
        .nav-path {
          text-align: right;
          padding: 30px 20px 10px 0;
          color: var(--green-header);
          text-decoration: underline;
          font-size: var(--fsize-5);
        }
        .placeholder {
          display: none;
          height: 68px;
        }
        @media screen and (max-width: 470px) {
          .nav-path {
            display: none;
          }
          .placeholder {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

export default NavPath;