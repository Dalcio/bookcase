import React, { useEffect, useState } from "react";

import { ClockWrapper } from "./styles";
import { HandProps, TimeProps } from "./types";

const getTime = () => {
  const currentTime = new Date();
  let hour = currentTime.getHours();

  return { hour, min: currentTime.getMinutes(), sec: currentTime.getSeconds() };
};

const Hand: React.FC<HandProps> = ({ id, angle, length }) => {
  return (
    <line
      id={`${id}-hand`}
      x1="54"
      y1="54"
      x2="54"
      y2={length}
      transform={`rotate(${angle}, 54, 54)`}
    />
  );
};

const Hands: React.FC = () => {
  const [{ min, hour, sec }, setTime] = useState<TimeProps>(getTime);

  let hourAngle = hour * 30;
  let minAngle = min * 6;
  let secAngle = sec * 6;

  useEffect(() => {
    const updateTime = () => {
      setTime({ ...getTime() });
    };

    setInterval(updateTime, 1000);
  }, []);

  return (
    <g id="hands">
      <Hand id="hour" length={25} angle={hourAngle} />
      <Hand id="min" length={20} angle={minAngle} />
      <Hand id="sec" length={15} angle={secAngle} />
    </g>
  );
};

const Clock: React.FC = () => {
  return (
    <ClockWrapper viewBox="0 0 114 114" width="114" height="114">
      <Hands />
    </ClockWrapper>
  );
};

export default Clock;
