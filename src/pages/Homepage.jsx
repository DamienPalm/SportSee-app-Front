import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useUserData } from "../hooks/useUserData";
import "../styles/Homepage.css";
import ActivityBarChart from "../components/ActivityBarChart";
import { useUserActivity } from "../hooks/useUserActivity";
import AverageSessionsLineChart from "../components/AverageSessionsLineChart";
import { useUserAverageSessions } from "../hooks/useUserAverageSessions";
import PerformanceRadarChart from "../components/PerformanceRadarChat";
import { useUserPerformance } from "../hooks/useUserPerformance";
import ScoreRadialBarChart from "../components/ScoreRadialBarChart";
import Card from "../components/Card";
import calorieIcon from "../assets/img/calories-icon.svg";
import proteinIcon from "../assets/img/protein-icon.svg";
import carbIcon from "../assets/img/carbs-icon.svg";
import lipidIcon from "../assets/img/fat-icon.svg";

function Homepage() {
  const [userId] = useState(18);
  const { userData } = useUserData(userId);
  const { userActivity } = useUserActivity(userId);
  const { userAverageSessions } = useUserAverageSessions(userId);
  const { userPerformance } = useUserPerformance(userId);

  const firstName = userData?.data?.userInfos?.firstName;
  const activity = userActivity?.data?.sessions;
  const averageSessions = userAverageSessions?.data?.sessions;
  const performance = userPerformance?.data?.value;

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Sidebar />
        <main className="main__profilSection">
          <div className="main__profilSection__helloSection">
            <h1 className="main__profilSection__helloSection__userName">
              Bonjour <span>{firstName}</span>
            </h1>
            <p className="main__profilSection__helloSection__description">
              Félicitation vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <section className="main__profilSection__profilWrapper">
            <section className="main__profilSection__profilWrapper__chart">
              <ActivityBarChart data={activity} />
              <section className="main__profilSection__profilWrapper__chart__cardWrapper">
                <AverageSessionsLineChart data={averageSessions} />
                <PerformanceRadarChart data={performance} />
                <ScoreRadialBarChart userData={userData} />
              </section>
            </section>
            <section className="main__profilSection__profilWrapper__cardKeyDataWrapper">
              <Card
                data={userData?.data?.keyData?.calorieCount}
                icon={calorieIcon}
                alt="icone flamme"
                name="Calories"
                unit="Kcal"
              />
              <Card
                data={userData?.data?.keyData?.proteinCount}
                icon={proteinIcon}
                alt="icone cuisse de poulet"
                name="Proteines"
                unit="g"
              />
              <Card
                data={userData?.data?.keyData?.carbohydrateCount}
                icon={carbIcon}
                alt="icone pomme"
                name="Glucides"
                unit="g"
              />
              <Card
                data={userData?.data?.keyData?.lipidCount}
                icon={lipidIcon}
                alt="icone burger"
                name="Lipides"
                unit="g"
              />
            </section>
          </section>
        </main>
      </main>
    </>
  );
}

export default Homepage;
