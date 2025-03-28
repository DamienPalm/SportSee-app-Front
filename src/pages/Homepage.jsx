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
          <section className="main__profilSection__profilWrapper">
            <div className="main__profilSection__profilWrapper__helloSection">
              <h1 className="main__profilSection__profilWrapper__helloSection__userName">
                Bonjour <span>{firstName}</span>
              </h1>
              <p className="main__profilSection__profilWrapper__helloSection__description">
                Félicitation vous avez explosé vos objectifs hier 👏
              </p>
            </div>
            <ActivityBarChart data={activity} />
            <section className="main__profilSection__profilWrapper__cardWrapper">
              <AverageSessionsLineChart data={averageSessions} />
              <PerformanceRadarChart data={performance} />
              <ScoreRadialBarChart userData={userData} />
            </section>
          </section>
        </main>
      </main>
    </>
  );
}

export default Homepage;
