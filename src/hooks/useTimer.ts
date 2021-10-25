import { useEffect, useState } from "react";

export function useTimer(seconds: number, intervalID: number | string): number {
  const [timer, setTimer] = useState(seconds);

  useEffect(() => {
    setTimer(seconds);
  }, [seconds]);

  useEffect(() => {
    setTimer(timer);
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [intervalID]);
  return timer;
}
