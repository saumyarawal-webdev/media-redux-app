import React, { useState } from 'react'

function SearchBar() {
    const [text, setText]=useState('')
    const submitHandler =(e)=>{
        e.preventDefault()
        console.log(text);
    }
  return (
    <div>
        <form className='flex bg-gray-900 p-10 gap-5' onSubmit={(e)=>{
                submitHandler(e);
        }}>
            <input className='border-2 px-4 py-2 text-xl rounded outline-none w-full' type="text" placeholder='Search anything...' value={text} onChange={(e)=>{
                setText(e.target.value)
            }} required/>
            <button className='active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar