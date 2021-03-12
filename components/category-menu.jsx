import CategoryBlock from '../blocks/category-block'
import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

// 

const CategoryMenu = () => {
  const {lang} = useAppContext(); 
  return (
    <div className='cat-menu'>
      <div className='block-wrapper'><CategoryBlock title={labels[lang].singleOrigin} imgPath='/images/cat-single-origin-img.png' /></div>
      <div className='block-wrapper'><CategoryBlock title={labels[lang].blended} imgPath='/images/cat-blend-img.png' /></div>
      <div className='block-wrapper'><CategoryBlock title={labels[lang].dripBag} imgPath='/images/cat-drip-bag-img.png' /></div>
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
        `}</style>
    </div>
  );
}

export default CategoryMenu;