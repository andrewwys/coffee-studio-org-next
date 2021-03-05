import FlavorDot from '../bits/flavor-dot'

const FlavorScore = ({ color, score, inverted}) => {
  const dots = [];
  for (let i=0; i<5; i++) {
    if ( score > i ) 
      dots.push(<FlavorDot color={color} filled={true}/>)
    else dots.push(<FlavorDot color={color} filled={false} />)
  }
  return (
    <div className='scores'>
      {dots}
      <style jsx>{`
        .scores{
          display: flex;
          flex-direction: ${inverted ? 'row-reverse' : 'row'};
          flex-wrap: nowrap;
          margin: 0 10px;
        }  
      `}</style>
    </div>
  );
}
export default FlavorScore;