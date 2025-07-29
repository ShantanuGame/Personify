
import React from "react";
import { albumsData, songsData } from "../assets/assets"; 
import Albumitem from "./Albumitem";
import Songitem from "./Songitem";
import Navbar from "./Navbar";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Our Albums</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item) => (
            <Albumitem
              key={item.id}  
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
<div className="mb-10 bg-zinc-900 p-6 rounded-2xl shadow-xl border border-aliceblue">
  <h1 className="text-2xl font-bold text-purple-400 mb-4">🎧 Upload Your Song</h1>

  <div className="grid md:grid-cols-3 gap-4">
    <input
      type="text"
      placeholder="Enter song title"
      className="p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <input
      type="text"
      placeholder="Enter description"
      className="p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <input
      type="file"
      accept=".mp3"
      className="p-3 rounded-xl bg-zinc-800 text-gray-300 border border-dashed border-purple-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700"
    />
  </div>

  <button
    className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-purple-500/50 transition duration-300"
  >
    ❤️ Upload & Add to List
  </button>
</div>

    </>
  );
};

export default DisplayHome;
