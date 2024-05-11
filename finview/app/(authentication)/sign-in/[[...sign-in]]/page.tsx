import Image from "next/image";
import { Loader } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const SignInPage = () => {
  return ( 
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn
              appearance={{
                elements: {
                  card: {
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                  }
                }
              }}
            />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-green-600 hidden lg:flex items-center justify-center">
        <Image src="/finview.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
};

export default SignInPage;