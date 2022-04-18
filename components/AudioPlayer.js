import React, { useState, useRef } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { TiMediaPlayOutline } from "react-icons/ti";
import { TiMediaPauseOutline } from "react-icons/ti";

const AudioPlayer = () => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);

  // references
  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);


    if (!prevValue) {
      audioPlayer.current.play(); // from html DOM reference
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div className={styles.audioPlayer}>
      <audio
        ref={audioPlayer}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="metadata"
      ></audio>
      <button className={styles.forwardBackward}>
        <TiArrowLeftOutline />
      </button>
      <button className={styles.playPause} onClick={togglePlayPause}>
        {isPlaying ? (
          <TiMediaPauseOutline />
        ) : (
          <TiMediaPlayOutline className={styles.play} />
        )}
      </button>
      <button className={styles.forwardBackward}>
        <TiArrowRightOutline />
      </button>
      {/* current time */}
      <div className={styles.currentTime}>0:00</div>
      {/* progress bar */}
      <div className={styles.progBar}>
        <input type="range" className={styles.progressBar} />
      </div>

      {/* duration */}
      <div className={styles.duration}>1:49</div>
    </div>
  );
};

export { AudioPlayer };
