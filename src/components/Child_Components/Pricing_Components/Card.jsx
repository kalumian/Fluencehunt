function Card({ title, count, features, details, active }) {
  return (
    <>
      {active ? (
        <div className="card active">
          <h2 className="active">{title}</h2>
          <p className="active">{details}</p>
          <h3 className="active">{`${count.type}${count.value}`}</h3>
          <button className="start active">Start Plan</button>
          <ul className="active">
            {features.map((item) => {
              return <li className="active">{item}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div className="card">
          <h2>{title}</h2>
          <p>
            Full access to our Data and
            <br />
            features .
          </p>
          <h3>{`${count.type}${count.value}/${count.time}`}</h3>
          <button className="request">Request demo</button>

          <ul>
            {features.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <button className="start">Start Plan</button>
        </div>
      )}
    </>
  );
}

export default Card;
