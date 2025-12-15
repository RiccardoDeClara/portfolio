"use client";
import { useEffect, useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState(true);

  const handleThemeChange = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  useEffect(() => (
    console.log(theme)
  ), [theme])

  return (
    <header className="main-header">
      <div className="logo"><h3>Riccardo De Clara</h3></div>
      <nav>
        <ul className="nav-links col-2">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact" className="btn-primary small">Contact</a></li>
          <li className="d-flex">
            <i className="bi bi-translate px-1 d-flex align-items-center">
            </i>
            <div className="select-wrapper">
              <select id="select-lang" className="form-select form-select-sm">
                <option value="en">EN</option>
                <option value="it">IT</option>
              </select>
            </div>
          </li>
          <li onClick={handleThemeChange} className=''>
            <i className={`bi bi-sun-fill button-theme ${theme ? 'd-none' : ''}`} style={{ fontSize: '15px', padding: '5px' }}></i>
            <i className={`bi bi-moon-fill button-theme ${!theme ? 'd-none' : ''}`} style={{ fontSize: '15px', padding: '5px' }}></i>
          </li>
        </ul>
      </nav>
    </header >
  );
}
