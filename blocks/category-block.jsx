import { display } from '../siteConfig.json'

const CategoryBlock = ({ title, imgPath }) => {
  const { catMenuBrown } = display;
  return (
    <div className='cat-block'>
      <div className='color-area'>
        <div className='title'>{title}</div>
      </div>
      <img className='image' src={imgPath} alt='menu-icon' />
      <style jsx>{` 
        .cat-block {
          width: 28.1vw;
          display: flex;
          align-items: center;
          flex-direction: column;
          cursor: pointer;
        }
        .cat-block:hover .image {
          filter: grayscale(0%);
          transform: scale(1.03);
        }
        .cat-block:hover .color-area {
          filter: grayscale(0%);
        }
        .cat-block:active .color-area {
          height: 420px;
        }
        .color-area{
          width: 24.6vw;
          height: 27.2vw;
          background: ${catMenuBrown};
          border-radius: 10px;
          filter: grayscale(50%);
          transition: all 0.2s
        }
        .title {
          color: white;
          font-size: 2.99vw;
          position: relative;
          top: 3vw;
          text-align: center;
        }
        .image {
          width: 28.1vw;
          position: relative;
          bottom: 18.6vw;
          filter: grayscale(50%);
          transition: all 0.2s;
        }
        
      `}</style>
    </div>
  );
}

export default CategoryBlock;