import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div>
            <div className="header-text">
              <h1>Get Your Perfect Workout with The Perfect Trainers</h1>
              <p className="text-lg text-family">
                In here we will help you to shape and build your ideal body and
                live up your life to the fullest
              </p>
            </div>
            <div className="header-item">
              <div>
                <p className="text-xxl text-family">140+</p>
                <p className="text-sm text-family">Expert Coach</p>
              </div>
              <div>
                <p className="text-xxl text-family">978+</p>
                <p className="text-sm text-family">Members Joined</p>
              </div>
              <div>
                <p className="text-xxl text-family">50+</p>
                <p className="text-sm text-family">Fitness Programs</p>
              </div>
            </div>
            <div>
              <button className="btn btn-Shared btn-hover text-family">
                Get Started
              </button>
            </div>
          </div>
          <div className="header-img">
            <div className="header-img-banner">
              <img className="img-header" src="/img/header/banner1.png" alt="" />
            </div>
            <div className="header-heart">
              <div className="header-heart-icon">
                <i className="icon icon-header fa-solid fa-heart" />
              </div>
              <div className="header-heart-text">
                <p className="text-lg text-family">Heart Rate</p>
                <p className="text-lg text-family">
                  <span className="heart">8142 </span> bpm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
