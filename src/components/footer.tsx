
import '../style/footer.css';

export const Footer = () => (
  <footer className="footer">
    <hr className="footer__divider" />

    {/* Links grid */}
    <div className="footer__links container">
      <div className="footer__col">
        <h4 className="footer__col-title">Products</h4>
        <ul className="footer__col-list">
          <li><a href="#">Other platforms</a></li>
          <li><a href="#">Chromebook ↗</a></li>
          <li><a href="#">Chromecast ↗</a></li>
          <li><a href="#">Chrome Web Store ↗</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__col-title">Enterprise</h4>
        <ul className="footer__col-list">
          <li><a href="#">Download Chrome Browser ↗</a></li>
          <li><a href="#">Chrome Browser for Enterprise ↗</a></li>
          <li><a href="#">Chrome devices ↗</a></li>
          <li><a href="#">ChromeOS ↗</a></li>
          <li><a href="#">Google Cloud ↗</a></li>
          <li><a href="#">Google Workspace ↗</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__col-title">Education</h4>
        <ul className="footer__col-list">
          <li><a href="#">Chrome Browser ↗</a></li>
          <li><a href="#">Devices ↗</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__col-title">For developers &amp; partners</h4>
        <ul className="footer__col-list">
          <li><a href="#">Chromium ↗</a></li>
          <li><a href="#">ChromeOS ↗</a></li>
          <li><a href="#">Chrome Web Store ↗</a></li>
          <li><a href="#">Chrome Experiments ↗</a></li>
          <li><a href="#">Chrome (Beta) ↗</a></li>
          <li><a href="#">Chrome for developers ↗</a></li>
          <li><a href="#">Chrome Canary ↗</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__col-title">Support</h4>
        <ul className="footer__col-list">
          <li><a href="#">Chrome Help Center ↗</a></li>
          <li><a href="#">Update Chrome</a></li>
          <li><a href="#">Tips for using Chrome</a></li>
          <li><a href="#">Google Chrome Blog ↗</a></li>
        </ul>
      </div>
    </div>

    <hr className="footer__divider" />

    {/* Bottom row */}
    <div className="footer__bottom container">
      <div className="footer__brand">
        {/* You can insert the Google logo here */}
      </div>
      <nav className="footer__nav">
        <a href="#">Terms &amp; Privacy</a>
        <a href="#">About Google</a>
        <a href="#">Google Services</a>
      </nav>
      <div className="footer__actions">
        <a href="#" className="footer__help">
          <span>Help</span>
        </a>
        <button className="footer__lang">
          English – United States <span className="footer__lang-arrow">▾</span>
        </button>
      </div>
    </div>
  </footer>
);
