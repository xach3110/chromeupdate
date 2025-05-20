// src/components/WhyUpdate.jsx
import React from 'react';
import '../style/WhyUpdate.css';

const steps = [
  {
    id: 1,
    header: 'Security',
    title: 'Reliable protection',
    description:
      'Chrome watches over your security by automatically installing updates, so all the latest features and fixes are available to you as soon as they’re released.',
  },
  {
    id: 2,
    header: 'Features',
    title: 'Cutting-edge Google tools',
    description:
      'With each update you get powerful new tools—ad blocking, built-in page translation, enhanced privacy controls, and much more.',
  },
  {
    id: 3,
    header: 'Performance',
    title: 'Speed improvements',
    description:
      'Optimizations and fixes in every release make Chrome faster: pages load instantly and use your system resources more efficiently.',
  },
];

export const WhyUpdate = () => (
  <section className="version-section">
    <div className="version-section__inner">
      <h2 className="version-section__title">Why update Chrome</h2>
      <p className="version-section__description">
        Thanks to regular updates containing new features and security fixes, Chrome
        lets you browse faster and safer than ever before.
      </p>
      <div className="version-section__steps">
        {steps.map(({ id, header, title, description }) => (
          <div className="step-card" key={id}>
            <div className="step-card__header">{header}</div>
            <div className="step-card__title">{title}</div>
            <p className="step-card__text">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
