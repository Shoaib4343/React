import React from 'react'

const SubmitButton = ({submitChange}) => {
  return (
    <>
        <input type="submit" name="submit" value="Register Now" onClick={(e)=>submitChange(e)} className='form-control bg-success text-light ' />
    </>
  )
}

export default SubmitButton