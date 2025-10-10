import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const MenuContainer = () => {
  return (
    <div className="w-80 h-50 border rounded-2xl border-[#E4E4E7] flex flex-col ml-10 pl-3">
      <div className="w-[240px] h-[130px] border-[#E4E4E7] rounded-2xl border mt-5 relative"></div>
      <button className="btn btn-ghost w-10 h-10 ml-40 mt-20 absolute rounded-3xl bg-white">
        <img
          src="./_photos/edit-2.png"
          alt="Edit"
          className="object-contain w-8 h-8"
        />
      </button>
      <div className="text-[#EF4444] font-medium mt-2">
        Brie Crostini Appetizer
        <span className="ml-20 font-normal">12$</span>
      </div>
      <div className="font-xs font-normal text-[#09090B] mt-3">
        hool onion, garlic, etc
      </div>
    </div>
  );
};
