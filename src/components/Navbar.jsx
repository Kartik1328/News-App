import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="text-white fs-4">Tazza</span>{" "}
            <span className="badge bg-warning text-black fs-4">Khabar</span>
          </a>
          
            <span className="navbar-toggler-icon"></span>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  className="nav-link text-white"
                  onClick={() => setCategory("technology")}
                  style={{ cursor: "pointer" }}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link text-white"
                  onClick={() => setCategory("business")}
                  style={{ cursor: "pointer" }}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link text-white"
                  onClick={() => setCategory("health")}
                  style={{ cursor: "pointer" }}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link text-white"
                  onClick={() => setCategory("sports")}
                  style={{ cursor: "pointer" }}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link text-white"
                  onClick={() => setCategory("entertainment")}
                  style={{ cursor: "pointer" }}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link text-white"
                  onClick={() => setCategory("science")}
                  style={{ cursor: "pointer" }}
                >
                  Science
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
