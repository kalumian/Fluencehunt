import { Doughnut } from "react-chartjs-2";

//import
import "./style.css";

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [26, 30, 54],
      backgroundColor: ["#EC6665", "#F1C123", "#5F5DE5"],
      borderColor: ["#EC6665", "#F1C123", "#5F5DE5"],
    },
  ],
};
function Audience_type() {
  return (
    <div className="dashboard_item min-none-786">
      <div className="audience-type">
        <h3 className="audience-type-title">Audience Type</h3>
        <div className="audience-type-content">
          <ul className="audience-type-list">
            <li>
              <span>54%</span>

              <h5>Real People</h5>
            </li>
            <li>
              <span>30%</span>
              <h5>Inuencers</h5>
            </li>
            <li>
              <span>26%</span>
              <h5>Suspecious Accounts</h5>
            </li>
          </ul>
          <div className="audience-type-borad">
            <Doughnut data={data}/>
          </div>
          <div className="audience-type-borad-responisve">
            <Doughnut data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audience_type;
