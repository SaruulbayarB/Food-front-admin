import Image from "next/image";
import { Header } from "./_components/header";
import { SideMenu } from "./_components/sideMenu";
import { Menus } from "./_components/menus";

export default function Home() {
  return (
    <div className="bg-gray-200 flex pl-10 w-screen pr-10">
      <SideMenu></SideMenu>
      <div>
        <Header></Header>
        <Menus></Menus>
      </div>
    </div>
  );
}
