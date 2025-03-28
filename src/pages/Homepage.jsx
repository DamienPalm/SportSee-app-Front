import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useUserData } from "../hooks/useUserData";
import "../styles/Homepage.css";

function Homepage() {
  const [userId] = useState(18);
  const { userData, loading, error } = useUserData(userId);
  console.log(userData, loading, error);

  const firstName = userData?.data?.userInfos?.firstName;

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
          </section>
        </main>
      </main>
    </>
  );
}

export default Homepage;
