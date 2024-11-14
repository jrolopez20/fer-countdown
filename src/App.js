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
      <h1>Countdown to see you again!</h1>
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
              <p>Never lose your faith in me.</p>
              <div className='signature'>Javier 😉</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
