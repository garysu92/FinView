import { format } from "date-fns";
import { 
  Tooltip, 
  XAxis, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  CartesianGrid,
  YAxis,
  Label
} from "recharts";

import { CustomTooltip } from "@/components/customTooltip";

type Props = {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const BarVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis>
          <Label
            style={{
              textAnchor: "middle",
              fill: "black",
            }}
            angle={270} 
            value={"$ CAD"} 
            position="insideLeft"
            offset={10}
          />
        </YAxis>
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="income"
          fill="#3b82f6"
          className="drop-shadow-sm"
        />
        <Bar
          dataKey="expenses"
          fill="#f43f5e"
          className="drop-shadow-sm"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
