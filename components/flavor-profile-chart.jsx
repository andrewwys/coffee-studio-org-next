import FlavorScore from '../blocks/flavor-score'
import { labels, display } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'

const FlavorProfileChart = ({ floral, fruits, nuts, sugars, acidity, sweetness, mouthfeel, finish }) => {
  const { details } = labels;
  const { pinkFloral, orangeFruits, brownNuts, brownSugars, yellowAcidity, redSweetness, greenMouthfeel, blueFinish } = display;
  const {lang} = useAppContext();
  return (
    <div className='chart'>
      <div className='row'>
        <div className='half1'>
          <div className='title' style={{color:pinkFloral}}>{details[lang].floral}</div>
          <FlavorScore score={floral} color={pinkFloral} inverted={true}/>
        </div>
        <div className='half2'>
          <FlavorScore score={acidity} color={yellowAcidity} inverted={false}/>
          <div className='title' style={{color:yellowAcidity}}>{details[lang].acidity}</div>
        </div>
      </div>

      <div className='row'>
        <div className='half1'>
          <div className='title' style={{color:orangeFruits}}>{details[lang].fruits}</div>
          <FlavorScore score={fruits} color={orangeFruits} inverted={true}/>
        </div>
        <div className='half2'>
          <FlavorScore score={sweetness} color={redSweetness} inverted={false}/>
          <div className='title' style={{color:redSweetness}}>{details[lang].sweetness}</div>
        </div>
      </div>

      <div className='row'>
        <div className='half1'>
          <div className='title' style={{color:brownNuts}}>{details[lang].nuts}</div>
          <FlavorScore score={nuts} color={brownNuts} inverted={true}/>
        </div>
        <div className='half2'>
          <FlavorScore score={mouthfeel} color={greenMouthfeel} inverted={false}/>
          <div className='title' style={{color:greenMouthfeel}}>{details[lang].mouthfeel}</div>
        </div>  
      </div>

      <div className='row'>
        <div className='half1'>
          <div className='title' style={{color:brownSugars}}>{details[lang].sugars}</div>
          <FlavorScore score={sugars} color={brownSugars} inverted={true}/>
        </div>
        <div className='half2'>
          <FlavorScore score={finish} color={blueFinish} inverted={false}/>
          <div className='title' style={{color:blueFinish}}>{details[lang].finish}</div>
        </div>
      </div>
      <style jsx>{`
        .chart {
          padding-right: 0%;
          font-size: var(--fsize-6);
        }
        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: center;
        }  
        .half1 {
          display: flex;
          justify-content: flex-start;
          margin-right: 5px;
        }
        .half2 {
          display: flex;
          justify-content: flex-start;
          margin-left: 5px;
        }
        .half1 .title {
          text-align: right;
          width: 80px;
        }
        .title {
          width: 120px;
          line-height: 25.6px;
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