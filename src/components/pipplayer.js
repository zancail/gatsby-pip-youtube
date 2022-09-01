import React, { useContext, useEffect } from "react";
import YTPlayer from "yt-player";
import classNames from "classnames";
import { PipContext } from "../context";

import * as styles from "./pipplayer.module.scss";

const PipPlayer = ({ pipData }) => {
  const { setPip } = useContext(PipContext);
  let pipPlayer;
  useEffect(() => {
    if (pipData.url) {
      pipPlayer = new YTPlayer("#pipPlayer");
      pipPlayer.load(pipData.url, true, pipData.start);
    }
  }, [pipData]);

  const handleClose = () => {
    setPip({ url: null, start: 0 });
    pipPlayer.destroy();
  };

  return (
    <div className={classNames(styles.pip, { "d-block": pipData.url })}>
      <button type="button">Big</button>
      <button type="button" onClick={handleClose}>
        Close
      </button>
      <div className={classNames({ "ratio ratio-16x9": pipData.url })}>
        <div id="pipPlayer"></div>
      </div>
    </div>
  );
};

export default PipPlayer;
