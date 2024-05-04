import React, { useState } from 'react'
import { Tab } from './assets/Apis/Tab'

const App = () => {

  let [buttonActive, setButtonactive] = useState(0)
  let [contantActive,setContantActive] = useState(Tab[0])

  let btnClick =(index)=>{
    setButtonactive(index)
    setContantActive(Tab[index])
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Tabbing Buttons In React </h1>

      <div className='m-10'>
        <ul className='flex gap-4'>
         
          {
            Tab.map((value, index)=>{
              return(
                <li>
                  <button  onClick={()=>btnClick(index) }
                   className={`bg-gray-300 p-4 ${buttonActive == index ? 'bg-red-500 text-white' : null}`}>{value.title}</button>
                </li>
              )
            })
          }
          
        </ul>


          {
            (contantActive !== undefined)
            ? <p>{contantActive.description}</p>
            : null
          }
        
      </div>
    </div>
  )
}

export default App