import { display } from '../siteConfig.json'

const CategoryBlock = ({ title, imgPath }) => {
  const { catMenuBrown } = display;
  return (
    <div className='cat-block'>
      <div className='color-area'>
        <div className='title'>{title}</div>
      </div>
      <img className='image' src={imgPath} alt='menu-icon' width='405px' />
      <style jsx>{` 
        .cat-block {
          width: 405px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .color-area{
          width: 355px;
          height: 392px;
          background: ${catMenuBrown};
          border-radius: 10px;
        }
        .title {
          color: white;
          font-size: var(--fsize-3);
          position: relative;
          top: 46px;
          text-align: center;
        }
        .image {
          position: relative;
          bottom: 268px;
        }
      `}</style>
    </div>
  );
}

export default CategoryBlock;