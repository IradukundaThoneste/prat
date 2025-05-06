import React, { useState } from 'react'
import axios from "axios"
import './navigation.css'
import { useNavigate } from 'react-router-dom'

function Insert() {

    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleSubmit=(event)=>{                                                                                                                                 
event.preventDefault();
if(!name || !password){
    alert("Please fill field")
    return;
}
axios.post(`http://localhost:2000/insert`,{name,password})
.then((res)=>{
    alert("success")
    navigate('/select')
})
.catch((err)=>{
    console.log("fail")
})
    }

  return (
    <div className='container m-3 card'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-center text-success'>login</h1>
        name<input type="text value={name}" onChange={e=>setName(e.target.value)}  className=' form-control p-2'/>
        password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='  m-2 form-control' />
        <center><button type='submit' className='btn btn-info btn-center btn-end m-2'>Add  New User</button></center>
      </form>
    </div>
  )
}

export default Insert
