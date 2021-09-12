import image_slider from "../../../../assets/Home Fluencify – 1/Group 1142.png";

function Anmition_section() {
  const image = [];

  for (let i = 0; i < 100; i++) {
    image.push(i);
  }
  return (
    <div className="anmition_section">
      <span></span>
      <marquee>
        {image.map(() => {
          return (
            <>
              <img src={image_slider} alt="" />
            </>
          );
        })}
      </marquee>
      <span></span>
      <marquee>
        {image.map(() => {
          return (
            <>
              <img src={image_slider} alt="" />
            </>
          );
        })}
      </marquee>
      <span></span>
    </div>
  );
}

export default Anmition_section;
