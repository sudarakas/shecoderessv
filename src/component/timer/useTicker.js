import React, { useEffect, useState } from "react";
import { intervalToDuration, isBefore } from "date-fns";

export const useTicker = (futureDate) => {
  const [now, setNow] = useState(new Date());
  

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [futureDate]);
  const isTimesUp = isBefore(futureDate, now);
  if (isTimesUp) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isTimesUp: true };
  }

  const { days, hours, minutes, seconds } = intervalToDuration({
    start: now,
    end: futureDate,
  });

  return {days, hours, minutes, seconds, isTimesUp};
};
