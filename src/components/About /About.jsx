import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-video">
            <iframe
              className="video-about"
              width={950}
              height="100%"
              src="https://www.youtube.com/embed/g_bMfP6_TOw"
              title="Health Club Gym Promo Video| Motivational Video"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="about-text">
            <div>
              <h2>Why Choose Us?</h2>
              <p className="text-sm">
                Choose your favourite class and start now. Remember, the only
                bad workout is the one you
              </p>
            </div>
            <div className="about-text-item">
              <ul>
                <li className="about-list">
                  <i className="icon-arrow fa-solid fa-circle-check" />
                  <p className="text-lg">Over 140+ expert coach</p>
                </li>
                <li className="about-list">
                  <i className="icon-arrow fa-solid fa-circle-check" />
                  <p className="text-lg">
                    Train smarter and faster than before
                  </p>
                </li>
                <li className="about-list">
                  <i className="icon-arrow fa-solid fa-circle-check" />
                  <p className="text-lg">1 free program for new member</p>
                </li>
                <li className="about-list">
                  <i className="icon-arrow fa-solid fa-circle-check" />
                  <p className="text-lg">Reliable partners</p>
                </li>
              </ul>
            </div>
            <button className="btn btn-Shared btn-hover">See More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
