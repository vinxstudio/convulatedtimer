import React, { createContext, useState } from "react";

export const TimerContext = createContext();

// This context provider is passed to any component requiring the context
export const TimerProvider = ({ children }) => {
  const [firsttime, setFirstTime] = useState(0);
  const [secondtime, setSecondTime] = useState(0);
  const [thirdtime, setThirdTime] = useState(0);

  return (
    <TimerContext.Provider
      value={{
        firsttime,
        setFirstTime,
        secondtime,
        setSecondTime,
        thirdtime,
        setThirdTime
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
