const FlavorDot = ({ color, filled }) => {
  return (
    <div className='circle'>
      <style jsx>{`
        .circle {
          width: 20px;
          height:20px;
          border: 2px red;
          border-radius: 50%;
          background-color: red;
        }
      `}</style>
    </div>

  );
}

export default FlavorDot;