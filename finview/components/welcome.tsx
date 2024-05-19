"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting =  "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="px-10 space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-medium flex items-center">
        {greeting}, {user?.firstName} 
      </h2>
      <p className="text-sm lg:text-base text-white">
        This is your Financial Overview
      </p>
    </div>
  );
};
