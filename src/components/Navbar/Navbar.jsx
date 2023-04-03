import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          {/* Navimg */}
          <div className="nav-img">
            <img src="/img/header/banner2.svg" alt="" />
          </div>
          {/* Brand */}
          <div className="brand">
            <p className="brand-title font-bold">Fitness</p>
          </div>
          {/* Nav Links */}
          <ul className="navbar-nav text-family">
            <li className="nav-item">
              <a href = "#" className="nav-link text-lg font-bold">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href = "#" className="nav-link text-lg">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href = "#" className="nav-link text-lg">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a href = "#" className="nav-link text-lg">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a href = "#" className="nav-link text-lg">
                Contact
              </a>
            </li>
          </ul>
          {/* Action Buttons  */}
          <div className="navbar-action text-family">
            <a href = "#" className="btn btn-nav">
              Join Now
            </a>
          </div>
          {/* Menu button */}
          <div className="navbar-menu">
            <button className="btn">
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
