import Footer_link from "./Footer_link";

function Footer_links({ data, title }) {
  const content = data.map((item) => {
    return <Footer_link title={item.title} link={item.link} />;
  });
  return (
    <>
      <h3>{title}</h3>
      {content}
    </>
  );
}

export default Footer_links;
