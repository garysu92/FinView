"use client";

import { useGetSummary } from "@/features/summary/api/useGetSummary";

import { Chart, ChartLoading } from "@/components/chart";

export const DataCharts = () => {
  const { data, isLoading } = useGetSummary();  

  const data2 = !isLoading ? (
    data?.days?.map(item => ({
      date: item.date,
      amount: item.income - item.expenses
    })) || []
  ) : [];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="col-span-1 lg:col-span-3 xl:col-span-4 space-y-8">
          <ChartLoading />
          <ChartLoading />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        <Chart data={data?.days} data2={data2}/>
      </div>
    </div>
  );
};
