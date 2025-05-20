// src/components/AutoUpdateSection.jsx
import '../style/AutoUpdateSection.css';
import logo from '../assets/chromelogo.svg'; // ваш логотип

export const AutoUpdateSection = () => {
  return (
    <section className="auto-update">
      <div className="auto-update__inner">
        <img src={logo} alt="Chrome Logo" className="auto-update__logo" />
        <h1 className="auto-update__title">
         Chrome updates automatically
        </h1>
        <p className="auto-update__text">
          Chrome automatically installs updates in the background, so you'll always have the latest security features.
        </p>
      </div>
    </section>
  );
};
