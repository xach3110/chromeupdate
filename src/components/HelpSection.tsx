
import '../style/HelpSection.css';

export const HelpSection = () => (
  <section className="help-section">
    <div className="help-section__inner">
      <h2 className="help-section__title">Need help?</h2>
      <p className="help-section__text">
        Still have questions? Visit our Help Center for detailed information about Chrome updates and additional features.
      </p>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="help-section__btn"
      >
        Go to Help Center ↗
      </a>
    </div>
  </section>
);
