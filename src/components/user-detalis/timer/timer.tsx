import React, { useEffect, useState, FC } from "react";

interface TimerProps {
  timerOut: number;
  setTimerOut: React.Dispatch<React.SetStateAction<number>>;
  selectedUserData: number;
}

const Timer: FC<TimerProps> = ({ timerOut, setTimerOut, selectedUserData }) => {
  const [timer, setTimer] = useState(timerOut);

  useEffect(() => {
    setTimerOut(timerOut);
  }, [timerOut]);

  useEffect(() => {
    setTimer(timer);
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => setTimerOut((prev) => prev - 1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [selectedUserData]);
  return <div>Will be hide after: {timerOut} seconds</div>;
};

export default Timer;
