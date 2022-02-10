import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import CakeIcon from '@mui/icons-material/Cake';
import './App.css';
export default function App() {
  return (
    <div className="App">
      <div className="top">
        <div style={{ fontWeight: "700" }}>ROI Calculator</div>
        <div className="top-right">
          <div>X</div>
          <div className="toggle">
            <CakeIcon style={{color:'green',fontSize: 20}}/>CAKE<ToggleOnIcon style={{color:'yellow',fontSize: 50,marginBottom:'-10%'}}/> USD
          </div>
        </div>
      </div>
      <div className="input1-container">
        <input className="input" value="0.000 USD" type="text" />
        <div>~CAKE 0.000</div>
      </div>

      <div className="buttons">
        <button> $1000 </button>
        <button>$100</button>
      </div>

      <div className="timeframe">
        <div style={{ fontWeight: "700" }}>Timeframe</div>
        <div className="buttons-timeframe-apy">
          <button>1 Day</button>
          <button>7 Days</button>
          <button>30 Days</button>
          <button>1 Year</button>
          <button>1 Year</button>
        </div>
      </div>

      <div className="timeframe">
        <div  style={{ fontWeight: "700" }}>Enable Accelerated APY </div>
        <div><ToggleOnIcon style={{color:'yellow',fontSize: 60,marginLeft:'95%',marginTop:'-2%'}}/></div>
        <div className="select-tier">Select Tier</div>
        <div className="buttons-timeframe-apy">
          <button>Tier 1</button>
          <button>Tier 2</button>
          <button>Tier 3</button>
          <button>Tier 4</button>
          <button>Tier 5</button>
        </div>
      </div>
      <div className="input2-container">
        <div>ROI at Current Rates</div>
        <input className="input" value="0.000 USD" type="text" />
        <div>~0.000 CAKE + 0.000000 DON</div>
      </div>

      <div style={{fontWeight:'700'}}>Hide Details<ExpandLessIcon style={{marginBottom:'-5%'}} /></div>

      <div className="bottom">
        <div className="bottom-top">
          <div style={{fontWeight:'700'}}>APY</div>
          <div style={{ color: "yellow", fontWeight: "600" }}>9.0%</div>
        </div>
        <div className="points">
          <ul type="disc">
            <li>Calculated based on current rates</li>
            <li>All figures are estimates provided for your convenience only,and by no means represent guranteed returns.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}