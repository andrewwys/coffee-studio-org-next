import Link from 'next/link'
import LanguageSwitch from '../bits/language-switch'
import MenuIcon from '../bits/menu-icon'
import SideMenu from '../components/side-menu'
import styles from './header.module.css'

import { useState } from 'react'

const Header = () => {

  const [menuWidth, changeWidth] = useState('0px'); // toggles side menu by changing the width 

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.bgPattern}></div>
        <Link href='/'><img className={styles.logo} src='/coffeebb-logo-1.png' alt='logo'></img></Link>
        <div className={styles.langWrapper}>
          <LanguageSwitch />
        </div>
        <div className='snipcart-checkout'>
          <div className='snipcart-items-count' ></div>
        </div>
        <div className={styles.menuIconWrapper} onClick={()=>changeWidth('320px')}>
          <MenuIcon />
        </div>
      </nav>

      <SideMenu menuWidth={menuWidth} changeWidth={changeWidth}/>

      <style jsx>{`
        .snipcart-checkout {
          height: 30px;
          width: 30px;
          position: absolute;
          right: 100px;
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
          border-width: 3.2px;
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