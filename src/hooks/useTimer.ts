import { useCallback, useEffect, useState } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const useTimer =(deadline: string, interval = SECOND) => {
  const calculateTimeRemaining = useCallback(() => new Date(deadline).getTime() - Date.now(), [deadline]);

  const [time, setTime] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        const updatedTime = prevTime - interval;

        return updatedTime > 0 ? updatedTime : 0;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  useEffect(() => {
    const initialTime = calculateTimeRemaining();

    setTime(initialTime > 0 ? initialTime : 0);
  }, [deadline, calculateTimeRemaining]);

  const calculateTimeUnits = (unit: number) => Math.floor((time / unit) % 60);

  return {
    days: Math.floor(time / DAY),
    hours: calculateTimeUnits(HOUR),
    minutes: calculateTimeUnits(MINUTE),
    seconds: calculateTimeUnits(SECOND),
  };
};

export default useTimer;
