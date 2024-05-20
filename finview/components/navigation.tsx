"use client";

import { useMedia } from "react-use";
import { usePathname, useRouter } from "next/navigation";

import { NavigationTab } from "@/components/navigation-tab";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";


const tabs = [
    {
        label: "Overview",
        href: "/"
    },
    {
        label: "Transactions",
        href: "/transactions"
    },
    {
        label: "Accounts",
        href: "/accounts"
    },
]

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useMedia("(max-width: 1024px)", false);
  
    const onClick = (href: string) => {
      router.push(href);
      setIsOpen(false);
    };
  
    if (isMobile) {
      return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Button 
              variant="outline" 
              size="sm" 
              className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="px-2">
            <nav className="flex flex-col gap-y-2 pt-6">
              {tabs.map((tab) => (
                <Button
                  variant={tab.href === pathname ? "secondaryGreen" : "ghostGreen"}
                  className="w-full justify-start"
                  onClick={() => onClick(tab.href)} key={tab.href}
                >
                  {tab.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      );
    }
  
    return (
      <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {tabs.map((tab) => (
          <NavigationTab
            key={tab.href}
            href={tab.href}
            name={tab.label}
            active={tab.href === pathname}
          />
        ))}
      </nav>
    );
  };
  