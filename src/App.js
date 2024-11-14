import './App.css';
import Countdown from './components/countdown';
import picture1 from "./images/picture1.jpeg"

function App() {
  const targetDate = new Date('Jan 3, 2025').getTime();

  return (
    <div className="App">
      <div className="picture-container">
        <div className="img-hanger">
          <img src={picture1} alt="You and me together" />
        </div>
      </div>
      <h1>¡Cuenta regresiva para verte de otra vez!</h1>
      <Countdown targetDate={targetDate} />


      <div className="sticky-container">
        <div className="sticky-outer">
          <div className="sticky">
            <svg width="0" height="0">
              <defs>
                <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                    strokeLinejoin="round"
                    strokeLinecap="square"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="sticky-content">
              {/* <p>No sé tú, pero esta ansiedad por tenerte me está matando.</p> */}
              <p>Algún día, la distancia morirá de celos al vernos juntos.</p>
              <div className='signature'>tu Javi 😉</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
