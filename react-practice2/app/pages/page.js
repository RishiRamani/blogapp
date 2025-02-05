"use client"
import { useAppContext } from '@/context'
import React from 'react'

const page = () => {
  const {blogs,setBlogs} = useAppContext();
  return (
    <>
    <div>{blogs[0].title}</div>
    </>
  )
}

export default page