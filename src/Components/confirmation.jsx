import React from 'react'
import './css.css'
function Confirmation({cancelDlt,confirmDlt}) {
    const cancel=()=>{
        cancelDlt(false)
    }
    const confirm=()=>{
        confirmDlt()
    }
  return (
    <div>
        <div className=''>
            <div className='bg-primary'>
            Are you sure? <br />
            <button onClick={cancel}>cancel</button>
            <button onClick={confirm}>confirm</button>
        </div>
        </div>
  
    </div>
  )
}
<style>

</style>
export default Confirmation

