import Footer_links from "./Footer_links";
import Logo from "../../../../assets/Logo.png";

function Footer() {
  return (
    <footer className="Footer">
      <div className="contaonrt-footer">
        <div className="row">
          <div className="footer-col">
            <ul>
              <Footer_links
                title={<img src={Logo} alt="logo-footer" />}
                data={[
                  { title: "About us", link: "" },
                  { title: "pricing", link: "/pricing" },
                  { title: "carrer", link: "/" },
                  { title: "Chrome extension", link: "/" },
                  { title: "Contact us", link: "/" },
                ]}
              />
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <h3>Features</h3>
              <Footer_links
                data={[
                  { title: "Discovery Zone", link: "/discovery-zone" },
                  { title: "Analyze zone", link: "/analyse-zone" },
                  { title: "Organize zone", link: "/organize-zone" },
                ]}
              />
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <Footer_links
                title="Resources"
                data={[
                  { title: "Blog", link: "/" },
                  { title: "Press", link: "/" },
                  { title: "Case Studies", link: "/" },
                  { title: "FAQ", link: "/" },
                  { title: "Support", link: "/" },
                ]}
              />
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <Footer_links
                title="Legal Pages"
                data={[
                  { title: "Privacy Policy", link: "/" },
                  { title: "Affiliate", link: "/" },
                  { title: "Terms and Conditions", link: "/" },
                ]}
              />
            </ul>
          </div>
          <div className="footer-col">
            <div className="social-links">
              <Footer_links
                title="Social"
                data={[
                  { title: "fab fa-facebook-f", link: "/" },
                  { title: "fab fa-linkedin-in", link: "/" },
                  { title: "fab fa-instagram", link: "/" },
                  { title: "fab fa-twitter", link: "/" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
