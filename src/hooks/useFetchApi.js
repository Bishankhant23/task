import React, { useState } from 'react'

export default function useFetchApi() {
    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [isLoading,setIsloading] = useState(false)
    const fetchapi = (url,data = [],headers=[],method="get") => {
        setIsloading(true)
        if(method == "get"){
          fetch(url).
          then((d) => d.json()).
          then((data) => {
              setIsloading(false)
              setData(data)
          })
        }else{
          fetch(url,{
            method,
            body:JSON.stringify(data),
            headers:headers
          }).
          then((d) => d.json()).
          then((data) => {
              setIsloading(false)
              setData(data)
          })
        }
        
    }

  return {
    data,isLoading,error,fetchapi
  }
}
