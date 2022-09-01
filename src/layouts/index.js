import React, { useState } from "react";
import PipPlayer from "../components/pipplayer";
import { PipProvider } from "../context";

export default ({ children }) => {
  const [videoData, setVideoData] = useState({ id: null, start: 0 });
  return (
    <PipProvider value={{ videoData, setVideoData }}>
      {children}
      <PipPlayer pipData={videoData} />
    </PipProvider>
  );
};
