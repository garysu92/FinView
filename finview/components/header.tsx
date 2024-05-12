"use client";

import { Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { WelcomeMsg } from "@/components/welcome";
import { Navigation } from "@/components/navigation";

export const Header = () => {
  return (
    <header className="bg-green-600 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <Logo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton
              afterSignOutUrl="/sign-in"
            />
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
