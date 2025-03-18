import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playwithId, track, playerStatus } = useContext(PlayerContext);

  const isActive = track.id === id && playerStatus;

  return (
    <div 
      onClick={() => playwithId(id)} 
      className={`min-w-[189px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] ${isActive ? "bg-[#ffffff26]" : ""}`}
    >
      <img className={`rounded hover:scale-105 transition-transform duration-300 ${isActive ? "border-4 border-green-500" : ""}`} src={image} alt={name} />
      <p className={`font-bold mt-2 mb-1 ${isActive ? "text-green-500" : ""}`}>{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

const SongList = ({ album, songs }) => {
  const albumSongs = Array.isArray(songs)
    ? songs.filter(song => song.albumId === album.id)
    : [];

  return (
    <div className="flex flex-wrap gap-6">
      {albumSongs.length > 0 ? (
        albumSongs.map((song) => (
          <SongItem key={song.id} {...song} />
        ))
      ) : (
        <p className="text-white">No songs available in this album</p>
      )}
    </div>
  );
};

export default SongList;











/*




import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playwithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playwithId(id)} className="min-w-[189px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded hover:scale-105 transition-transform duration-300" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

const SongList = ({ album, songs }) => {
  // Filter songs to show only those belonging to the current album
  const albumSongs = Array.isArray(songs)
    ? songs.filter(song => song.albumId === album.id)
    : [];

  return (
    <div className="flex flex-wrap gap-6">
      {albumSongs.length > 0 ? (
        albumSongs.map((song) => (
          <SongItem key={song.id} {...song} />
        ))
      ) : (
        <p className="text-white">No songs available in this album</p>
      )}
    </div>
  );
};

export default SongList;

*/