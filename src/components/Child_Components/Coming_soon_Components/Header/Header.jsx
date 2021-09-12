import Wave from "../../../../assets/Coming Soon/wave.png";
import Logo from "../../../../assets/Coming Soon/Logo.png";
import Logo_name from "../../../../assets/Coming Soon/name-logo.png";
import circle1 from "../../../../assets/Coming Soon/circle1.png";
import wave2 from "../../../../assets/Coming Soon/wave2.png";
import LogoWithText from "../../../../assets/LogoWithText.png";
function Header() {
  return (
    <header className="coming-soon-header">
      <div className="waves">
        <img src={Wave} alt="wave" />
      </div>
      <section className="content">
        <div className="logo">
          <img src={LogoWithText} alt="LogoWithText" />
        </div>
        <div className="info-page">
          <h1>coming soon</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </section>
      <span>
        <img src={circle1} alt="circle1" className="circle1" />
        <img src={wave2} alt="wave2" className="wave2" />
      </span>
    </header>
  );
}

export default Header;
