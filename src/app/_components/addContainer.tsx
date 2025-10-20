import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

// type Food = {
//   _id: string; // MongoDB ID from backend
//   foodName: string; // name of food
//   foodPrice: number; // price of food
//   foodIngredients: string; // price of food
//   foodImage: string; // price of food
// };

export const AddContainer = () => {
  const [newFoods, setNewFoods] = useState("");
  const [FoodName, setFoodName] = useState("");
  const [FoodPrice, setFoodPrice] = useState("");
  const [FoodIngredients, setFoodIngredients] = useState("");
  const [FoodImage, setFoodImage] = useState("");

  const createFoodHandler = async () => {
    if (!FoodName.trim() || !FoodPrice.trim()) {
      alert("Please enter food name and price.");
      return;
    }

    const form = new FormData();

    form.append("foodName", FoodName);
    form.append("foodPrice", FoodPrice);
    form.append("foodIngredients", FoodIngredients);
    form.append("foodImage", FoodImage);

    try {
      const response = await fetch("http://localhost:4000/api/food", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setFoodName("");
        setFoodPrice("");
        setFoodIngredients("");
        setFoodImage("");
        alert("New dish added!");
      } else {
        alert("Failed to add food item");
      }
    } catch (error) {
      console.error("Error creating food:", error);
    }
  };

  return (
    <div className="w-screen h-60 bg-[#ffffff] rounded-xl flex mt-10 ml-10 gap-4">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <div className="w-70 h-50 border border-dashed border-[#EF4444] rounded-2xl flex justify-center items-center flex-col">
              <button
                type="button"
                className="btn btn-secondary w-10 h-10 rounded-4xl"
              >
                +
              </button>
              <div className="text-md font-normal mt-2">Add new dish to</div>
              <div>categories</div>
            </div>
          </DialogTrigger>
          <DialogContent className="w-[460px] h-[592px] bg-[#FFFFFF] p-6">
            <DialogHeader>
              <DialogTitle>Add new dishes to Appetizer</DialogTitle>
            </DialogHeader>
            <div className="flex gap-5 mt-10">
              <div className="gap-3">
                <Label htmlFor="name-1">Food Name</Label>
                <Input
                  className="mt-5 text-[#71717A]"
                  id="name-1"
                  name="name"
                  value={FoodName}
                  onChange={(e) => setFoodName(e.target.value)}
                />
              </div>
              <div className="gap-3">
                <Label htmlFor="username-1">Food Price</Label>
                <Input
                  className="mt-5 gap-3 text-[#71717A]"
                  id="username-1"
                  name="username"
                  value={FoodPrice}
                  onChange={(e) => setFoodPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-3">
              <Label htmlFor="username-1">Ingredients</Label>
              <Input
                className="mt-5 text-[#71717A] border border-[#9d9595] rounded-md w-[410px] h-[90px]"
                id="username-1"
                name="username"
                value={FoodIngredients}
                onChange={(e) => setFoodIngredients(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
            <DialogFooter>
              <Button onClick={createFoodHandler} type="submit">
                Add Dish
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
