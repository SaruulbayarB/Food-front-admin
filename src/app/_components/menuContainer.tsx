"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
type Food = {
  _id: string;
  foodName: string;
  foodPrice: number;
  foodIngredients?: string;
  foodImage: string;
  foodCategoryId: string;
};

export const MenuContainer = ({
  foods,
  categoryId,
}: {
  foods: Food[];
  categoryId: string;
}) => {
  console.log({ foods });

  const filteredFoods = foods.filter(
    (food) => food.foodCategoryId === categoryId
  );

  return (
    <div className="w-screen flex flex-wrap">
      {filteredFoods.map((food) => (
        <div
          key={food._id}
          className="w-[280px] h-50 border rounded-2xl border-[#E4E4E7] flex flex-col ml-10 pl-4"
        >
          <div className="w-[250px] h-[110px] rounded-2xl border mt-5 justify-between">
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex justify-between">
            <div className="font-semibold text-[#ef4444]">{food.foodName}</div>

            <div className="font-normal text-black mr-3">{food.foodPrice}$</div>
          </div>

          <div className="text-sm font-normal text-[#09090B] mt-3 bg-red-400">
            {food.foodIngredients}
          </div>
        </div>
      ))}
    </div>
  );
};
