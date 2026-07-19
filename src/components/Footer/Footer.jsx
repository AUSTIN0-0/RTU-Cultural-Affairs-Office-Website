import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';
import GoogleMap from '../GoogleMap/GoogleMap';
import { IconFacebook } from '../Common/Icons';

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="wrap footer-grid">

        {/* Section 1 — About the school */}
        <div className="footer-about">
          <img src="/media/RTU-WHITE-LOGO.png" alt="Rizal Technological University" />
          <p>
            The Cultural Affairs office cultivates innovative, creative, and multi-talented artists who preserve and
            foster Filipino national culture across RTU's Boni and Pasig campuses.
          </p>
          <ul className="footer-quicklinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/troupes/kultura">Troupes</Link></li>
            <li><Link to="/public-information">Public Information</Link></li>
            <li><a href="mailto:cultural@rtu.edu.ph">cultural@rtu.edu.ph</a></li>
          </ul>
          <div className="footer-social" aria-label="Social media links">
            <a href="https://www.facebook.com/RTUCAC" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook />
            </a>
          </div>
        </div>

        {/* Section 2 — Contact form */}
        <div>
          <h4 className="footer-heading">Leave Us a Message</h4>
          <ContactForm />
        </div>

        {/* Section 3 — School location */}
        <div>
          <h4 className="footer-heading">School Location</h4>
          <GoogleMap />
        </div>

      </div>

      <div className="footer-bottom">Copyright © 2026 · Rizal Technological University</div>
    </footer>
  );
}
