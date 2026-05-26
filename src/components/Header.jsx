import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Começo', href: '/' },
    { label: 'Quem sou eu', href: '/#about' },
    { label: 'O que eu construo', href: '/#projects' },
    { label: 'Bora conversar', href: '/#contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container" onClick={() => (location.href = '/')}>
          <div className="header__logo-img-cont">
            <img
              src="/assets/jpeg/Me.jpeg"
              alt="Foto de Octávio Augusto"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Octávio Augusto</span>
        </div>

        <div className="header__main">
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href} className="header__link-wrapper">
                <a href={link.href} className="header__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="header__main-ham-menu-cont"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src="/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu${menuOpen ? ' d-none' : ''}`}
            />
            <img
              src="/assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close${menuOpen ? '' : ' d-none'}`}
            />
          </div>
        </div>
      </div>

      <div className={`header__sm-menu${menuOpen ? ' header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            {navLinks.map((link) => (
              <li key={link.href} className="header__sm-menu-link">
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
