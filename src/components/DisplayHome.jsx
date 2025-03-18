
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

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item) => (
            <Songitem
              key={item.id}  
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}  
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
