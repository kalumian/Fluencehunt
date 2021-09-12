// import style
import { useState } from "react";
import "./style.css";

function Sidebar() {
  const [stateButtonSidebar, setStateButtonSidebar] = useState(false);
  return (
    <>
      <div
        className="button-sidebar"
        onClick={() => setStateButtonSidebar(!stateButtonSidebar)}
      >
        {!stateButtonSidebar ? (
          <i class="fas fa-arrow-right"></i>
        ) : (
          <i class="fas fa-arrow-left"></i>
        )}
      </div>
      <aside className="sidebar">
        <div className="image">
          <img
            src="data:image/png;base64,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"
            alt="avatar-image2"
          />
          <i class="fas fa-certificate">
            <i class="fas fa-check"></i>
          </i>
        </div>

        <div className="title">
          <h1>
            harry bink <i class="fas fa-star"></i>
          </h1>
          <span>
            Harry Bink <i class="fas fa-hat-wizard"></i>
          </span>
        </div>

        <div className="statistics">
          <p>
            <span>219K</span>
            Followers
          </p>
          <p>
            <span>735</span>
            Following
          </p>
          <p>
            <span>3.6k</span>
            Post
          </p>
        </div>

        <div className="description">
          <p>
            Bink is another in the long line on Australian FMX riders. The
            Canberra naitve attended a...
          </p>
        </div>

        <div className="location">
          <i class="fas fa-map-marker-alt"></i>
          <p>London, Westminster City, UK</p>
        </div>
        <div className="buttons">
          <button>Stunt</button>
          <button>FMX</button>
        </div>
      </aside>
      <aside
        className="sidebar"
        style={{ display: stateButtonSidebar ? "flex" : "none" }}
      >
        <div className="image">
          <img
            src="data:image/png;base64,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"
            alt="avatar-image2"
          />
          <i class="fas fa-certificate">
            <i class="fas fa-check"></i>
          </i>
        </div>

        <div className="title">
          <h1>
            harry bink <i class="fas fa-star"></i>
          </h1>
          <span>
            Harry Bink <i class="fas fa-hat-wizard"></i>
          </span>
        </div>

        <div className="statistics">
          <p>
            <span>219K</span>
            Followers
          </p>
          <p>
            <span>735</span>
            Following
          </p>
          <p>
            <span>3.6k</span>
            Post
          </p>
        </div>

        <div className="description">
          <p>
            Bink is another in the long line on Australian FMX riders. The
            Canberra naitve attended a...
          </p>
        </div>

        <div className="location">
          <i class="fas fa-map-marker-alt"></i>
          <p>London, Westminster City, UK</p>
        </div>
        <div className="buttons">
          <button>Stunt</button>
          <button>FMX</button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
