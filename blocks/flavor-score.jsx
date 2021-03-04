import FlavorDot from '../bits/flavor-dot'

const FlavorScore = ({ color, score}) => {
  return (
    <div>
      <FlavorDot color={color}/>
    </div>
  );
}
export default FlavorScore;