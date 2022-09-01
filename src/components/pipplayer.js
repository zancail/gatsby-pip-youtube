import React, { useEffect, useState } from "react";
import YTPlayer from "yt-player";
import classNames from "classnames";

import * as styles from "./pipplayer.module.scss";

const PipPlayer = ({ url }) => {
  const [originalCurrentTime, setOriginalCurrentTime] = useState(0);
  let originalPlayer = null;
  useEffect(() => {
    if (document.getElementById("originalPlayer")) {
      originalPlayer = new YTPlayer("#originalPlayer");
      if (originalPlayer) {
        originalPlayer.load("uYR4ZMlLUwI");
        originalPlayer.setVolume(100);
        originalPlayer.on("paused", () => {
          setOriginalCurrentTime(originalPlayer.getCurrentTime());
        });
      }
    }
    return () => {
      // setOriginalPlayer(null);
    };
  }, []);

  const handleOnClick = () => {
    originalPlayer.pause();
    const pipPlayer = new YTPlayer("#pipPlayer");

    pipPlayer.load("uYR4ZMlLUwI", true, originalPlayer.getCurrentTime());
  };

  return (
    <div className="mb-4">
      <div id="originalPlayer"></div>
      <button type="button" onClick={handleOnClick}>
        Open pip
      </button>
      <div className={classNames(styles.pip, "ratio ratio-16x9")}>
        <div id="pipPlayer"></div>
      </div>
    </div>
  );
};

export default PipPlayer;
