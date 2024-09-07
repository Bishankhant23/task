import React, { useEffect } from 'react'
import Gallery from './components/gallery'
import useFetchApi from './hooks/useFetchApi'

function App() {
  const {isLoading,data:products,error,fetchapi} = useFetchApi()

  useEffect(() => {
    console.log(products)
  },[products])
  useEffect(() => {
    fetchapi("https://fakestoreapi.com/products")
  },[])

  return (
    <div>
      {
        isLoading ?  "loading............" : <Gallery data={products} isloading={isLoading}/>
      }
      
    </div>
  )
}

export default App
