import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="relative w-[23vw] h-80 bg-white rounded">
      <a href={item.url} target="_blank" className="h-full">
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
        className="flex justify-between gap-2 items-center w-full py-10 px-6 text-white absolute bottom-0"
        id="bottom"
      >
        <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
        <button className="bg-red-600 text-white rounded px-3 py-2 font-medium cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
