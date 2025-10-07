import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <div className="w-screen h-60 bg-[#ffffff] flex ml-5 pl-10 pt-5 mt-15 rounded-2xl">
      <h1 className="font-xl text-[#09090B] font-semibold">Dishes Category</h1>
      <div className="mt-10">
        <Badge className="w-20 h-10 default |outline | secondary | destructive">
          Badge
        </Badge>
      </div>
    </div>
  );
};
