import React, { useEffect, useRef } from 'react'

function ImageModel({image,name,description,close}) {
    const modelRef = useRef()
    const afterBlur = () => {
        close(false)
    }
    useEffect(() => {
    modelRef.current && modelRef.current.focus()
        modelRef.current &&  modelRef.current.addEventListener("blur",afterBlur)
        return () => {
            modelRef.current &&  modelRef.current.removeEventListener("blur",afterBlur)
        }
    },[])
    
  return (
    <div tabIndex={0} ref={modelRef} className='absolute w-[60%] h-[500px] m-auto  top-0 left-0 bottom-0 right-0 bg-slate-700 pb-8 overflow-y-auto rounded-md '>
      <div className='text-white text-right px-5 text-2xl cursor-pointer' onClick={() => close(false)}>&times;</div>
      <div>
        <img className='w-44 m-auto' src={image}/>
        <div className='text-center text-xl text-white my-10 px-10'>{name}</div>
        <div className='text-center text-xl text-white my-10 px-10'>{description}</div>
      </div>
    </div>
  )
}

export default ImageModel
