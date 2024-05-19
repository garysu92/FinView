"use client";

import { FaPiggyBank } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

import { useGetSummary } from "@/features/summary/api/useGetSummary";

import { formatDateRange } from "@/lib/utils";
import { DataCard, DataCardLoading } from "@/components/dataCard";
import { useEffect, useState } from "react";

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();

  const params = useSearchParams();
  const [to, setTo] = useState<string | undefined>(undefined);
  const [from, setFrom] = useState<string | undefined>(undefined);
  const [paramsLoaded, setParamsLoaded] = useState(false);

  useEffect(() => {
    const toParam = params.get("to") || undefined;
    const fromParam = params.get("from") || undefined;
    setTo(toParam);
    setFrom(fromParam);
    setParamsLoaded(true);
  }, [params]);

  if (!paramsLoaded || isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    );
  }

  const dateRangeLabel = formatDateRange({ to, from });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        dateRange={dateRangeLabel}
      />
      <DataCard
        title="Income"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        dateRange={dateRangeLabel}
      />
      <DataCard
        title="Expenses"
        value={data?.expensesAmount}
        percentageChange={data?.expensesChange}
        dateRange={dateRangeLabel}
      />
    </div>
  );
};
