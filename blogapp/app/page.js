"use client";
import React from "react";
import { useAppContext } from '@/context/context';
import Link from "next/link";
const Main = () => {
  const {blogs,setblogs} = useAppContext();
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-6">Blog Posts</h2>
      <div className="m-10 flex flex-wrap gap-4 justify-center">
        {blogs.length === 0 ? (
          <h1>No Blogs Available</h1>
        ) : (
          blogs.map((t, i) => (
            <div
              key={i}
              className="bg-[#1E1E1E] w-[30%] text-white rounded-lg shadow-md p-4 transition flex flex-col items-center justify-center hover:bg-[#292929] hover:shadow-lg hover:-translate-y-1"
            >
              <img src={t.img} alt="Blog Icon" className="h-40 object-contain" />
              <Link href={`/${i}`} ><span className="text-lg font-bold hover:text-[#BB86FC]">{t.title}</span></Link>
              <div className="text-sm text-[#A6A6A6] hover:text-[#BB86FC]">{t.desc}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Main;
