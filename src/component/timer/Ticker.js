import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTicker } from "./useTicker";
import "../../styles/timer/style.css";

export const Ticker = ({futureDate}) => {
  const { days, hours, minutes, seconds, isTimesUp } = useTicker(futureDate);
  return (
    <div className="timer">
      <div className="progress">
        <CircularProgressbar
          value={days}
          maxValue={6}
          text={days}
          styles={buildStyles({
            textSize: "28px",
            pathTransitionDuration: 0.5,
            pathColor: `#944D9A`,
            textColor: "#ffffff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <span className="body-text" >Days</span>
      </div>
      <div className="progress">
        <CircularProgressbar
          value={hours}
          maxValue={24}
          text={`${hours}`}
          styles={buildStyles({
            textSize: "28px",
            pathTransitionDuration: 0.5,
            pathColor: `#944D9A`,
            textColor: "#ffffff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <span className="body-text">Hours</span>
      </div>
      <div className="progress">
        <CircularProgressbar
          value={minutes}
          maxValue={60}
          text={minutes}
          styles={buildStyles({
            textSize: "28px",
            pathTransitionDuration: 0.5,
            pathColor: `#944D9A`,
            textColor: "#ffffff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <span className="body-text">Mintes</span>
      </div>
      <div className="progress">
        <CircularProgressbar
          value={seconds}
          maxValue={60}
          text={seconds}
          styles={buildStyles({
            textSize: "28px",
            pathTransitionDuration: 0.5,
            pathColor: `#EE488A`,
            textColor: "#ffffff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })} />
        <span className="body-text">Seconds</span>
      </div>
    </div>
  );
};
