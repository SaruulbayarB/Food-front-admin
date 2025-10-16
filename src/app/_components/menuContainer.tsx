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
};

export const MenuContainer = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  const getFoods = async () => {
    try {
      const result = await fetch("http://localhost:4000/api/food");
      const responseData = await result.json();
      const { food } = responseData; // backend returns { message, food }
      setFoods(food);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="w-screen flex flex-wrap">
      {foods.map((food) => (
        <div
          key={food._id}
          className="w-[280px] h-50 border rounded-2xl border-[#E4E4E7] flex flex-col ml-10 pl-3"
        >
          <div className="w-[220px] h-[130px] border-[#E4E4E7] rounded-2xl border mt-5 p-3 justify-between"></div>

          <div className="flex justify-between">
            <div className="font-semibold text-[#ef4444]">{food.foodName}</div>

            <div className="font-normal text-black mr-3">{food.foodPrice}$</div>
          </div>

          <div className="text-sm font-normal text-[#09090B] mt-3">
            {food.foodIngredients}
          </div>
        </div>
      ))}
    </div>
  );
};
