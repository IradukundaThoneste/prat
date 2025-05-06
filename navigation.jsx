import React from 'react'
import  './navigation.css'
const Navigation = () => {
  return (
    <div >
      <nav>
        <ul>
            
            <li ><a href=""className='text-decoration-none' >home</a></li>
            <li><a href=""className='text-decoration-none'>users</a></li>
            <li><a href=""className='text-decoration-none'>import</a></li>
            <li><a href="" className='text-decoration-none'>report</a></li>
        </ul>
      </nav>
      <div className="tyext">
        
      </div>
      <div className="mm">
        <li><a href="" className='btn btn-danger '>    LOGOUT</a></li>
        <div className="nn">
        <li><a href="/insert" className='btn btn-success '>LOGIN</a></li>
        </div>
       
      </div>
    </div>
  )
}

export default Navigation
