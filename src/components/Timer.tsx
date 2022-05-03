import { useTimer } from "react-timer-hook";
import "../styles/costum.css";

function MyTimer({ expiryTimestamp, autoStart }: any) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div className="timertitle">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <br />
      <p
        style={
          isRunning
            ? { color: "green", fontSize: "2rem" }
            : { color: "red", fontSize: "2rem" }
        }
      >
        {isRunning ? "Running" : "Not running"}
      </p>
      <br />
      <div className="flexbuttons5">
        <button onClick={start} className="stepbutton marginbut">
          Start
        </button>
        <button onClick={pause} className="stepbutton marginbut">
          Pause
        </button>
        <button onClick={resume} className="stepbutton marginbut">
          Resume
        </button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
            restart(time);
            pause();
          }}
          className="stepbutton"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default function Diet() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="ran">
      <h1 className="profiletitle">Timer for your training</h1>
      <br />
      <br />
      <MyTimer expiryTimestamp={time} autoStart={false} />
    </div>
  );
}
