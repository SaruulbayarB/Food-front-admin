"use client";
import { useState } from "react";
import { MenuContainer } from "./menuContainer";
import { AddContainer } from "./addContainer";


export const Menus = () => {

  return (

      <div className="w-screen h-200 bg-[#ffffff] rounded-xl flex mt-5 ml-5 p-10">
        <div className="font-xl text-[#09090B] font-semibold flex">
          Appetizers
        </div>
        <AddContainer></AddContainer>
        <MenuContainer></MenuContainer>
      </div>
    
  );
};
