import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="flex justify-between item-center py-5 px-10 bg-blue-900 ">
        <Link to='/' className="text-2xl font-semibold">Media Search</Link>
        <div className="flex gap-5 item-center">
          <Link to="/" className="cursor-pointer text-xl">
            Search
          </Link>
          <Link to="/collection" className="cursor-pointer text-xl">
            Collection
          </Link>
        </div>
      </div>
  )
}

export default Navbar
