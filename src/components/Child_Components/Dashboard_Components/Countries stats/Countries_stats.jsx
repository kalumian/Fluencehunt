import { useState } from "react";
import { Bar } from "react-chartjs-2";

// impoer style
import "./style.css";

const data = {
  labels: ["US state", "Iran", "Brazil", "Spain", "Mexico"],
  datasets: [
    {
      label: "# of accounts",
      data: [1, 3, 4, 7, 30].reverse(),
      backgroundColor: [
        "rgb(138, 128, 130)",
        "rgb(46, 204, 204)",
        "rgba(204, 201, 46, 0.842)",
        "rgb(219, 110, 110)",
        "rgb(114, 36, 216)",
      ].reverse(),
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  }
};
function Countries_stats() {
  const [tabs, setTabs] = useState("Country");

  return (
    <div className="dashboard_item min-none-786">
      <div className="countries_stats">
        <div className="tab">
          <ul className="list">
            <li
              className={tabs === "Country" ? "active" : ""}
              onClick={() => setTabs("Country")}
            >
              Country
            </li>
            <li
              className={tabs === "US States" ? "active" : ""}
              value="US States"
              onClick={() => setTabs("US States")}
            >
              US States
            </li>
            <li
              className={tabs === "Cities" ? "active" : ""}
              value="Cities"
              onClick={() => setTabs("Cities")}
            >
              Cities
            </li>
          </ul>
          <div className="countries-stats-board">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countries_stats;
