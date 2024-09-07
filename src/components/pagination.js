import React, { useEffect, useState } from 'react'

function Pagination({setStart,setEnd,total=0,perPage,start}) {
  const [num,setNumber] = useState([])
  useEffect(() => {
    const number = Math.ceil(total/perPage)
    setNumber([...Array(number)])
  },[total])

  useEffect(() => {
    setEnd(start+perPage)
    console.log(start)
    
  },[start])
  return (
    <div>
        <div className='flex justify-center'>
            {
                num?.map((i,index) => {
                    return <button onClick={() => {setStart(index &&  (index+perPage-1))}} className='p-3 bg-slate-500 text-white'>{index+1}</button>
                })
            }
        </div>
        
    </div>
  )
}

export default Pagination
