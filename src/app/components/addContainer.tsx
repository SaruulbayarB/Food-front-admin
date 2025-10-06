import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddItems = () => {
  <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>;
};

export const AddContainer = () => {
  return (
    <div className="w-[1171px] h-60 bg-[#ffffff] rounded-xl flex flex-wrap mt-10 ml-10">
      <div className="w-[270px] h-[245px] border rounded-2xl border-dashed border-[#EF4444] justify-center flex flex-col items-center">
        <button
          onClick={AddItems}
          className="btn btn-soft btn-secondary w-10 h-10"
        >
          +
        </button>
        <div>Add new dish to </div>
        <div>Add new dish to </div>
      </div>
    </div>
  );
};
