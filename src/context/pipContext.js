import React from "react";
const defaultContext = {
  videoData: {
    id: null,
    start: 0,
  },
  setVideoData: (data) => {},
};
const PipContext = React.createContext(defaultContext);
export const PipProvider = PipContext.Provider;
export default PipContext;
