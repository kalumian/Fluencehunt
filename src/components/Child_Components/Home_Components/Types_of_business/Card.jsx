function Card({ title, dec }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span className="line"></span>
      <p>{dec}</p>
    </div>
  );
}

export default Card;
