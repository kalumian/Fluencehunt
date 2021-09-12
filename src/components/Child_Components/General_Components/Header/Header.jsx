import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/Logo.png";

function Header() {
  const [StateDrop, setStateDrop] = useState(false);
  const [StateDrop2, setStateDrop2] = useState(false);
  const [StateDrop3, setStateDrop3] = useState(false);
  return (
    <header className="Header">
      <div className="container">
        <div className="logo-header">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li onClick={() => setStateDrop2(!StateDrop2)}>
              <span>Product</span>

              {StateDrop2 ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
              <ul
                className="dropdown-nav"
                style={{ display: StateDrop2 ? "flex" : "none" }}
              >
                <li>
                  <Link>Test</Link>
                </li>
                <li>
                  <Link>Test</Link>
                </li>
                <li>
                  <Link>Test</Link>
                </li>
              </ul>
            </li>
            <li onClick={() => setStateDrop3(!StateDrop3)}>
              <span>Why Flunencify</span>

              {StateDrop3 ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
              <ul
                className="dropdown-nav"
                style={{ display: StateDrop3 ? "flex" : "none" }}
              >
                <li>
                  <Link>Test</Link>
                </li>
                <li>
                  <Link>Test</Link>
                </li>
                <li>
                  <Link>Test</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
          <button>Try Beta</button>
        </nav>
        <div onClick={() => setStateDrop(!StateDrop)}>
          <span className="dropdown-button mr-16"></span>
        </div>
      </div>
      <div
        style={{ display: StateDrop ? "flex" : "none" }}
        className="dropdown"
      >
        <ul className="mt-6 pb-8">
          <li>
            <span onClick={() => setStateDrop2(!StateDrop2)}>
              Product{" "}
              {StateDrop2 ? (
                <i
                  className="fas fa-chevron-up"
                  onClick={() => setStateDrop2(!StateDrop2)}
                ></i>
              ) : (
                <i
                  className="fas fa-chevron-down"
                  onClick={() => setStateDrop2(!StateDrop2)}
                ></i>
              )}
            </span>
            <ul
              className="dropdown-nav"
              style={{ display: StateDrop2 ? "flex" : "none" }}
            >
              <li>
                <Link>Test</Link>
              </li>
              <li>
                <Link>Test</Link>
              </li>
              <li>
                <Link>Test</Link>
              </li>
            </ul>
          </li>
          <li>
            <span onClick={() => setStateDrop3(!StateDrop3)}>
              Why Flunencify{" "}
              {StateDrop3 ? (
                <i
                  className="fas fa-chevron-up"
                  onClick={() => setStateDrop3(!StateDrop3)}
                ></i>
              ) : (
                <i
                  className="fas fa-chevron-down"
                  onClick={() => setStateDrop3(!StateDrop3)}
                ></i>
              )}
            </span>
            <ul
              className="dropdown-nav"
              style={{ display: StateDrop3 ? "flex" : "none" }}
            >
              <li>
                <Link>Test</Link>
              </li>
              <li>
                <Link>Test</Link>
              </li>
              <li>
                <Link>Test</Link>
              </li>
            </ul>
          </li>{" "}
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <button>Try Beta</button>
        </ul>
      </div>
    </header>
  );
}

export default Header;
