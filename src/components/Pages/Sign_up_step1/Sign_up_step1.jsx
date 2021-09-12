import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "../../Child_Components/General_Components/Header/Header";
import { Link } from "react-router-dom";
import image from "../../../assets/log in/Group 1508.png";
import google_image from "../../../assets/google.png";
import facebook_image from "../../../assets/facebook.png";

function Sign_up_step1() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign Up | Step 1</title>
      </Helmet>
      <Header />
      <section className="Sign_up_step1">
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
            <div className="state">Step 1:</div>
            <h1>Sign Up to Fluency</h1>
            <div className="row">
              <div className="input">Sign up with Google</div>
              <img src={google_image} alt="google_image" />
            </div>
            <div className="row">
              <div className="input">Sign up with Facebook</div>
              <img src={facebook_image} alt="google_image" />
            </div>
            <span className="or">or</span>
            <form action="">
              <div className="row">
                <label htmlFor="email-addres-login-page">Your Email</label>
                <input type="email" />
              </div>
              <div className="row">
                <label htmlFor="password-login-page">Set Password</label>
                <input type="password" />
              </div>
              <div className="sign-in">
                <button>Sign In</button>
              </div>
              <h2>
                Already have an account ?<Link to="/login">Sign in</Link>
              </h2>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sign_up_step1;
