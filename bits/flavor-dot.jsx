const FlavorDot = ({ color, filled }) => {
  let fillColor = filled ? color : 'transparent';
  return (
    <div className='circle' style={{
      backgroundColor: fillColor,
      border: `solid 2px ${color}`
    }}>
      <style jsx>{`
        .circle {
          width: 20px;
          height:20px;
          border-radius: 50%;
          margin: 2px 4px;
        }
        @media screen and (max-width: 610px) {
          .circle {
            width: 15px;
            height:15px;
            border-radius: 50%;
            border-width: 1px;
            margin: 1px;
          }
        }
      `}</style>
    </div>

  );
}

export default FlavorDot;