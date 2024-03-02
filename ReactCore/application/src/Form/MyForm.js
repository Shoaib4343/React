import React from "react";

const MyForm = ({label=" ", placeholder=" ", ty="text",propValue="",changeValue, name}) =>{
  return (
    <>
      <label htmlFor={name} className="form-label">{label}</label>
      <input type={ty} name={name} id={name} placeholder={placeholder} value={propValue} onChange={changeValue}  className="form-control"/>
    </>
  )
}

export default MyForm
