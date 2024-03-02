import React,{useState} from 'react'
import './MyCalculator.css'
const MyCalculator = () => {
    const [value, changeValue] = useState('');



  return (
    <div className='body'>
        <div className='cardConatiner'>
            <form className='form_container'> 
                <div className='top'>
                    <div className='inputContainer'>
                        <input type='text' value={value}></input>
                    </div>
                </div>
                <div className='Bottom'>
                    <div className='bottons'>
                        
                            <input type='button' value='C' className='slate'  onClick={()=> changeValue('')}></input>
                            <input type='button' value='DC' className='slate' onClick={()=>changeValue(value.slice(0,-1))}></input>
                            <input type='button' value='%' className='slate' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='/' className='orange' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                        

                        
                            <input type='button' value='7' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='8' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='9' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='*' className='orange' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                        

                        
                            <input type='button' value='4' className='white' onClick={e => changeValue((value)=> value + e.target.value)} ></input>
                            <input type='button' value='5' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='6' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='+' className='orange' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                        

                        
                            <input type='button' value='1' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='2' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='3' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='-' className='orange' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                        

                        
                            <input type='button' value='0' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='.' className='white' onClick={e => changeValue((value)=> value + e.target.value)}></input>
                            <input type='button' value='=' className='orange' id='equal' onClick={() => changeValue(String(eval(value)))}></input>

                    </div>
                </div>

            </form>
        </div>
    </div>
  )
}

export default MyCalculator