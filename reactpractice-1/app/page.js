"use client";
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {
  const [Images, setImages] = useState([])
  const getImages = async ()=>{
    console.log("Images");
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
    } catch (error) {
      console.error("Error Fetching Image")
    }
  }
  return (
    <>
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-600 text-white font-bold'>Get Images</button>
      <div className='p-10'>
        {Images.map((img)=>{
          return(
          <div key={img.id} className='inline-block'>
            <h1 className=''>{img.author}</h1>
            <img  width={300} height={300} className='my-10 mx-5 rounded ' src={img.download_url}/>
          </div>
        )})}
      </div>
    </div>
    </>
  )
}

export default page