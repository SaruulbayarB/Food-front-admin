import { ReactNode } from "react";
import { Header } from "./header";
import { SideBar } from "./sideBar";
import { Menus } from "./menus";

export const AdminLayout = ({children}:{children:ReactNode}) => {

    return (
   
        <div className="flex bg-gray-200">
            <SideBar></SideBar>
            <div className="ml-10">
                <Header></Header>
                {children}
            </div>
           
        </div>
       
      

    );
};
