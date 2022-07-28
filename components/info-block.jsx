const InfoBlock = ({ title, content }) => {
  
  return (
    <div className='info-block'>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
      <style jsx>
        {`
          .info-block {
            margin-bottom: 40px;
          }
          .title {
            color: var(--gold-subtitle);
            font-size: var(--fsize-5);
            margin-bottom: 24px;
          }
          .content {
            font-size: var(--fsize-6);
          }
          @media screen and (max-width: 470px) {
            .info-block {
              margin-left: 0;
              margin-top: 80px;
            }
            .title {
              font-size: var(--fsize-5);
              margin-bottom: 24px;
            }
            .content {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default InfoBlock;