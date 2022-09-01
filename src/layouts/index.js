import React, { useState } from "react";
import PipPlayer from "../components/pipplayer";
import { PipProvider } from "../context";

export default ({ children }) => {
  const [pipUrl, setPip] = useState({ url: null, start: 0 });
  return (
    <PipProvider value={{ pipUrl, setPip }}>
      {children}
      <PipPlayer pipData={pipUrl} />
    </PipProvider>
  );
};
