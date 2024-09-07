import React, { useEffect, useState } from 'react'
import ImageModel from './imageModel'
import Pagination from './pagination'

function Gallery({data=[]}) {
    const [images,setImages] = useState([])
    const [filterdImage,setFilteredImage] = useState([])
    const [imageName,setImageName] = useState("")
    const [openImageModel,setOpenImageModel] = useState(false)
    const [imageModelSrc,SetImageModelSrc] = useState("")
    const [imageModelName,SetImageModelName] = useState("")
    const [imageModelDiscription,SetImageModelDiscription] = useState()
    
    const [noImage,setNoImage] = useState(false)
    
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(6)

    const [total,setTotal] = useState()

    useEffect(() => {
        setImages(data)
        setFilteredImage(data)
        setTotal(data?.length)
    },[data])

    useEffect(() => {
        const tempVar = images.filter((item) => item?.title.toLowerCase().includes(imageName)) 
        setFilteredImage(tempVar)
        setTotal(filterdImage.length)
    },[imageName])

    useEffect(() => {
        setTotal(filterdImage.length)

    },[filterdImage])

    const openImageModelFun = (image,name,desc) => {
        SetImageModelSrc(image)
        SetImageModelName(name)
        setOpenImageModel(true)
        SetImageModelDiscription(desc)
    }

  return (
    <>
        <div className='w-full text-center'>
            <input type='text' value={imageName} className='mb-11 mt-9 h-[40px] outline-none  mx-auto border-black border-1 border-solid' onChange={(e) => setImageName(e.target.value)} placeholder='search image' />
        </div>
        <div className='grid grid-col-2 md:grid-cols-3 w-[90%] m-auto'>
        {
             noImage && "no imges found with this key word"
        }
        {
            filterdImage?.slice(start,end).map((product) => {
                return <div className='flex flex-col items-center justify-between py-6 gap-5'>
                        <img className='text-center w-28 cursor-pointer' onClick={() => openImageModelFun(product.image,product.title,product.description)} src={product.image} loading='lazy'/>
                        <div>{product.title?.length > 30 ? `${product.title.slice(0,30)}...` : product.title}</div>
                    </div>
            })
        }
        {
            openImageModel && 
            <div>
                <ImageModel description={imageModelDiscription} image={imageModelSrc} name={imageModelName} close={setOpenImageModel}/> 
            </div>
        }
        
    </div>
    <Pagination total={total} start={start} perPage={6} setStart={setStart} setEnd={setEnd}/>
    
    </>
    
  )
}

export default Gallery
