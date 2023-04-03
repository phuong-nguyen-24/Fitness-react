import "./Features.css";

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-container">
          <div className="features-text">
            <div>
              <h2>The Class You Will Get Here</h2>
              <p className="text-sm">
                Were consistently improving our offerings and services, and
                pride orselves on creating connections with our embers
                anddelivering the most personalized fitness experience possible
              </p>
            </div>
            <button className="btn btn-Shared btn-hover btn-features">
              Explore More
            </button>
          </div>
          <div className="features-img">
            <div>
              <img
                className="img-items"
                src="/img/features/festures1.png"
                alt=""
              />
              <img
                className="img-items"
                src="/img/features/features2.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-item"
                src="/img/features/features3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
