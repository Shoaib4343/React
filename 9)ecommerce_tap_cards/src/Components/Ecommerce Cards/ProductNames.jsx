import React from 'react'

const ProductNames = ({productsNames, setCategory}) => {
    let getProductNamesList = productsNames.map((val,index)=>{
        return(
            
                <li onClick={()=>setCategory(val)} key={index} className="p-2 bg-gray-300 font-bold cursor-pointer capitalize">{val}</li>
            
        )
    })
  return (
    <div className="w-1/5 bg-gray-200 border-r border-gray-300 overflow-y-auto">
    <ul className="p-4 space-y-4" >
    <h1 className='font-bold text-2xl capitalize'>All Categories</h1>
      {getProductNamesList}
    </ul>
        
      </div>
  )
}

export default ProductNames