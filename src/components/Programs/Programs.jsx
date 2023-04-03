import "./Programs.css";

export default function Programs() {
  return (
    <section className="programs">
      <div className="container">
        <div className="programs-container">
          <div className="program-heading">
            <h2>Explore Our Programs To Shape You</h2>
          </div>
          <div className="program-body">
            <div className="program-item">
              <div className="program-img">
                <img
                  className="item-img"
                  src="/img/icon/program/pro1.svg"
                  alt=""
                />
              </div>
              <div>
                <div>
                  <h3>Strength Training</h3>
                </div>
                <p className="program-text text-sm">
                  In this program, you are trained to improve your strenght
                  through many exercises.
                </p>
              </div>
              <div className="program-joinnow">
                <a href="#" className="text-md">
                  Join Now
                </a>
                <i className="icon-sm fa-solid fa-arrow-right" />
              </div>
            </div>
            <div className="program-item">
              <div className="program-img">
                <img
                  className="item-img"
                  src="/img/icon/program/pro2.svg"
                  alt=""
                />
              </div>
              <div>
                <h3>Health Fitness</h3>
                <p className="program-text text-sm">
                  This program is designed for those who exercises omly for
                  their body fitness not body building.
                </p>
              </div>
              <div className="program-joinnow">
                <a href="#" className="text-md">
                  Join Now
                </a>
                <i className="icon-sm fa-solid fa-arrow-right" />
              </div>
            </div>
            <div className="program-item">
              <div className="program-img">
                <img
                  className="item-img"
                  src="/img/icon/program/pro3.svg"
                  alt=""
                />
              </div>
              <div>
                <h3>Cardio Training</h3>
                <p className="program-text text-sm">
                  In cardio training you are trained to do sequential moves in
                  range of 20 until 30 minutes.
                </p>
              </div>
              <div className="program-joinnow">
                <a href="#" className="text-md">
                  Join Now
                </a>
                <i className="icon-sm fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
