// import Link from 'next/link'
import LanguageSwitch from '../bits/language-switch'
import styles from './header.module.css'

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        {/* <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/product-preview">
          <a>Products</a>
        </Link> */}
        <div className={styles.bgPattern}></div>
        <img className={styles.logo} src='/coffeebb-logo-1.png' alt='logo'></img>
        <div className={styles.langWrapper}>
          <LanguageSwitch />
        </div>
        <div className='snipcart-checkout'>
          <div className='snipcart-items-count' ></div>
        </div>
      </nav>
      <style jsx>{`
        .snipcart-checkout {
          height: 30px;
          width: 30px;
          position: absolute;
          right: 50px;
          bottom: 17.5px;
          border: 3px solid white;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100;
        }
        .snipcart-checkout:hover {
          font-weight: 450;
        }
        .snipcart-checkout:active {
          -webkit-transform: scale(0.9);
          -ms-transform: scale(0.9);
          transform: scale(0.9);
        }
        .snipcart-items-count {
          color: white;
          z-index: 101;
          font-size: 0.8rem;
        }
      `}</style>
    </header>
  );
}

export default Header;