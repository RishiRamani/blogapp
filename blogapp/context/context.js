"use client"
import { createContext ,useContext } from "react";
import { useState } from "react";
import React from "react";

const AppContext = createContext();

export function AppWrapper({children}){
  const [blogs, setblogs] = useState([
    { title: "Blog #1", desc: "A trip down memory lane", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",blogcontent:"" }
  ]);
  return(
    <AppContext.Provider value={{blogs,setblogs}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext(){
  return useContext(AppContext);
}