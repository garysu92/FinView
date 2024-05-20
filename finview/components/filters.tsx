import { DateFilter } from "@/components/datefilter";
import { AccountFilter } from "@/components/accountfilter";

export const Filters = () => {
  return (
    <div className="px-10 flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <AccountFilter />
      <DateFilter />
    </div>
  );
};
