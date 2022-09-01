import React from "react";
const defaultContext = {
  pipUrl: {
    url: null,
    start: 0,
  },
  setPip: (url) => {},
};
const PipContext = React.createContext(defaultContext);
export const PipProvider = PipContext.Provider;
export default PipContext;
