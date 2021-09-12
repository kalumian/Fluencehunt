import Anmition_section from "./Anmition_section";
import { Link } from "react-router-dom";

function Example_section() {
  return (
    <section className="Example_section">
      <h2 className="title">Example reports</h2>
      <Anmition_section />
      <p>
        Check more accounts by <Link>signing up</Link>
      </p>
    </section>
  );
}

export default Example_section;
