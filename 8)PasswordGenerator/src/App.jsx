import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  let [upperCase, setUpperCase] = useState(false)
  let [lowecase, setLowecase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbols, setSymbols] = useState(false)
  let [passLength, setPassLength] = useState("")
  let [passInput, setPassInput] = useState("")

  let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LC = "abcdefghijklmnopqrstuvwxyz";
  let NM = "1234567890";
  let SYM = "~`!@#$%^&*()-=_+[]\{}|;:',.<>/?";

  function paswordGenerator(){
    let charBox = "";
    let finalPassword = ""
    if(upperCase || lowecase || number || symbols){
      if(upperCase) charBox += UC;
      if(lowecase) charBox += LC;
      if(number) charBox += NM;
      if(symbols) charBox += SYM;
      
      for(let i=0; i<passLength; i++){
        finalPassword += charBox.charAt(Math.floor(Math.random()*charBox.length))
      }
       setPassInput(finalPassword)
    }else{
      alert("click on checkbox ")
    }
  }

  let passRef = useRef(null);
  function copyPass(){
    passRef.current.select()
    navigator.clipboard.writeText(passInput)
    
  }
  /*
    let passRef = useRef(null);
    function copyPass(){
    passRef.current.select();
    passRef.current.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(passRef.current.value);
  }
 */

  function handleSubmit(event){
    event.preventDefault();
  }
  return (
    <div className='bg-[#6B8A7A] w-full h-screen flex justify-center items-center '>
      <div className='bg-[#254336] w-4/12  text-white p-6 rounded'>
        <h1 className='text-3xl text-center py-2'>Password Generator</h1>
        <form action="" onSubmit={handleSubmit}>

           <div className='flex items-center w-full border rounded'> 

            <input  className='basis-[80%] h-14 text-black pl-3 outline-none '
             type="text"  readOnly value={passInput} ref={passRef}

            />
            <button onClick={copyPass} className='basis-[20%] h-14  font-medium '>Copy</button>
           </div>

           <div className='flex justify-between items-center my-4'>
            <label htmlFor="PasswordLength">Password Length</label>

            <input className='outline-none w-20 h-10 text-black pl-2'
             type="number" name="" id="PasswordLength" min={10} max={20} value={passLength} onChange={(event)=>setPassLength(event.target.value)}
            />
           </div>

           <div className='flex justify-between items-center my-3'>
              <label htmlFor="UpperCase">Include Uppercase Latters</label>
              <input className='w-4 h-4'
              type="checkbox" name="" id="UpperCase"  checked={upperCase} onChange={()=>setUpperCase(!upperCase)}
              />
           </div>


           <div className='flex justify-between items-center my-3'>
              <label htmlFor="lowecase">Include Lowecase Latters</label>
              <input className='w-4 h-4'
              type="checkbox" name="" id="lowecase" checked={lowecase} onChange={()=>setLowecase(!lowecase)}
              />
           </div>


           <div className='flex justify-between items-center my-3'>
              <label htmlFor="numbers">Include Numbers</label>
              <input className='w-4 h-4'
              type="checkbox" name="" id="numbers"  checked={number} onChange={()=>setNumber(!number)}
              />
           </div>

           <div className='flex justify-between items-center my-3'>
              <label htmlFor="Symbols">Include Symbols</label>
              <input className='w-4 h-4'
              type="checkbox" name="" id="Symbols"  checked={symbols} onChange={()=>setSymbols(!symbols)}
              />
           </div>

        </form>
           <button onClick={paswordGenerator}
           className='w-full border my-4 py-4 font-medium text-xl shadow shadow-white'>Generate Password</button>
      </div>
    </div>
  )
}

export default App