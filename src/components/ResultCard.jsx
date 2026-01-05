import React from "react";
import { useDispatch } from "react-redux";
import {addCollection} from "../redux/features/collectionSlice"
const ResultCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCollection = (item) =>{
    
    
    dispatch(addCollection(item))
  }
  return (
    <div className="relative w-[23vw] h-80 bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank" className="h-full !z-3">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        className="flex justify-between gap-3 items-center w-full py-5 px-4 text-white absolute bottom-0"
        id="bottom"
      >
        <h2 className="text-lg font-semibold capitalize h-20 overflow-hidden">
          {item.title}
        </h2>
        <button className="bg-red-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-95 " onClick={()=>{
          addToCollection(item)}}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
