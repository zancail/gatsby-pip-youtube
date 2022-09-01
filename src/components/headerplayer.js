import React, { useContext, useEffect, useState } from "react";
import YTPlayer from "yt-player";
import { PipContext } from "../context";

const HeaderPlayer = ({ videoId }) => {
  const [statePlayer, setStatePlayer] = useState();
  const { setVideoData, videoData } = useContext(PipContext);
  const isBrowser =
    typeof window !== undefined && typeof window !== "undefined";

  useEffect(() => {
    if (document.getElementById(`originalPlayer${videoId}`)) {
      const originalPlayer = new YTPlayer(`#originalPlayer${videoId}`);

      if (videoData.id === videoId && videoData.fullScreen === true) {
        console.log("time to play");
        originalPlayer.load(videoId, true, videoData.start);
      } else {
        if (originalPlayer) {
          originalPlayer.load(videoId);
          originalPlayer.setVolume(100);
        }
        console.log(videoData);
      }

      setStatePlayer(originalPlayer);
    }
    return () => {
      if (statePlayer) {
        statePlayer.destroy();
      }
      setStatePlayer(undefined);
    };
  }, [videoData]);

  const handleOpenPip = () => {
    statePlayer.pause();
    const currentUrl = isBrowser ? window.location.pathname : "/";
    setVideoData({
      id: videoId,
      start: statePlayer.getCurrentTime(),
      url: currentUrl,
      fullScreen: false,
    });
  };

  return (
    <div className="mb-4">
      <div id={`originalPlayer${videoId}`}></div>
      <button type="button" onClick={handleOpenPip}>
        Open pip
      </button>
    </div>
  );
};

export default HeaderPlayer;
