const InfoDetails = ({ title, content}) => {
  return (
    <div className='info-details'>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
      <style jsx>{`
        .info-details {
          margin-bottom: 40px;
        }
        .title {
          color: var(--grey-tag);
          font-size: var(--fsize-5);
          margin-bottom: 8px;
        }
        .content {
          font-size: var(--fsize-5);
          white-space: pre-wrap;
          padding-left: 32px;
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

export default InfoDetails;