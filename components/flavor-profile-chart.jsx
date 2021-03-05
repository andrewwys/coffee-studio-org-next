import FlavorScore from '../blocks/flavor-score'
import { labels } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

const FlavorProfileChart = ({ floral, fruits, nuts, sugars, acidity, sweetness, mouthfeel, finish }) => {
  const { details } = labels;
  const {lang} = useAppContext();
  return (
    <div className='chart'>
      <div className='row'>
        <div className='half1'>
          <div className='title'>{details[lang].floral}</div>
          <FlavorScore score={floral} color='blue' inverted={true}/>
        </div>
        <div className='half2'>
          <FlavorScore score={acidity} color='green' inverted={false}/>
          <div className='title'>{details[lang].acidity}</div>
        </div>
      </div>

      <div className='row'>
        <div className='half1'>
          <div className='title'>{details[lang].fruits}</div>
          <FlavorScore score={fruits} color='pink' inverted={true}/>
        </div>
        <div className='half2'>
          <FlavorScore score={sweetness} color='grey' inverted={false}/>
          <div className='title'>{details[lang].sweetness}</div>
        </div>
      </div>

      <div className='row'>
        <div className='half1'>
          <div className='title'>{details[lang].nuts}</div>
          <FlavorScore score={nuts} color='red' inverted={true}/>
        </div>
        <div className='half2'>
          <FlavorScore score={mouthfeel} color='yellow' inverted={false}/>
          <div className='title'>{details[lang].mouthfeel}</div>
        </div>  
      </div>

      <div className='row'>
        <div className='half1'>
          <div className='title'>{details[lang].sugars}</div>
          <FlavorScore score={sugars} color='black' inverted={true}/>
        </div>
        <div className='half2'>
          <FlavorScore score={finish} color='purple' inverted={false}/>
          <div className='title'>{details[lang].finish}</div>
        </div>
      </div>
      <style jsx>{`
        .row{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
        }  
        .half1 {
          display: flex;
          justify-content: flex-end;
          width: 50%;
          margin-right: 5px;
        }
        .half2 {
          display: flex;
          justify-content: flex-start;
          width: 50%;
          margin-left: 5px;
        }
        @media screen and (max-width: 610px) {
          .row {
            font-size: var(--fsize-6)
          }
        }
      `}</style>
    </div>
  );
}

export default FlavorProfileChart;