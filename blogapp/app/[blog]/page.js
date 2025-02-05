"use client";
import { useParams } from "next/navigation";
import { useAppContext } from "@/context/context";
import Link from "next/link";
export default function BlogPage() {
  const { blogs } = useAppContext();
  const { blog } = useParams(); 
  const index = parseInt(blog, 10);
  const post = blogs[index]; 
  let nextval=0;
  if(blogs[index+1]==undefined){
    nextval=index;
  }else{
    nextval=index+1;
  }
  let prevval=0;
  if(blogs[blog-1]==undefined){
    prevval=index;
  }else{
    prevval=index-1;
  }
  if (!post) return <h1>Blog Not Found</h1>;

  return (
    <div className="p-6">
      <div className="flex gap-7 font-bold pb-8 justify-between">
        <div> 
          <Link href={`/${prevval}`}>&lt;</Link>
        </div>
        <div  >
          <Link href={`/${nextval}`}>&gt;</Link>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-10">{post.title}</h1>
      <img src={post.img} alt="Blog Image" className="w-25 h-64 object-contain mt-4" />
      <p className="text-lg mt-4 text-gray-500">{post.desc}</p>
      <div className="mt-3">{post.blogcontent}</div>
    </div>
  );
}
