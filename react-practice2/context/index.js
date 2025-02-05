"use client"
import { createContext ,useContext } from "react";
import { useState } from "react";
import React from "react";

const AppContext = createContext();

export function AppWrapper({children}){
  const [blogs, setblogs] = useState([
    { title: "www", desc: "wwwww", img: "https://img.icons8.com/ios/50/search--v1.png" }
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