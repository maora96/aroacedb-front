import React from "react";
import "./dashboard.css";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import Stats from "../../components/stats/stats";
import RecentSuggested from "../../components/recent-suggested/recent-suggested";

function Dashboard() {
  const [recentlyAdded, setRecentlyAdded] = React.useState([]);
  const [stats, setStats] = React.useState([]);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/recent")
      .then((res) => res.json())
      .then((resJson) => {
        const suggested = resJson.dados.recentlyAdded;
        console.log(suggested);
        setRecentlyAdded(suggested);
      });

    fetch("https://aroacedb-back.herokuapp.com/stats").then((res) =>
      res.json().then((resJson) => {
        const data = resJson.dados;
        console.log(data);
        setStats(data);
      })
    );
  }, []);

  return (
    <div className="Dashboard">
      <SidebarAdmin />

      <div className="dashboard-container">
        <div className="header">
          <h2>Dashboard</h2>
        </div>
        <Stats stats={stats} />
        <RecentSuggested characters={recentlyAdded} />
        <div className="header">
          <a href="/suggested-characters">View All</a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
