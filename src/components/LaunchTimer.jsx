import { useState, useEffect } from "react";

function LaunchTimer() {
  const launchTime = new Date("2023-12-22T00:00:00Z");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = launchTime - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (hours < 10) {
      hours = "0" + String(hours);
    }
    if (minutes < 10) {
      minutes = "0" + String(minutes);
    }
    if (seconds < 10) {
      seconds = "0" + String(seconds);
    }

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="flex items-center gap-4 mt-[0.89rem] md:mt-[4.81rem] font-UnicaOne">
      <p className="text-5xl">
        {timeLeft.hours}
        <span className="text-sm">H</span>{" "}
      </p>
      <p className="text-5xl">
        {timeLeft.minutes}
        <span className="text-sm">M</span>{" "}
      </p>
      <p className="text-5xl">
        {timeLeft.seconds}
        <span className="text-sm">S</span>{" "}
      </p>
    </div>
  );
}

export default LaunchTimer;
