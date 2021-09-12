import { useState } from "react";
import Social from "./Social";
function Form() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <section className="coming-soon-form">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="coming-soon-email-address">
          Get notified when we launch
        </label>
        <input
          type="text"
          id="coming-soon-email-address"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Subscribe" />
      </form>
      <div className="social-media">
        <ul className="none-style-list">
          <Social icon="fab fa-facebook-f" />
          <Social icon="fab fa-linkedin-in" />
          <Social icon="fab fa-youtube" />
          <Social icon="fab fa-instagram" />
        </ul>
      </div>
    </section>
  );
}

export default Form;
