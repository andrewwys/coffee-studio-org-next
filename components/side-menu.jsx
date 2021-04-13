// import { useState } from 'react'
import Link from 'next/link'

const SideMenu = ({ menuWidth, changeWidth }) => {

  // const [menuWidth, changeWidth] = useState('320px');

  return (
    <div className='side-menu' id='sideMenu'>
      <a href="javascript:void(0)" className="close-button" onClick={()=>changeWidth('0px')}>&times;</a>
      <Link href={{ pathname: '/'}}>
        <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>Home</a>
      </Link>
      <Link href={{ pathname: '/product-preview', query: {cat: 'single-origin'}, }}>
        <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>Single Origin</a>
      </Link>
      <Link href={{ pathname: '/product-preview', query: {cat: 'blends'}, }}>
        <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>Blends</a>
      </Link>
      <Link href={{ pathname: '/product-preview', query: {cat: 'dripbags'}, }}>
        <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>Dripbag</a>
      </Link>
      <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>About Us</a>
      <a href="#" className="menu-item" onClick={()=>changeWidth('0px')}>FAQ</a>
      <div className='menu-item'>
        <a href='https://www.instagram.com/coffee_studio/' target='_blank'>
          <img className='social-icon' src='/images/fb-icon.png' alt='facebook'/>
        </a>
        <a href='https://www.facebook.com/CoffeeStudio.org/' target='_blank'>
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
          color: white;
          display: block;
          transition: all 0.3s ease;
        }
        .menu-item {
          padding: 8px 8px 8px 32px;
          font-size: var(--fsize-4);
        }
        .close-button {
          padding: 0 32px 16px 0;
          text-align: right;
          font-size: var(--fsize-2);
        }

        .menu-item:hover,.close-button:hover {
          font-weight: 500;
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
          filter: brightness(180%) hue-rotate(-5deg) sepia(100%);
        }
        
      `}</style>
    </div>
  );
}

export default SideMenu;