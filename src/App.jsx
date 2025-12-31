import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
function App() {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      <SearchBar />
      <Tabs />
      <ResultGrid />
      {/* <button className='bg-gray-700 px-4 py-2 m-5' onClick={async()=>{
    const data = await fetchPhotos('dog')
    console.log(data.results)
   }}>Get Photos</button>

     <button className='bg-gray-700 px-4 py-2 m-5' onClick={async()=>{
    const data = await fetchVideos('dog')
    console.log(data.videos)
   }}>Get Videos</button>

   <button className='bg-gray-700 px-4 py-2 m-5' onClick={async()=>{
    const data = await fetchGIF('dog')
    console.log(data.results)
   }}>Get GIF</button> */}
    </div>
  );
}

export default App;
