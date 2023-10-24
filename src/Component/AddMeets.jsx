import React from 'react'
import { useState, useRef } from 'react';


function AddMeets({newMeet}) {
    const titleInputRef=useRef()
    const imageInputRef=useRef()
    const addressInputRef=useRef()
    const descriptionInputRef=useRef()
    const handleSubmit = (event) => {
        event.preventDefault();    
            const enteredTitle=titleInputRef.current.value
            const enteredaddress=addressInputRef.current.value
            const enteredimage=imageInputRef.current.value
            const entereddescription=descriptionInputRef.current.value
            const meetUpdate={
                title:enteredTitle,
                Image:enteredimage,
                address:enteredaddress,
                description:entereddescription
             }
             newMeet(meetUpdate)


      }  

  return (
    <div className="container bg-secondary rounded border border-dark" style={{height:'700px', width:'500px',  border: '2px black'}}>
        <h1>Add New Meetup</h1>
        <form onSubmit={handleSubmit}>
        <div className='mt-5'>
            <p>Meetup Title</p>
            <input className='mt-0 border rounded' required style={{width:'75%',height:'40px'}} ref={titleInputRef} type="text" />
            <br /><br />

            <p>Meetup Image</p>
            <input className='mt-0 border  rounded' required style={{width:'75%',height:'40px'}} ref={imageInputRef} type="text" />
            <br /><br />

            <p>Address</p>
            <input className='mt-0 border  rounded' required style={{width:'75%',height:'40px'}} ref={addressInputRef} type="text" />
            <br /><br />

            <p>Description</p>
            <textarea className='mt-0 border  rounded' name="" id="" cols="40" rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <button type='submit' className='btn btn-outline-dark mt-3'>Submit</button>
        </form>
      


    </div>
    
  )
}

export default AddMeets