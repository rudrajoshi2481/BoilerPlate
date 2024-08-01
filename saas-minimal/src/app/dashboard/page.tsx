import SidebarIndex from "@/components/web/Sidebar/SidebarIndex";
import React from "react";

function Page() {
  return (
    <div className="flex w-full">
      <div className="relative">
        <SidebarIndex />
      </div>
      <div className="flex w-full flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <div className="w-full bg-fuchsia-100"><p className="text-center">Dashboard</p></div>
      </div>
    </div>
  );
}

export default Page;
