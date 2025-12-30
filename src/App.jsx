import React from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'

function App() {
  return (
   <div className='h-screen w-full bg-gray-950 text-white'>
   <button className='bg-gray-700 px-4 py-2 m-5' onClick={async()=>{
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
   }}>Get GIF</button>
   </div>
  )
}

export default App