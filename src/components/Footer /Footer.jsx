import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-brand">
            <p className="brand-title footer-heading">Fitness</p>
            <p>Fitney provide more than 60+ professional personal trainer</p>
          </div>
          <div className="footer-list">
            <div>
              <p className="text-lg footer-heading">Menu</p>
              <ul className="text-md">
                <li className="footer-lits-item">
                  <a href = "#">Home</a>
                </li>
                <li className="footer-lits-item">
                  <a href = "#">Trainers</a>
                </li>
                <li className="footer-lits-item">
                  <a href = "#">About</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg footer-heading">Programs</p>
              <ul className="text-md">
                <li className="footer-lits-item">
                  <a href = "#">Yoga</a>
                </li>
                <li className="footer-lits-item">
                  <a href = "#">Muscles</a>
                </li>
                <li className="footer-lits-item">
                  <a href = "#">Fitness</a>
                </li>
              </ul>
            </div>
            <div className="footer-info">
              <p className="text-lg footer-heading">Further Information</p>
              <ul className="text-md">
                <li className="footer-lits-item">
                  <a href = "#">Terms &amp; Conditions</a>
                </li>
                <li className="footer-lits-item">
                  <a href = "#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-app">
              <p className="text-lg footer-heading">Get App</p>
              <ul className="text-md">
                <li className="footer-lits-item">
                  <a href = "#">App Store</a>
                </li>
                <li className="footer-lits-item">
                  <a href = "#">Google Play Store</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
