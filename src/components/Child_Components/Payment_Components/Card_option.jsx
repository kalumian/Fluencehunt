function Card_option({ count, state, title, details }) {
  return (
    <div className={`row-option ${state ? "active" : ""}`}>
      <span className={`circle ${state ? "active" : ""}`}></span>
      <span className={`count ${state ? "active" : ""}`}>{count}$</span>
      <div className={`info ${state ? "active" : ""}`}>
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Card_option;
