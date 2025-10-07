export const SideBar = () => {
  return (
    <div>
      <div className="w-[205px] h-[1200px] bg-[#ffffff] justify-center pt-10">
        <div className="flex justify-center">
          <img src="Logo.png" alt="Edit" className="w-10 h-10" />
          <div>
            <p className="font-2xl text-[#09090B] font-semibold justify-center flex">
              NomNom
            </p>
            <p className="font-normal text-[#71717A] justify-center flex ml-5">
              Swift Delivery
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 ">
          <div className="w-[165px] h-[40px] bg-black text-white flex justify-center items-center text-md rounded-2xl gap-5 font-semibold">
            <img src="Navigation.png" alt="Edit" className="w-4 h-4" />
            Food Menu
          </div>
          <div className="w-[165px] h-[40px] text-black flex justify-center items-center text-md rounded-2xl gap-5 font-semibold mt-10">
            <img src="Navigation.png" alt="Edit" className="w-4 h-4" />
            Orders
          </div>
        </div>
      </div>
    </div>
  );
};
