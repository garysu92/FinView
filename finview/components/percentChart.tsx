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

import { CustomTooltip2 } from "@/components/customTooltip";

type Props = {
  data: {
    date: string;
    percent: number;
  }[];
};

export const BarPercentChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350} >
      <BarChart data={data} barCategoryGap="20%">
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis>
          <Label
            style={{
              textAnchor: "middle",
              fill: "black",
            }}
            angle={270} 
            value={"%"} 
            position="insideLeft"
            offset={20}
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
        <Tooltip content={<CustomTooltip2 />} />
        <Bar
          dataKey="percent"
          fill="#3b82f6"
          className="drop-shadow-sm"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
