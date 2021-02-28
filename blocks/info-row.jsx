const InfoRow = ({ name, children }) => {
  return (
    <div className='info-row'>
      <div className='name'>{name}</div>
      <div className='data'>{children}</div>
      <style jsx>{`
        .info-row {
          display: flex;
          align-items: center;
          margin: 10px 0 10px 40px;
        }
        .name {
          font-size: var(--fsize-5);
          padding-right: 20px;
        }
        .data {
          font-size: var(--fsize-4);
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
}

export default InfoRow;