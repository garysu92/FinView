"use client";

import { Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { WelcomeMsg } from "@/components/welcome";
import { Navigation } from "@/components/navigation";

export const Header = () => {
  return (
    <header className="bg-green-600 px-4 py-8 pb-36 pt-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center px-10 justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <Logo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <div className="p-0.5 rounded-full bg-gradient-to-r from-green-100 to-green-500 hover:from-green-500 hover:to-green-100 flex justify-center align-items">
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
};
