import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "../../Child_Components/General_Components/Header/Header";
import image from "../../../assets/log in/Group 1508.png";

function Sign_up_step2() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign Up | Step 2</title>
      </Helmet>
      <Header />
      <section className="Sign_up_step2">
        <div className="landing">
          <img src={image} alt="image" />
          <h2>
            Powerful and Easy to Use
            <br />
            Social Media Analytics
          </h2>
          <p>
            See how social media marketing can drive your
            <br />
            business forward. Takes just two minutes to sign in.
          </p>
          <span>
            <i class="fas fa-arrow-left"></i>
            <i class="fas fa-arrow-right"></i>
          </span>
        </div>
        <div className="forms">
          <div className="forms-content">
            <div className="state">Step 2 : User & Company infos</div>
            <h1>Account details</h1>
            <form action="">
              <div className="row">
                <label htmlFor="Name-addres-sign-page-2">Your Name *</label>
                <input type="text" id="Name-sign-page-2" />
              </div>
              <div className="row">
                <label htmlFor="Company-sign-page-2">Company name *</label>
                <input type="text" />
              </div>
              <div className="row">
                <label htmlFor="Industry-sign-page-2">Industry *</label>
                <input type="text" />
              </div>
              <div className="row">
                <label htmlFor="Industry-sign-page-2">Your role *</label>
                <input type="text" />
              </div>
              <div className="sign-in">
                <button>Finish</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sign_up_step2;
