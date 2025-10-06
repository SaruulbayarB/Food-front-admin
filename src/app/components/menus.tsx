"use client";
import { useState } from "react";
import { MenuContainer } from "./menuContainer";
import { AddContainer } from "./addContainer";

export const Menus = () => {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");

  return (
    <div className="w-[1171px] h-200 bg-[#ffffff] rounded-xl flex flex-wrap mt-10">
      <div className="font-xl text-[#09090B] font-semibold flex">
        Appetizers
      </div>
      <AddContainer></AddContainer>
      <MenuContainer></MenuContainer>
    </div>
  );
};
