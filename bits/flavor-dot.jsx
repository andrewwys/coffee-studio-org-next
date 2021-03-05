const FlavorDot = ({ color, filled }) => {
  let fillColor = filled ? color : 'transparent';
  return (
    <div className='circle' style={{
      backgroundColor: fillColor,
      border: `solid 3px ${color}`
    }}>
      <style jsx>{`
        .circle {
          width: 20px;
          height:20px;
          border-radius: 50%;
          border-width: 4px;
          margin: 2px;
        }
        @media screen and (max-width: 610px) {
          .circle {
            width: 15px;
            height:15px;
            border-radius: 50%;
            border-width: 3px;
            margin: 1px;
          }
        }
      `}</style>
    </div>

  );
}

export default FlavorDot;