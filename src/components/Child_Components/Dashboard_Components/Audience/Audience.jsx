// import style file
import "./style.css";

import { useState } from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["1-18", "18-24", "24-34", "35-44", "45+"],
  datasets: [
    {
      label: "Men",
      data: [84, 58, 37, 65, 25],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Women",
      data: [77, 40, 23, 44, 10],
      backgroundColor: "#5F5DE5",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function Audience() {
  const [tabs, setTabs] = useState("Country");
  return (
    <section className="dashboard_item">
      <h2 className="title">Audience</h2>
      <div className="dashboard_item_content">
        <div className="audience">
          <div className="tab">
            <ul>
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
          </div>
          <div className="audience-data-board">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audience;
