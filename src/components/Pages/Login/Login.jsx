import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "../../Child_Components/General_Components/Header/Header";
import { Link } from "react-router-dom";
import image from "./../../../assets/log in/Group 1508.png";

// Style
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function Login() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  const year = new Date().getFullYear();
  return (
    <>
      <Helmet>
        <title>Login | Fluencehunt</title>
      </Helmet>
      <Header />
      <section className="Login">
        <div className="content">
          <div className="forms">
            <div className="forms-content">
              <h1>Log in your account</h1>
              <p>
                Log in to access the latest insights experience for your social
                <br /> media performance.
              </p>
              <form action="">
                <div className="row">
                  <label htmlFor="email-addres-login-page">Email address</label>
                  <input type="email" />
                  <i class="far fa-envelope"></i>
                </div>
                <div className="row">
                  <label htmlFor="password-login-page">Password</label>
                  <input type="password" />
                  <i class="fas fa-lock"></i>
                </div>
                <div className="sign-in">
                  <div className="checkbox">
                    <span>
                      <FormControlLabel
                        control={<GreenCheckbox name="checkedG" />}
                      />
                      <p>keep me signed in</p>
                    </span>
                    <p>forget password</p>
                  </div>
                  <button>Sign In</button>
                </div>
                <h2>
                  Not registered yet ?{" "}
                  <Link to="/sign-up-1">Ceate new account</Link>
                </h2>
                <div className="c-">
                  <span>©{year} Fluencify right reserved.</span>
                  <span>Terms of Service . Privacy Policy</span>
                </div>
              </form>
            </div>
          </div>
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
        </div>
      </section>
    </>
  );
}

export default Login;
