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
        <Link href='/product-preview?cat=single-origin#highlights' passHref>
          <div className='block-wrapper'><CategoryBlock title={labels[lang].singleOrigin} imgPath='/images/cat-single-origin-img.png' /></div>
        </Link>
        <Link href='/product-preview?cat=blends#highlights' passHref>
          <div className='block-wrapper'><CategoryBlock title={labels[lang].houseBlend} imgPath='/images/cat-blend-img.png' /></div>
        </Link>
        <Link href='/product-preview?cat=drip-bags#highlights' passHref>
          <div className='block-wrapper'><CategoryBlock title={labels[lang].dripBags} imgPath='/images/cat-drip-bag-img.png' /></div>
        </Link>
      </div>
      <div className='cat-menu-m'>
        <Link href='/product-preview?cat=single-origin#highlights' passHref>
          <div className='banner-wrapper'><CategoryBanner title={labels[lang].singleOrigin} imgPath='/images/cat-m-single-origin-img.jpg' /></div>
        </Link>
        <Link href='/product-preview?cat=blends#highlights' passHref>
          <div className='banner-wrapper'><CategoryBanner title={labels[lang].houseBlend} imgPath='/images/cat-m-blended-img.jpg' /></div>
        </Link>
        <Link href='/product-preview?cat=drip-bags#highlights' passHref>
          <div className='banner-wrapper'><CategoryBanner title={labels[lang].dripBags} imgPath='/images/cat-m-drip-bag-img.jpg' /></div>
        </Link>
      </div>
      <style jsx>{`
          .cat-menu {
            margin-top: 50px;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            height: 40vw;
            background: url('/images/coffee-beans-bg.png') no-repeat 0px 12vw;
            background-size: 100% 74% ;
          }
          .block-wrapper{
            height: 529px;
          }
          .cat-menu-m {
            display: none;
          }
          @media screen and (max-width: 485px) {
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