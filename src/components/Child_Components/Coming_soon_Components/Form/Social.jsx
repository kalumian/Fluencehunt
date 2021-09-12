function Social({ icon, link }) {
  return (
    <li>
      <a href={link ? link : "#"}>
        <i className={icon}></i>
      </a>
    </li>
  );
}

export default Social;
