const InfoRowSingleLine = ({ title, content}) => {
  return (
    <div className='info-row'>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
      <style jsx>{`
        .info-row {
          margin-bottom: 20px;
          display: flex;
          flex-wrap: nowrap;
        }
        .title {
          color: var(--grey-tag);
          font-size: var(--fsize-5);
          margin-bottom: 8px;
        }
        .content {
          font-size: var(--fsize-5);
          padding-left: 16px;
        }
        @media screen and (max-width: 470px) {
            .title {
              font-size: var(--fsize-6);
            }
            .content {
              font-size: var(--fsize-6);
            }
          }
        }
      `}</style>
    </div>
  );
}

export default InfoRowSingleLine;