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
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import {
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

type Category = {
  _id: string; // MongoDB ID from backend
  categoryName: string; // name of category
};

export const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // const userEmail = localStorage.getItem("userEmail");
  const router = useRouter();

  const onLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("login");
  };

  // Fetch categories from backend
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

  useEffect(() => {
    getCategories();
  }, []);

  // Handle input change
  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  // Create new category
  const createCategoryHandler = async () => {
    if (!newCategory.trim()) return;

    try {
      const response = await fetch("http://localhost:4000/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryName: newCategory }),
      });

      if (response.ok) {
        setNewCategory("");
        await getCategories();
      }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  // Delete selected category by _id
  const deleteCategoryHandler = async () => {
    if (!selectedId) {
      alert("Select a category to delete");
      return;
    }

    try {
      await fetch(`http://localhost:4000/api/categories`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: selectedId }),
      });

      setSelectedId(null);
      await getCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="w-screen h-60 bg-white flex flex-col ml-5 pl-10 pt-5 mt-15 rounded-2xl">
      <div className="text-xl text-[#09090B] font-semibold">
        Dishes Category
      </div>

      <div className="flex gap-2 mt-3">
        {/* Category buttons */}
        {categories.map((category) => (
          <button
            key={category._id} // unique key from backend
            onClick={() => setSelectedId(category._id)}
            className={`px-3 py-1 rounded border ${
              selectedId === category._id
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            {category.categoryName}
          </button>
        ))}

        {/* Add category dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <div>
              <button className="ml-4 px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-300 w-10 h-10">
                +
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

        {/* Delete button */}
        <button
          className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-20 h-8 mt-1"
          onClick={deleteCategoryHandler}
        >
          Delete
        </button>
      </div>
      <div className="bg-blue-500 w-60 ml-400 h-16 flex rounded-md items-center justify-between p-8">
        <p>{`userEmail`}</p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Logout</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onLogout}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
