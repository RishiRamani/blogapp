"use client";
import React, { useState } from 'react'
import { useAppContext } from '@/context/context';
const Editor = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [img, setimg] = useState("")
  const [blogcontent, setblogcontent] = useState("")
  const {blogs,setblogs} = useAppContext();
  const [editindex, seteditindex] = useState(null);
  const submitHandler = (e)=>{
    e.preventDefault();
    if(!title){
      alert("Empty Blog")
      return;
    }
    if(!img){
      alert("Empty Img Not Allowed")
      return;
    }
    if(editindex!=null){
      const updatedBlogs = blogs.map((blog, index) =>
        index === editindex ? { title, desc, img ,blogcontent } : blog
      );
      setblogs(updatedBlogs);
      seteditindex(null);
    }
    
    else{
    setblogs([...blogs,{title,desc,img,blogcontent}]);
  }
    settitle("")
    setdesc("")
    setimg("")
    setblogcontent("")
  }
  const edit = (index)=>{
    seteditindex(index);
    settitle(blogs[index].title);
    setdesc(blogs[index].desc);
    setimg(blogs[index].img);
    setblogcontent(blogs[index].blogcontent)
  }
  const deleteblog = (index)=>{
    setblogs((blogs)=>blogs.filter((_,i)=>i!==index));
  }
  return (
    <>
    <div>
      <div className='text-center text-2xl font-bold mt-10 mb-5'>Blog Editor</div>
      <div className='px-[5%] mt-10 flex flex-wrap gap-4 justify-center'>
          {blogs.map((t, i) => (
            <div
              key={i}
              className="bg-[#1E1E1E] w-[30%] text-white rounded-lg shadow-md p-4 transition flex flex-col items-center justify-center"
            >
              <img src={t.img} alt="Blog Icon" className="rounded-md mb-4 w-full h-40 object-contain" />
              <div className="text-lg font-bold">{t.title}</div>
              <div className="text-sm text-[#A6A6A6]">{t.desc}</div>
              <div className='flex gap-2'>
                <button onClick={()=>{edit(i)}}>Edit</button>
                <button onClick={()=>{deleteblog(i)}}>Delete</button>
              </div>
            </div>
          ))}
      </div>
      <form onSubmit={submitHandler} className='px-[8%] flex-row mt-10 mb-10'>
          <div>
            <input type='text' placeholder='Blog Title' className='rounded-lg w-full px-4 py-2 mt-5 text-white bg-[#2A2A2A]' value={title} onChange={(e)=>{
              settitle(e.target.value);
            }}/>
          </div>
          <div>
            <input type='text' placeholder='Blog Description' className='rounded-lg w-full px-4 py-2 mt-5 text-white bg-[#2A2A2A]' value={desc} onChange={(e)=>{
              setdesc(e.target.value);
            }}/>
          </div>
          <div>
            <input type='text' placeholder='Image Link (Direct URL)' className='rounded-lg w-full px-4 py-2 mt-5 text-white bg-[#2A2A2A] ' value={img} onChange={(e)=>{
              setimg(e.target.value);
            }}/>
          </div>
          <div>
            <textarea type='text' placeholder='Blog' className='mt-5 w-full  min-h-[150px] p-4 text-white text-lg rounded-lg bg-[#2A2A2A]  resize-y' value={blogcontent} onChange={(e)=>{
                setblogcontent(e.target.value);
              }}/>

          </div>
          <button className='rounded-xl w-full mt-5 bg-slate-600 p-3'>{editindex !== null ? "Update Blog" : "Add Blog"}</button>
      </form>
    </div>
    </>
  )
}

export default Editor