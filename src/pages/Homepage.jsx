import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Homepage() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Sidebar />
      </main>
    </>
  );
}

export default Homepage;
