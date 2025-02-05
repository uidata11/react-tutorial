import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    console.log(counting);
  }, [counting]);

  return (
    <div>
      <h1>{time}초</h1>
      <button onClick={counting}>{counting ? "stop" : "start"}</button>
    </div>
  );
};

export default Timer;
