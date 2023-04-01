import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h3>Error code: 404</h3>
        <h1 className='text-3xl font-bold'>Page not found</h1>
        <Link to="/" className='block mt-3'>Return Home</Link>
    </div>
  )
}

export default NotFound