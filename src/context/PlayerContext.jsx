














































import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();  

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekbar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayerStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayerStatus(false);
  };

  const playwithId = (id) => {
    const selectedSong = songsData.find((song) => song.id === id);
    setTrack(selectedSong);
    audioRef.current.play();
    setPlayerStatus(true);
  };

  const previous = () => {
    if (track.id > 0) {
      const prevSong = songsData[track.id - 1];
      setTrack(prevSong);
      audioRef.current.play();
      setPlayerStatus(true);
    }
  };

  const next = () => {
    if (track.id < songsData.length - 1) {
      const nextSong = songsData[track.id + 1];
      setTrack(nextSong);
      audioRef.current.play();
      setPlayerStatus(true);
    }
  };

  const seeksong = (e) => {
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekbg.current.offsetWidth) * audioRef.current.duration;
  };

  // Continuous playback logic: play next song when current song ends
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audio.duration % 60),
          minute: Math.floor(audio.duration / 60),
        },
      });
    };

    const handleSongEnd = () => {
      next(); // Play the next song when current song ends
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("ended", handleSongEnd);  // Adding event listener for song end
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("ended", handleSongEnd);
      }
    };
  }, [audioRef, track]);  // Adding track as a dependency to ensure correct updates

  const contextValue = {
    audioRef,
    seekbar,
    seekbg,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    playwithId,
    previous,
    next,
    seeksong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
















/* 

import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();  

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekbar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayerStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayerStatus(false);
  };

  const playwithId = (id) => {
    const selectedSong = songsData.find((song) => song.id === id);
    setTrack(selectedSong);
    audioRef.current.play();
    setPlayerStatus(true);
  };

  const previous = () => {
    if (track.id > 0) {
      const prevSong = songsData[track.id - 1];
      setTrack(prevSong);
      audioRef.current.play();
      setPlayerStatus(true);
    }
  };

  const next = () => {
    if (track.id < songsData.length - 1) {
      const nextSong = songsData[track.id + 1];
      setTrack(nextSong);
      audioRef.current.play();
      setPlayerStatus(true);
    }
  };

  const seeksong = (e) => {
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekbg.current.offsetWidth) * audioRef.current.duration;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audio.duration % 60),
          minute: Math.floor(audio.duration / 60),
        },
      });
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
      }
    };
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekbar,
    seekbg,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    playwithId,
    previous,
    next,
    seeksong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
*/