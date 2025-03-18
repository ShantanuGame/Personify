import React, { useContext, useEffect } from "react";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, playerStatus, play, pause } = useContext(PlayerContext);

  useEffect(() => {
    if (playerStatus) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [track, playerStatus]);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  );
};

export default App;










/*import React, { useContext } from "react";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import Display from "./components/display";
import { PlayerContext } from "./context/PlayerContext";


const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  );
};

export default App;*/
