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
import { ChangeEvent, useState } from "react";

export const AddContainer = ({
  categoryId,
  categoryName,
  onComplete,
}: {
  categoryId: string;
  categoryName: string;
  onComplete: () => void;
}) => {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodIngredients, setFoodIngredients] = useState("");
  const [foodImage, setFoodImage] = useState<File | undefined>();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFoodImage(e.target.files[0]);
    }
  };
  const createFoodHandler = async () => {
    if (!foodName.trim() || !foodPrice.trim()) {
      alert("Please enter food name and price.");
      return;
    }
    if (!foodImage) {
      alert("Please enter food Image.");
      return;
    }
    const form = new FormData();

    form.append("foodName", foodName);
    form.append("foodPrice", foodPrice);
    form.append("foodIngredients", foodIngredients);
    form.append("foodImage", foodImage);
    form.append("foodCategoryId", categoryId);

    try {
      setLoading(true);

      const response = await fetch("http://localhost:4000/api/food", {
        method: "POST",
        body: form,
      });

      // close dialog
      setOpen(false);
      setLoading(false);

      onComplete();

      if (response.ok) {
        setFoodName("");
        setFoodPrice("");
        setFoodIngredients("");
        setFoodImage(undefined);
      } else {
        alert("Failed to add food item");
      }
    } catch (error) {
      console.error("Error creating food:", error);
    }
  };

  return (
    <div className="w-screen h-60 bg-[#ffffff] rounded-xl flex mt-10 ml-10 gap-4">
      <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
        <DialogTrigger asChild>
          <div className="w-70 h-50 border border-dashed border-[#EF4444] rounded-2xl flex justify-center items-center flex-col">
            <button
              type="button"
              className="btn btn-secondary w-10 h-10 rounded-4xl"
              onClick={() => setOpen(true)}
            >
              +
            </button>
            <div className="text-md font-normal mt-2">
              Add new dish to {categoryName}
            </div>
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
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
              />
            </div>
            <div className="gap-3">
              <Label htmlFor="username-1">Food Price</Label>
              <Input
                className="mt-5 gap-3 text-[#71717A]"
                id="username-1"
                name="username"
                value={foodPrice}
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
              value={foodIngredients}
              onChange={(e) => setFoodIngredients(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" onChange={fileChangeHandler} />
          </div>
          <DialogFooter>
            <Button
              disabled={loading}
              onClick={createFoodHandler}
              type="submit"
            >
              Add Dish
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
