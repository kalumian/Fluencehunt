// import style file
import "./style.css";

import { Bubble } from "react-chartjs-2";

const randY = () => Math.round(Math.random() * 450);
const randX = () => Math.round(Math.random() * 4500);

const data = {
  datasets: [
    {
      label: "Comments",
      data: [
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
      ],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "Likes",
      data: [
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
        { x: randX(), y: randY() },
      ],
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

function Comments_likes_ratio() {
  return (
    <section className="dashboard_item">
      <h2 className="title">Comments likes ratio</h2>
      <div className="dashboard_item_content">
        <div className="comments-likes-ratio">
          <p className="state">
            <i class="fas fa-check-circle"></i>Good
          </p>
          <p>
            Example inuencer receives 0.3 comments per 100 likes, similar
            accounts receive 0.9 comments per 100 likes .
          </p>
          <div className="likes_ratio container-data-board">
            <Bubble data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments_likes_ratio;
