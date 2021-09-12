import { useState } from "react";

function Form_Search() {
  const [input, setInput] = useState("");
  return (
    <form>
      <i class="fas fa-search"></i>
      <input
        type="text"
        value={input}
        placeholder="Search by name, job ,location, bio"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default Form_Search;
