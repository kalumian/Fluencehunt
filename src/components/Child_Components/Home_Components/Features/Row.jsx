import { Link } from "react-router-dom";

function Row({ image1, title, dec, image2, id, link }) {
  return (
    <div className="row">
      <div className="info">
        <h3>
          <img src={image1} alt="image1" className={"icon" + String(id)} />
          {title}
        </h3>
        <p>{dec}</p>
        <Link to={link}>LEARN MORE{"->"}</Link>
      </div>
      <img src={image2} alt="image1" />
    </div>
  );
}

export default Row;
