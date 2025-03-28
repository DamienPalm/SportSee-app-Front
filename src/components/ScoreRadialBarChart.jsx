import "../styles/ScoreRadialBarChart.css";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

function ScoreRadialBarChart({ userData }) {
  const score = userData?.data?.todayScore
    ? userData?.data?.todayScore
    : userData?.data?.score;
  const scoreData = [{ name: "score", value: score }];
  console.log(scoreData);

  return (
    <>
      <div className="main__profilSection__profilWrapper__scoreRadialBarChart">
        <h2 className="main__profilSection__profilWrapper__scoreRadialBarChart__title">
          Score
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="80%"
            outerRadius="100%"
            data={scoreData}
            startAngle={90}
            endAngle={450}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <RadialBar
              data={[{ value: 1 }]}
              dataKey="value"
              barSize={170}
              fill="white"
              isAnimationActive={false}
            />
            <RadialBar
              dataKey="value"
              fill="#ff0000"
              barSize={10}
              cornerRadius={100}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="main__profilSection__profilWrapper__scoreRadialBarChart__score">
          <span>
            {userData?.data?.score && userData?.data?.score * 100}
            {userData?.data?.todayScore && userData?.data?.todayScore * 100}%
          </span>
          <p>de votre objectif</p>
        </div>
      </div>
    </>
  );
}

export default ScoreRadialBarChart;
