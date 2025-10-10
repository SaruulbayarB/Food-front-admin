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

export const AddContainer = () => {
  const categories = ["Appetizer", "Main Course", "Dessert", "Drinks"];

  return (
    <div className="w-screen h-60 bg-[#ffffff] rounded-xl flex mt-10 ml-10 gap-4">
      {categories.map((category) => (
        <Dialog key={category}>
          <form>
            <DialogTrigger asChild>
              <div className="w-80 h-50 border border-dashed border-[#EF4444] rounded-2xl flex justify-center items-center flex-col">
                <button className="btn btn-secondary w-10 h-10 rounded-4xl">
                  +
                </button>
                <div className="text-md font-normal mt-2">Add new dish to</div>
                <div>Appetizer</div>
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
                    defaultValue="Type food name"
                  />
                </div>
                <div className="gap-3">
                  <Label htmlFor="username-1">Food Price</Label>
                  <Input
                    className="mt-5 gap-3 text-[#71717A]"
                    id="username-1"
                    name="username"
                    defaultValue="Enter price..."
                  />
                </div>
              </div>
              <div className="mt-3">
                <Label htmlFor="username-1">Ingredients</Label>
                <Input
                  className="mt-5 text-[#71717A] border border-[#9d9595] rounded-md w-[410px] h-[90px]"
                  id="username-1"
                  name="username"
                  defaultValue="List ingredients..."
                />
              </div>
              <div className="mt-3">
                <Label htmlFor="username-1">Food Image</Label>
                <input
                  type="image"
                  className="w-[412px] h-[138px] border border-dashed rounded-2xl border-[#2563EB33] mt-3"
                ></input>
              </div>
              <DialogFooter>
                <Button type="submit">Add Dish</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      ))}
    </div>
  );
};
