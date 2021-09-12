// import Libraries and Tools
import { Helmet } from "react-helmet";

//import component
import Header from "../../Child_Components/Dashboard_Components/Header/Header";
import Navbar from "../../Child_Components/Dashboard_Components/Navbar/Navbar";
import Sidebar from "../../Child_Components/Dashboard_Components/Sidebar/Sidebar";
import Dashboard_sections from "../../Child_Components/Dashboard_Components/Dashboard_sections/Dashboard_Sections";

// import styles & images & icons
import "./style.css";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>FLUENCIFY | Dashboard</title>
      </Helmet>
      <div className="Dashboard">
        <Header />
        {/* <div className="middle-page">
          <Sidebar />
          <main className="dashboard-content">
            <Navbar />
            <Dashboard_sections />
          </main>
        </div> */}
      </div>
    </>
  );
}

export default Dashboard;
