import React, { useContext, useEffect, useState } from "react";
import YTPlayer from "yt-player";
import { PipContext } from "../context";

const HeaderPlayer = ({ url }) => {
  const [statePlayer, setStatePlayer] = useState();
  const { setPip } = useContext(PipContext);
  useEffect(() => {
    if (document.getElementById("originalPlayer")) {
      const originalPlayer = new YTPlayer("#originalPlayer");

      if (originalPlayer) {
        originalPlayer.load("uYR4ZMlLUwI");
        originalPlayer.setVolume(100);
      }
      setStatePlayer(originalPlayer);
    }
    return () => {
      statePlayer.destroy();
      setStatePlayer(undefined);
    };
  }, []);

  const handleOpenPip = () => {
    statePlayer.pause();
    setPip({ url: "uYR4ZMlLUwI", start: statePlayer.getCurrentTime() });
  };

  return (
    <div className="mb-4">
      <div id="originalPlayer"></div>
      <button type="button" onClick={handleOpenPip}>
        Open pip
      </button>
    </div>
  );
};

export default HeaderPlayer;
