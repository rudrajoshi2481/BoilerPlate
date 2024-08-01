"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function SidebarIndex() {
  const menuItems = [
    {
      name: "Dashboard",
      link: "",
      Icon: <Home className="h-5 w-5" />,
    },

    {
      name: "Shopping Cart",
      link: "",
      Icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      name: "Package",
      link: "",
      Icon:   <Package className="h-5 w-5" />,
    },
    {
      name: "Customer",
      link: "",
      Icon:    <Users2 className="h-5 w-5" />,
    },
  ];

  return (
    <div>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {menuItems.map((e) => {
            return (
              <TooltipProvider>
                <Tooltip delayDuration={50}>
                  <TooltipTrigger asChild>
                    <Link
                      href={e.link}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                      {e.Icon}
                      <span className="sr-only">{e.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{e.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <TooltipProvider >
            <Tooltip delayDuration={50}>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    </div>
  );
}

export default SidebarIndex;
