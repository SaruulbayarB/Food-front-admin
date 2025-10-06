import Image from "next/image";
import { Header } from "./components/header";
import { SideMenu } from "./components/sideMenu";
import { Menus } from "./components/menus";

export default function Home() {
  return (
    <div className="bg-gray-200 flex g-10 justify-evenly">
      <SideMenu></SideMenu>
      <div>
        <Header></Header>
        <Menus></Menus>
      </div>
    </div>
  );
}
