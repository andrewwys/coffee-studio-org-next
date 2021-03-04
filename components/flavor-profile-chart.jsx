import FlavorScore from '../blocks/flavor-score'

const FlavorProfileChart = ({ floral, fruits, nuts, sugars, acidity, sweetness, mouthfeel, finish }) => {
  return (
    <div>
      <FlavorScore score={floral} color='blue'/>
    </div>
  );
}

export default FlavorProfileChart;