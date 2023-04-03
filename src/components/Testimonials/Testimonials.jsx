import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-container">
          <div className="testimonials-text">
            <div>
              <h2>What They Say About Us</h2>
              <p className="text-lg testimonials-text-item">
                I made the right choice by choosing The Fitclub and by choosing
                the right plan and program i already achieved my ideal body!
              </p>
              <p className="text-lg">
                I made the right choice by choosing The Fitclub and by choosing
                the right plan and program i already achieved my ideal body!
              </p>
            </div>
            <div className="testimonials-name">
              <p className="text-xl name-testti">Matthew Hendrickson</p>
              <a className="text-sm" href = "#">
                Enterepeniur
              </a>
            </div>
          </div>
          <div className="testimonials-img">
            <div className="testimonials-icon">
              <div className="testimonial-icon-arrow">
                <i className="icon-sm icon-arrow fa-solid fa-arrow-left" />
              </div>
              <div className="testimonial-icon-arrow">
                <i className="icon-sm icon-arrow fa-solid fa-arrow-right" />
              </div>
            </div>
            <div>
              <img
                className="testimonials-avata"
                src="/img/testimonials/testimonials1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
