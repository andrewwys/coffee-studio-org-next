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
            font-size: var(--fsize-4);
            margin-bottom: 24px;
          }
          .content {
            font-size: var(--fsize-5);
          }
          @media screen and (max-width: 470px) {
            .title {
              font-size: var(--fsize-5);
              margin-bottom: 24px;
            }
            .content {
              font-size: var(--fsize-6);
            }
          }
        `}
      </style>
    </div>
  );
}

export default InfoBlock;