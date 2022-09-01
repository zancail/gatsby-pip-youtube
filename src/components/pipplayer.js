import React, { useContext, useEffect, useState } from "react";
import YTPlayer from "yt-player";
import classNames from "classnames";
import { PipContext } from "../context";
import { navigate } from "@reach/router";

import * as styles from "./pipplayer.module.scss";

const PipPlayer = ({ pipData }) => {
  const { setVideoData, videoData } = useContext(PipContext);
  const [statePlayer, setStatePlayer] = useState();
  let pipPlayer;
  useEffect(() => {
    if (statePlayer) {
      statePlayer.destroy();
    }
    if (pipData.id && pipData.fullScreen === false) {
      pipPlayer = new YTPlayer("#pipPlayer");
      pipPlayer.load(pipData.id, true, pipData.start);
      setStatePlayer(pipPlayer);
    }
  }, [pipData]);

  const handleClose = () => {
    setVideoData({ id: null });
    statePlayer.destroy();
  };

  const handleBigClick = () => {
    setVideoData({
      ...videoData,
      ...{ fullScreen: true, start: statePlayer.getCurrentTime() },
    });
    statePlayer.destroy();
    // navigate(pipData.url);
  };

  return (
    <div
      className={classNames(styles.pip, {
        "d-block": pipData.id && pipData.fullScreen === false,
      })}
    >
      <button type="button" onClick={handleBigClick} className="btn btn-light">
        Big
      </button>
      <button type="button" onClick={handleClose} className="btn btn-light">
        Close
      </button>
      <div className={classNames({ "ratio ratio-16x9": pipData.id })}>
        <div id="pipPlayer"></div>
      </div>
    </div>
  );
};

export default PipPlayer;
