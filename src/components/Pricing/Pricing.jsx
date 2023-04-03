import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-container">
          <div>
            <h2 className="heading-pricing">Our Special Offers</h2>
          </div>
          <div className="pricing-body-list">
            <div className="pricing-body">
              <div>
                <img
                  className="pricing-key"
                  src="/img/icon/pricing/pricing1.svg"
                  alt=""
                />
              </div>
              <h3>BASIC PLAN</h3>
              <p className="price-pricing text-xxxl">$25</p>
              <div className="pricing-list">
                <ul>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">2 hours of exercises</p>
                  </li>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">Free consultation to coach</p>
                  </li>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">Access to The FitClub Community</p>
                  </li>
                </ul>
              </div>
              <div className="pricing-link">
                <a href="#" className="pricing-link-item">
                  See More Benefits
                </a>
                <i className="icon-sm fa-solid fa-arrow-right" />
              </div>
              <button className="btn btn-Shared btn-pricing">Join Now</button>
            </div>
            <div className="pricing-body">
              <div>
                <img
                  className="pricing-key"
                  src="/img/icon/pricing/pricing1.svg"
                  alt=""
                />
              </div>
              <h3>PREMIUM PLAN</h3>
              <p className="price-pricing text-xxxl">$30</p>
              <div>
                <ul>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">5 hours of exercises</p>
                  </li>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">Free consultation to coach</p>
                  </li>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">Access to The FitClub Community</p>
                  </li>
                </ul>
              </div>
              <div className="pricing-link">
                <a href="#" className="pricing-link-item">
                  See More Benefits
                </a>
                <i className="icon-sm fa-solid fa-arrow-right" />
              </div>
              <button className="btn btn-Shared btn-pricing">Join Now</button>
            </div>
            <div className="pricing-body">
              <div>
                <img
                  className="pricing-key"
                  src="/img/icon/pricing/pricing1.svg"
                  alt=""
                />
              </div>
              <h3>PRO PLAN</h3>
              <p className="price-pricing text-xxxl">$35</p>
              <div className="pricing-list">
                <ul>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">7 hours of exercises</p>
                  </li>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">Free consultation to coach</p>
                  </li>
                  <li className="pricing-list-item">
                    <img
                      className="pricing-icon"
                      src="/img/icon/pricing/icon-pricing.svg"
                      alt=""
                    />
                    <p className="text-sm">Access to The FitClub Community</p>
                  </li>
                </ul>
              </div>
              <div className="pricing-link">
                <a href="#" className="pricing-link-item">
                  See More Benefits
                </a>
                <i className="icon-sm fa-solid fa-arrow-right" />
              </div>
              <button className="btn btn-Shared btn-pricing">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
