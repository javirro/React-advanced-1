import  { useState, useEffect } from "react";

export const useCountDown = (initialTime, endingTime = 0, step = 1) => {
  const [timing, setTiming] = useState(initialTime)
  useEffect(() => {
    const t = setInterval(() => {
      setTiming(s => {
        if(s <= (endingTime + 1)) clearInterval(t)
        return s-step
      })
    }, 1000)
    return () => { clearInterval(t)}
  }, [endingTime, step]);

  return timing
}