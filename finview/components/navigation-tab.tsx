
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  name: string;
  active?: boolean;
  mobile?: boolean;
};

export const NavigationTab = ({
  href,
  name,
  active,
  mobile
}: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn("w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
      active ? "bg-white/10 text-white" : "bg-transparent"
      )}
    >
      <Link href={href}>
        {name}
      </Link>
    </Button>
  );
};


