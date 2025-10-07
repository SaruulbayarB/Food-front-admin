import Image from "next/image";

import { AdminLayout } from "./_components/adminLayout";
import { Menus } from "./_components/menus";

export default function Home() {
  return (
  <AdminLayout>
    
        <Menus></Menus>
 
  </AdminLayout>
  );
}
