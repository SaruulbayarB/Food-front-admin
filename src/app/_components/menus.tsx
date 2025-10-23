"use client";
import { useEffect, useState } from "react";
import { MenuContainer } from "./menuContainer";
import { AddContainer } from "./addContainer";

type Food = {
  _id: string;
  foodName: string;
  foodPrice: number;
  foodIngredients?: string;
  foodImage: string;
  foodCategoryId: string;
};

export const Menus = () => {
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

  type Category = {
    _id: string; // MongoDB ID from backend
    categoryName: string; // name of category
  };
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/categories");
      const data = await res.json();
      const { category } = data; // backend returns { message, category: Category[] }

      setCategories(category); // store full objects
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  console.log({ categories });
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-screen h-autorounded-xl flex flex-col mt-5 ml-2 p-2">
      {categories.map((category) => (
        <div
          key={category._id}
          className="flex  bg-[#ffffff] flex-col mb-6 rounded-lg ml-1 p-5"
        >
          <h2 className="text-lg font-semibold mb-2 text-[#09090B]">
            {category.categoryName}
          </h2>

          <div className="flex gap-4 flex-col">
            <AddContainer
              categoryId={category._id}
              categoryName={category.categoryName}
              onComplete={() => {
                getFoods();
              }}
            />
            <MenuContainer foods={foods} categoryId={category._id} />
          </div>
        </div>
      ))}
    </div>
  );
};
