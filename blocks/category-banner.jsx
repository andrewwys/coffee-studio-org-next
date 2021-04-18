import { display } from '../siteConfig.json'

const CategoryBanner = ({ imgPath, title }) => {
  const { tabletWidth } = display;
  return (
    <div className='banner'>
      <img className='img' src={imgPath} alt='category banner' width='100%'/>
      <div className='title'>{title}</div>
      <style jsx>{`
        .banner {
          margin: 0 72px;
          width: calc(100vw - 144px);
          position: relative;
          cursor: pointer;
        }
        .img {
          transition: transform 0.2s;
        }
        .banner:hover {
          opacity: 1;
        }
        .banner:hover .img {
          transform: scale(1.03);
        }
        .title{
          position: absolute;
          text-align: center;
          margin: 0 auto;
          width: 100%;
          z-index: 10;
          color: white;
          font-size: var(--fsize-2);
          top: 30%;
          cursor: pointer;
        }
        @media screen and (max-width: ${tabletWidth}) {
          .banner {
            margin: 0 38px 0 20px;
            width: calc(100vw - 58px);
          }
          .title {
            font-size: var(--fsize-3);
            top: 35%;
          }
        }
        @media screen and (max-width: 599px) {
          .banner {
            width: 90%;
          }
          .title {
            font-size: var(--fsize-5);
            top: 30%;
          }
        }
      `}</style>
    </div>
  );
}

export default CategoryBanner;