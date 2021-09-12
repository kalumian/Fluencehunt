import { Bar } from "react-chartjs-2";

// import style file
import "./style.css";

const data = {
  labels: [
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
    "0.02- 1.55",
  ],
  datasets: [
    {
      label: "# of accounts",
      color: "#2d3355",
      data: [
        200, 300, 500, 700, 900, 1200, 1700, 2100, 2800, 3300, 3500, 13030,
      ],
      backgroundColor: [
        "rgb(138, 128, 130)",
        "rgb(138, 128, 130)",
        "rgb(138, 128, 130)",
        "rgb(46, 204, 204)",
        "rgb(46, 204, 204)",
        "rgb(46, 204, 204)",
        "rgba(204, 201, 46, 0.842)",
        "rgb(204, 201, 46)",
        "rgb(204, 201, 46)",
        "rgb(219, 110, 110)",
        "rgb(219, 110, 110)",
        "rgb(114, 36, 216)",
      ],
      borderColor: [
        "rgb(138, 128, 130)",
        "rgb(138, 128, 130)",
        "rgb(138, 128, 130)",
        "rgb(46, 204, 204)",
        "rgb(46, 204, 204)",
        "rgb(46, 204, 204)",
        "rgba(204, 201, 46, 0.842)",
        "rgb(204, 201, 46)",
        "rgb(204, 201, 46)",
        "rgb(219, 110, 110)",
        "rgb(219, 110, 110)",
        "rgb(114, 36, 216)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Engagement rate distribution ( followers segment)",
      color: "#2d3355",
    },
  },
};

function Engagement() {
  return (
    <section className="dashboard_item">
      <h2 className="title">Engagement</h2>
      <div className="dashboard_item_content">
        <div className="engagement">
          <h3>Engagement rate</h3>
          <p className="state">
            <i class="fas fa-check-circle"></i>4.2% -Very high
          </p>
          <p>
            About 10% of inuencers in the segment of 50K - 250K followers have a
            higher engagement. The average engagement for this segment is 2.5%.
          </p>
          <div className="container-data-board">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Engagement;
