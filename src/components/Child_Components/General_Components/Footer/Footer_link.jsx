import { Link } from "react-router-dom";

function Footer_link({ link, title }) {
  const state = title.slice(0, 3) === "fab";
  return (
    <>
      {!state ? (
        <li>
          <Link to={link}>{title}</Link>
        </li>
      ) : (
        <a href={link}>
          <i class={title}></i>
        </a>
      )}
    </>
  );
}

export default Footer_link;
