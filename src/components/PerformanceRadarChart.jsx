import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "../styles/PerformanceRadarChart.css";

function CustomTickFormatter(kind) {
  switch (kind) {
    case "cardio":
      return "Cardio";

    case "energy":
      return "Energie";

    case "endurance":
      return "Endurance";

    case "strength":
      return "Force";

    case "speed":
      return "Vitesse";

    case "intensity":
      return "Intensité";

    default:
      return kind;
  }
}

function PerformanceRadarChart({ data }) {
  return (
    <div className="main__profilSection__profilWrapper__performanceRadarChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey={"kind"}
            tick={{ fontSize: 10, fill: "white" }}
            tickFormatter={CustomTickFormatter}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#ff0101"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceRadarChart;
