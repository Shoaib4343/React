import React,{useState} from 'react'
import './CalculatorTwo.css'
const CalculatorTwo = () => {

    const [value, changevalue] = useState("");
  return (
    <div className='body'>
        <div className='card_pr'>
            <div className='card' id='card'>
            <div className='top'>
                <form>
                    <input type='text' id='input' value={value}></input>
                </form>
            </div>

            <div className='bottom'>
            <form>
                <div className='button-container'>
                    <input type='button' value="AC" className='slate'onClick={() => changevalue('')}></input>
                    <input type='button' value="DE" className='slate'onClick={()=> changevalue(value.slice(0,-1))}></input>
                    <input type='button' value="%" className='slate'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="/" className='yellow'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                </div>
                <div className='button-container'>
                    <input type='button' value="7" className='btn-color' onClick={e => changevalue(pre => pre + e.target.value)} ></input>
                    <input type='button' value="8" className='btn-color'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="9" className='btn-color'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="*" className='yellow'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                </div>
                <div className='button-container'>
                    <input type='button' value="4" className='btn-color'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="5" className='btn-color'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="6" className='btn-color'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="-" className='yellow'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                </div>
                <div className='button-container'>
                    <input type='button' value="1" className='btn-color'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="2" className='btn-color'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="3" className='btn-color'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="+" className='yellow'onClick={e => changevalue(pre => pre + e.target.value)}></input>
                </div>
                <div className='button-container'>
                    <input type='button' value="0" className='btn-color' onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="." className='btn-color' onClick={e => changevalue(pre => pre + e.target.value)}></input>
                    <input type='button' value="=" className='yellow' id='equal' onClick={e => changevalue(eval(value))}></input>
                </div>
            </form>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default CalculatorTwo