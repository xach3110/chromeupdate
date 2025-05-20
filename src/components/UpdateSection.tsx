
import '../style/UpdateSection.css';
import screenshot from '../assets/screen.png'; // ваш скриншот

export const UpdateSection = () => {
  return (
    <section className="update-section">
      <h2 className="update-section__title">How to update Chrome</h2>
      <div className="update-section__inner">
        {/* Левая колонка с текстом */}
        <div className="update-section__content">
          <h3 className="update-section__subtitle">Automatic updates</h3>
          <p className="update-section__text">
            Chrome monitors for updates. If there is a new update, it will install automatically after you close and reopen the browser.
          </p>
          <a
            href="#"
            className="update-section__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Additional information ↗
          </a>
        </div>

        {/* Правая колонка с изображением */}
        <div className="update-section__image-wrapper">
          <img
            src={screenshot}
            alt="Скриншот процесса обновления Chrome"
            className="update-section__image"
          />
        </div>
      </div>
    </section>
  );
};
