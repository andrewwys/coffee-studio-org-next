import CategoryBlock from '../blocks/category-block'
import CategoryBanner from '../blocks/category-banner'
import Link from 'next/link'
import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

const CategoryMenu = () => {
  const {lang} = useAppContext(); 
  return (
    <div>
      <div className='cat-menu'>
        <Link href={{ pathname: '/product-preview', query: {cat: 'single-origin'}, }}>
          <div className='block-wrapper'><CategoryBlock title={labels[lang].singleOrigin} imgPath='/images/cat-single-origin-img.png' /></div>
        </Link>
        <Link href={{ pathname: '/product-preview', query: {cat: 'blends'}, }}>
          <div className='block-wrapper'><CategoryBlock title={labels[lang].houseBlend} imgPath='/images/cat-blend-img.png' /></div>
        </Link>
        <Link href={{ pathname: '/product-preview', query: {cat: 'drip-bags'}, }}>
          <div className='block-wrapper'><CategoryBlock title={labels[lang].dripBags} imgPath='/images/cat-drip-bag-img.png' /></div>
        </Link>
      </div>
      <div className='cat-menu-m'>
        <Link href={{ pathname: '/product-preview', query: {cat: 'single-origin'}, }}>
          <div className='banner-wrapper'><CategoryBanner title={labels[lang].singleOrigin} imgPath='/images/cat-m-single-origin-img.jpg' /></div>
        </Link>
        <Link href={{ pathname: '/product-preview', query: {cat: 'blends'}, }}>
          <div className='banner-wrapper'><CategoryBanner title={labels[lang].houseBlend} imgPath='/images/cat-m-blended-img.jpg' /></div>
        </Link>
        <Link href={{ pathname: '/product-preview', query: {cat: 'drip-bags'}, }}>
          <div className='banner-wrapper'><CategoryBanner title={labels[lang].dripBags} imgPath='/images/cat-m-drip-bag-img.jpg' /></div>
        </Link>
      </div>
      <style jsx>{`
          .cat-menu {
            margin-top: 50px;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            height: 568px;
            background: url('/images/coffee-beans-bg.png') no-repeat 0px 173px;
            background-size: 100% 74% ;
          }
          .block-wrapper{
            height: 529px;
          }
          .cat-menu-m {
            display: none;
          }
          @media screen and (max-width: 1249px) {
            .cat-menu {
              display: none;
            }
            .cat-menu-m {
              display: block;
            }
          }
        `}</style>
    </div>
  );
}

export default CategoryMenu;