import { display } from '../siteConfig.json'

const InfoRow = ({ name, children }) => {
  if (children) {
    return (
      <div className='info-row'>
        <div className='name'>{name}</div>
        <div className='data'>{children}</div>
        <style jsx>{`
          .info-row {
            display: flex;
            align-items: flex-start;
            margin: 40px 0 40px 40px;
          }
          .name {
            font-size: 1.2rem;
            margin-right: 20px;
            min-width: 80px; 
            width: 10%;
            white-space: nowrap;
            color: var(--grey-tag);
          }
          .data {
            width: 90%;
            font-size: 1.2rem;
            margin-left: 20px;
            white-space: pre-line;
          }
          @media screen and (max-width: ${display.tabletWidth}) {
            .info-row {
              flex-direction: column;
            }
            .name {
              font-size: 1.1rem;
              margin-right: 10px;
              margin-bottom: 5px;
              
            }
            .data {
              font-size: 1.1rem;
              margin-left: 10px;
            }
          }
          @media screen and (max-width: ${display.mobileWidth} ) {
            .info-row {
              margin: 10px 0;
            }
            .name {
              font-size: var(--fsize-6);
              margin-right: 10px;
              
            }
            .data {
              font-size: var(--fsize-6);
              margin-left: 10px;
            }
          }
        `}</style>
      </div>
    );
  } 
  else return null;
}

export default InfoRow;