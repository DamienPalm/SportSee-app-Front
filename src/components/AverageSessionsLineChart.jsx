import "../styles/AverageSessionsLineChart.css";
import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CustomTickFormatter(day) {
  switch (day) {
    case 1:
      return "L";

    case 2:
      return "M";

    case 3:
      return "M";

    case 4:
      return "J";

    case 5:
      return "V";

    case 6:
      return "S";

    case 7:
      return "D";

    default:
      return day;
  }
}

function CustomizedTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="averageSessionsTooltip">
        <p className="averageSessionsTooltip__payload">
          {payload[0].value + " " + "min"}
        </p>
      </div>
    );
  } else {
    return null;
  }
}

function CustomizedCursor(props) {
  const { points, width, height } = props;
  const { x, y } = points[0];
  console.log(props);
  return (
    <Rectangle
      fill="rgba(120, 0, 0, 0.6)"
      stroke="rgba(120, 0, 0, 0.6)"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
}

function AverageSessionsLineChart({ data }) {
  return (
    <div className="main__profilSection__profilWrapper__averageSessionsLineChart">
      <h2 className="main__profilSection__profilWrapper__averageSessionsLineChart__title">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 77, right: 0, left: 0, bottom: 20 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={<CustomTickFormatter />}
            tick={{ fill: "white" }}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
          <Line
            type="natural"
            dataKey="sessionLength"
            strokeWidth={2}
            stroke="white"
            activeDot={{
              r: 4,
              strokeWidth: 8,
              stroke: "rgba(255, 255, 255, 0.2)",
            }}
            dot={false}
          />
          <Tooltip content={CustomizedTooltip} cursor={<CustomizedCursor />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessionsLineChart;
