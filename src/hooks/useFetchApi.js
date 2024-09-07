import React, { useState } from 'react'

export default function useFetchApi() {
    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [isLoading,setIsloading] = useState(false)
    const fetchapi = (url,data = [],headers=[],methods="get") => {
        setIsloading(true)
        fetch(url).
            then((d) => d.json()).
            then((data) => {
                setIsloading(false)
                setData(data)
            })
    }

  return {
    data,isLoading,error,fetchapi
  }
}
