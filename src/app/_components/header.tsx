"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
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
  const [newCategories, setNewCategories] = useState<string | undefined>();

  const getCategories = async () => {
    try {
      const result = await fetch("http://localhost:3001/categories");
      const responseData = await result.json();
      const { data } = responseData;
      setCategories(data || []); // safe fallback
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategories(e.target.value);
  };

  const createCategoryHandler = async () => {
    const result = await fetch("http://localhost:3001/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newCategories),
    });
  };

  return (
    <div className="w-screen h-60 bg-white flex ml-5 pl-10 pt-5 mt-15 rounded-2xl">
      <h1 className="text-xl text-[#09090B] font-semibold">Dishes Category</h1>

      <div className="ml-10 flex gap-2">
        {categories.map((category, index) => (
          <Badge key={index} variant="outline">
            {category}
          </Badge>
        ))}

        <Dialog>
          <DialogTrigger asChild>
            <button className="ml-4 px-3 py-1 bg-blue-500 text-black rounded-lg hover:bg-blue-600 w-20 h-8">
              Open
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                <Input onChange={newCategoryNameChangeHandler}></Input>
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
