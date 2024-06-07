import React, { useEffect, useState } from 'react';
import ProductNames from './Components/Ecommerce Cards/ProductNames';
import ProductsCards from './Components/Ecommerce Cards/ProductsCards';
import axios from 'axios';

const App = () => {
  let [productsNames, setProductsNames] = useState([])
  let [products, setProducts] = useState([])
  let [category, setCategory] = useState('')


  let getProductNames= ()=>{
    axios.get("https://fakestoreapi.com/products/categories")
    .then((res)=> res.data)
    .then((finalData)=>{
      setProductsNames(finalData)
    })
  }
  let getProduct = ()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>res.data)
    .then((finalData)=>{
      setProducts(finalData)
    })
  }

  useEffect(()=>{
    getProductNames()
    getProduct()
  },[]);
  // Fetch products by category when category changes
  
    
     
  useEffect(() => {
    if(category){

      axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.data)
      .then((finalData) => {
        setProducts(finalData);
        })
        .catch((error) => {
          console.error(`Error fetching products for category ${category}:`, error);
          });
  
    }
   
  }, [category]);





  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <ProductNames productsNames={productsNames} setCategory={setCategory} />

      {/* Main Content */}
      <div className="w-4/5 p-8">
      <h1 className='font-bold text-5xl text-center pb-10 capitalize'>
        {
          category ? category : "All Products"
        }
      </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductsCards products={products} />
          
         
          
        </div>
      </div>
    </div>
  );
};

export default App;
