"use client";
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface HeaderProps {
  dict: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  lang: 'en' | 'it';
}

export default function Header({ dict, lang }: HeaderProps) {
  const [theme, setTheme] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleThemeChange = () => {
    setTheme((prev) => !prev);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Remove the current locale from the pathname
    // pathname is like "/en" or "/en/some/path"
    const segments = pathname.split('/').filter(Boolean); // Remove empty strings
    const pathWithoutLocale = segments.slice(1).join('/'); // Remove first segment (current locale)
    const newPath = pathWithoutLocale ? `/${newLocale}/${pathWithoutLocale}` : `/${newLocale}`;
    router.push(newPath);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <header className="main-header">
      <div className="logo"><h3>Riccardo De Clara</h3></div>
      <nav>
        <ul className="nav-links col-3">
          <li><a href="#about">{dict.about}</a></li>
          <li><a href="#experience">{dict.experience}</a></li>
          <li><a href="#skills">{dict.skills}</a></li>
          <li><a href={`mailto:${process.env.GMAIL_USER}?subject=Riccardo%20De%20Clara%20-%20Portfolio`} target="_blank" className="btn-primary small">{dict.contact}</a></li>
          <li className="d-flex">
            <i className="bi bi-translate px-1 d-flex align-items-center">
            </i>
            <div className="select-wrapper">
              <select
                id="select-lang"
                className="form-select form-select-sm"
                value={lang}
                onChange={handleLanguageChange}
              >
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
