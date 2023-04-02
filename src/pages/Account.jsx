import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const handleLogout = async (navigate) => {
  await signOut(auth)
  navigate('/')
}

function Account() {
  const navigate = useNavigate()
  return (
    <>
        <h1 className='text-3xl font-bold'>Account</h1>
      <button 
        type='button'
        onClick={() => handleLogout(navigate)}
      >
        Signout
      </button>
    </>
  )
}

export default Account