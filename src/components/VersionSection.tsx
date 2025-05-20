// src/components/VersionSection.jsx
import '../style/VersionSection.css';

const steps = [
  {
    id: 1,
    header: 'STEP 1',
    title: 'Open Chrome on your computer',
    link: {
      text: 'Instructions for Android and iOS ↗',
      href: '#',
    },
  },
  {
    id: 2,
    header: 'STEP 2',
    title:
      'In the upper right corner of the screen, find the "Customize and control Google Chrome" icon:',
  },
  {
    id: 3,
    header: 'STEP 3',
    title: 'Click Help > About Chrome',
  },
];

export const VersionSection = () => (
  <section className="version-section">
    <div className="version-section__inner">
      <h2 className="version-section__title">
        How to find out your version of Chrome
      </h2>

      <div className="version-section__steps">
        {steps.map(({ id, header, title, link }) => (
          <div className="step-card" key={id}>
            <div className="step-card__header">{header}</div>
            <div className="step-card__title">{title}</div>
            {link && (
              <a
                className="step-card__link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
