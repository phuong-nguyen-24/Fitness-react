import "./Letter.css";

export default function Letter() {
  return (
    <section className="letter">
      <div className="container">
        <div className="letter-container">
          <div className="letter-text">
            <h2 className="letter-heading">Get The Latest Update From Us</h2>
            <p className="text-sm">
              Join our mailing list by entering your email for exclusive
              information
            </p>
          </div>
          <div className="letter-connet">
            <input
              className="letter-input"
              type="text"
              placeholder="Yourmail@gamil.com"
            />
            <button className="btn btn-Shared btn-letter">Get Update</button>
          </div>
        </div>
      </div>
    </section>
  );
}
