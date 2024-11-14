import { useEffect, useState } from "react"
import "./Countdown.css";

const getTimeLeft = (targetDate) => {
    const now = new Date().getTime();
    const distance = (targetDate - now) / 1000;
    const days = Math.floor(distance / 60 / 60 / 24)
    const hours = Math.floor(distance / 60 / 60 % 24)
    const minutes = Math.floor(distance / 60 % 60)
    const seconds = Math.floor(distance % 60)

	return { days, hours, minutes, seconds };
};

export default function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

    useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(targetDate));
		}, 1000);

		return () => clearInterval(timer);		
	}, [targetDate]);
  
    return (
        <div className="countdown">
            <div className='content'>
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1].toString().padStart(2, '0');
					return (
						<div className='box' key={label}>
							<div className='value'>
								<span>{value}</span>
							</div>
							<span className='label'> {label} </span>
						</div>
					);
				})}
			</div>
        </div>
    )
}