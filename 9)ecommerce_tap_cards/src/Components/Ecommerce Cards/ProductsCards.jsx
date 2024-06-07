import React from 'react'

const ProductsCards = ({products}) => {
    
    let getProductData = products.map((val,index)=>{
        return(
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={val.image} alt="Product 1" className="w-full h-48 object-contain object-top" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{val.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-4">{val.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-700">{val.price}$ </span>
                <button className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700">Add to Cart</button>
              </div>
            </div>
          </div>
        )
    })
  return (
    <>

    {getProductData}
    </>
  )
}

export default ProductsCards