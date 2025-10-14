"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Header = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const getCategories = async () => {
    try {
      const result = await fetch("http://localhost:4000/api/categories");
      const responseData = await result.json();
      const { category } = responseData; // backend returns { message, category }

      // Extract category names safely
      setCategories(category.map((c: any) => c.categoryName));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  const createCategoryHandler = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: newCategory }),
      });

      if (response.ok) {
        await getCategories(); // refresh list after adding
        setNewCategory(""); // clear input
      }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="w-screen h-60 bg-white flex flex-col ml-5 pl-10 pt-5 mt-15 rounded-2xl">
      <div className="text-xl text-[#09090B] font-semibold">
        Dishes Category
      </div>

      <div className="flex gap-2 mt-3">
        {categories.map((category, index) => (
          <Badge key={index} variant="outline">
            {category}
          </Badge>
        ))}

        <Dialog>
          <DialogTrigger asChild>
            <div>
              <button className="ml-4 px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-300 w-10 h-10">
                +
              </button>
              <button className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-20 h-8">
                Delete
              </button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                <Input
                  placeholder="Enter category name"
                  value={newCategory}
                  onChange={newCategoryNameChangeHandler}
                />
                <Button className="mt-5 ml-40" onClick={createCategoryHandler}>
                  Create
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
