import { Avatar } from "@material-ui/core";
import Images from "./Images";
function Card({
  image1,
  image2,
  image3,
  avatar,
  name,
  username,
  details,
  statistics,
  location,
  verification,
}) {
  return (
    <li className="card">
      <div className="card-header">
        <Images
          image1={image1}
          image2={image2}
          image3={image3}
        />
      </div>
      <div className="card-info">
        <div className="card-info-header">
          <div className="avatar">
            <Avatar src={avatar} style={{ width: "70px", height: "70px" }} />
            <i className={`fas fa-certificate ${verification ? " is-verification" : ""}`}>
              <i className="fas fa-check"></i>
            </i>
          </div>
          <span></span>
        </div>
        <div className="card-info-content">
          <h1>{name}</h1>
          <h2>{username}</h2>
          <p>{details}</p>
        </div>
      </div>
      <div className="card-statistics">
        <ul className="none-style-list">
          <li>
            <div>{statistics[0].title}</div>
            <span className="count">{statistics[0].count}</span>
            <span className="name-statistic">Media</span>
          </li>
          <li>
            <div className="mc">{statistics[1].title}</div>
            <span className="count">{statistics[1].count}</span>
            <span className="name-statistic">Followers</span>
          </li>
          <li>
            <div>{statistics[2].title}</div>
            <span className="count">{statistics[2].count}</span>
            <span className="name-statistic">Following</span>
          </li>
        </ul>
      </div>
      <div className="card-location">
        <i class="fas fa-map-marker-alt"></i>
        <span>{location}</span>
      </div>
    </li>
  );
}

export default Card;
