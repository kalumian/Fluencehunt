import { Line } from "react-chartjs-2";

// import style file
import "./style.css";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun", "Mon"],
  datasets: [
    {
      label: "Previous Week",
      data: [3500, 6000, 14000, 5000, 13500, 16000, 8000, 2000],
      fill: false,
      backgroundColor: "rgb(255, 110, 142)",
      borderColor: "rgba(255, 99, 133, 0.342)",
      yAxisID: "xaxis-1",
    },
    {
      label: "Current Week",
      data: [7000, 16000, 10000, 8000, 14000, 9000, 4500, 7000],
      fill: false,
      backgroundColor: "#5F5DE5",
      borderColor: "#3d3bce55",
      yAxisID: "y-axis-2",
    },
  ],
};



const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-1",
        ticks: {
          beginAtZero: true,
        },
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function Audience_Growth() {
  return (
    <section className="dashboard_item dis">
      <h2 className="title">Audience Growth</h2>
      <div className="dashboard_item_content">
        <div className="audience_growth">
          <div className="container-data-board">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audience_Growth;
