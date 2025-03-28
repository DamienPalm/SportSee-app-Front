import "../styles/ActivityBarChart.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CustomizedTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p className="customTooltip__payload">{payload[0].value + "kg"}</p>
        <p className="customTooltip__payload">{payload[1].value + "Kcal"}</p>
      </div>
    );
  } else {
    return null;
  }
}

function ActivityBarChart({ data }) {
  return (
    <div className="main__profilSection__profilWrapper__activityBarChart">
      <h2 className="main__profilSection__profilWrapper__activityBaraChart__title">
        Activité quotidienne
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barSize={7}
          barGap={8}
          margin={{ top: 28, right: 28, bottom: 20, left: 40 }}
        >
          <CartesianGrid strokeDasharray={3} vertical={false} fill="#fbfbfb" />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9b9eac" }}
            tickMargin={20}
            tickLine={false}
            tickFormatter={(date) => new Date(date).getDate()}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tick={{ fill: "#9b9eac" }}
            tickMargin={40}
            tickLine={false}
            axisLine={false}
            tickCount={3}
            domain={["dataMin-2", "dataMax+1"]}
          />
          <YAxis hide yAxisId="calories" />
          <Tooltip content={CustomizedTooltip} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            height={64}
          />
          <Bar
            name="Poids (Kg)"
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282d30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            fill="#e60000"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityBarChart;
