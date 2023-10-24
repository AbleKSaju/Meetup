import React from 'react'
import AddMeets from '../Component/AddMeets'
import { useNavigate } from 'react-router-dom';
function AddMeetup() {
  const navigate=useNavigate()
  const newMeet=(newestMeet)=>{
    fetch('https://meets-2cea8-default-rtdb.firebaseio.com/Meets.json',{
      method:'POST',
      body: JSON.stringify(newestMeet),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(()=>{
      navigate('/')
    })

  }
  return (
    <AddMeets newMeet={newMeet}/>
  )
}

export default AddMeetup