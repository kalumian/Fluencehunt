// import Library
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Pages
import Home from "./components/Pages/Home/Home";
import Organize_zone from "./components/Pages/Organize_Zone/Organize_zone";
import Discovery_zone from "./components/Pages/Discovery_zone/Discovery_zone";
import Analyse_zone from "./components/Pages/Analyse_zone/Analyse_zone";
import Pricing from "./components/Pages/Pricing/Pricing";
import Payment from "./components/Pages/Payment/Payment";
import Login from "./components/Pages/Login/Login";
import Sign_up_step1 from "./components/Pages/Sign_up_step1/Sign_up_step1";
import Sign_up_step2 from "./components/Pages/Sign_up_step2/Sign_up_step2";
import Coming_Soon from "./components/Pages/Coming_Soon/Coming_Soon";
import Dashboard from "./components/Pages/Dashboard/Dashboard";

// Import Style
import "./Style/all.scss";
import "./general.css";
function App() {
  return (
    <main>
      <Router className="App">
        <Route component={Home} path="/" exact={true} />
        <Route component={Organize_zone} path="/organize-zone" exact />
        <Route component={Discovery_zone} path="/discovery-zone" exact />
        <Route component={Analyse_zone} path="/analyse-zone" exact />
        <Route component={Pricing} path="/pricing" exact />
        <Route component={Payment} path="/payment" exact />
        <Route component={Coming_Soon} path="/coming-soon" exact />
        <Route component={Dashboard} path="/dashboard" exact />
        <Route component={Login} path="/login" exact />
        <Route component={Sign_up_step1} path="/sign-up-1" exact />
        <Route component={Sign_up_step2} path="/sign-up-2" exact />
      </Router>
    </main>
  );
}

export default App;
