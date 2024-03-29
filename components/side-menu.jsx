// import { useState } from 'react'
import Link from 'next/link'
import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

const SideMenu = ({ menuWidth, changeWidth }) => {

  const { lang } = useAppContext();
  const { homepage, singleOrigin, houseBlend, dripBags, aboutUs, faq, coffeeClasses } = labels[lang];

  return (
    <div className='side-menu' id='sideMenu'>
      <a href="javascript:void(0)" className="close-button" onClick={()=>changeWidth('0px')}>&times;</a>
      <Link href={{ pathname: '/'}}>
        <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>{homepage}</a>
      </Link>
      <Link href='/product-preview?cat=single-origin#highlights' passHref>
        <a href="#highlights" className="menu-item" onClick={()=>changeWidth('0px')}>{singleOrigin}</a>
      </Link>
      <Link href='/product-preview?cat=blends#highlights' passHref>
        <a href="#highlights" className="menu-item" onClick={()=>changeWidth('0px')}>{houseBlend}</a>
      </Link>
      <Link href='/product-preview?cat=drip-bags#highlights' passHref>
        <a href="#highlights" className="menu-item" onClick={()=>changeWidth('0px')}>{dripBags}</a>
      </Link>
      <Link href='/coffee-classes' passHref>
        <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>{coffeeClasses}</a>
      </Link>
      <Link href='/about' passHref>
        <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>{aboutUs}</a>
      </Link>
      <Link href='/faq' passHref>
        <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>{faq}</a>
      </Link>
      <div className='menu-item'>
        <a href='https://www.facebook.com/CoffeeStudio.org/' target='_blank'>
          <img className='social-icon' src='/images/fb-icon.png' alt='facebook'/>
        </a>
        <a href='https://www.instagram.com/coffee_studio/' target='_blank'>
          <img className='social-icon' src='/images/ig-icon.png' alt='instagram'/>
        </a>
      </div>
      <style jsx>{`
        
        .side-menu {
          position: absolute;
          height: 100%; /* 100% Full-height */
          width: ${menuWidth}; /* 0 width - change this with JavaScript */
          position: fixed; /* Stay in place */
          z-index: 100; /* Stay on top */
          top: 0; /* Stay at the top */
          right: 0;
          background-color: #715747; 
          overflow-x: hidden; /* Disable horizontal scroll */
          padding-top: 60px; /* Place content 60px from the top */
          transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
        }
        .menu-item,.close-button {
          text-decoration: none;
          color: #CE9B83;
          display: block;
          transition: all 0.3s ease;
        }
        .menu-item {
          padding: 8px 8px 8px 32px;
          font-size: var(--fsize-5);
        }
        .close-button {
          padding: 0 32px 16px 0;
          text-align: right;
          font-size: var(--fsize-2);
        }

        .menu-item:hover,.close-button:hover {
          color: white;
        }
        .social-icon {
          width: 60px;
          height: 60px;
          padding: 5px;
          margin-top: 10px;
          margin-right: 5px;
          cursor: pointer;
          transition: filter 0.3s ease;
          filter: brightness(180%) hue-rotate(-5deg);
        }
        .social-icon:hover {
          filter: brightness(350%) ;
        }
        
      `}</style>
    </div>
  );
}

export default SideMenu;