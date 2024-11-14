import { React } from "react";
// import { Link } from 'react-router-dom';
import Countdown from './Countdown';
import picture1 from '../images/picture1.jpeg';
function Home() {
    const targetDate = new Date('Jan 3, 2025').getTime();

    return (
        <div className="App">
            <div className="picture-container">
                <div className="img-hanger">
                    <img src={picture1} alt="You and me together"/>
                </div>
            </div>
            <h1>Countdown to see you again!</h1>
            <Countdown targetDate={targetDate} />
        </div>
    );
}
export default Home;