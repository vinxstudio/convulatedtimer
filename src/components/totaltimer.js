import React, { useContext } from "react";
import moment from "moment";
import { TimerContext } from "../TimerContext";

export default () => {
  const TotalTimer = useContext(TimerContext);
  let totaltime =
    TotalTimer.firsttime + TotalTimer.secondtime + TotalTimer.thirdtime;
  return (
    <div>
      {moment()
        .startOf("day")
        .milliseconds(totaltime)
        .format("mm:ss.SSS")}{" "}
    </div>
  );
};
