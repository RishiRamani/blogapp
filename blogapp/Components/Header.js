import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <div className='bg-[#1E1E1E] text-[#FFFFFF] flex justify-between px-10 py-5'>
      <div>
        <img src='/img/logo.png' className='h-5 object-contain'/>
      </div>
      <div className='flex gap-8 font-semibold'>
        <Link href="/">Home</Link>
        <Link href="/Editor">Editor</Link>
      </div>
    </div>
    </>
  )
}

export default Header