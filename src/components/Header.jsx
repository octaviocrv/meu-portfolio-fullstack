import { useEffect, useRef, useState } from 'react'
import { asset } from '../utils/asset'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const tickingRef = useRef(false)
  const baseUrl = import.meta.env.BASE_URL

  const navLinks = [
    { label: 'Começo', href: baseUrl, id: 'home' },
    { label: 'Quem sou eu', href: `${baseUrl}#about`, id: 'about' },
    { label: 'O que eu construo', href: `${baseUrl}#projects`, id: 'projects' },
    { label: 'Bora conversar', href: `${baseUrl}#contact`, id: 'contact', cta: true },
  ]

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 40)

        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0)

        tickingRef.current = false
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.filter((l) => l.id !== 'home').map((l) => l.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })

        const nearTop = window.scrollY < (sections[0]?.offsetTop ?? Infinity) - 120
        if (nearTop) setActiveSection('home')
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__content">
        <div className="header__logo-container" onClick={() => (location.href = baseUrl)}>
          <div className="header__logo-img-cont">
            <img
              src={asset('/assets/svg/eu-sorrindo.svg')}
              alt="Foto de Octávio Augusto"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Octávio Augusto</span>
        </div>

        <div className="header__main">
          <nav aria-label="Navegação principal">
            <ul className="header__links">
              {navLinks.map((link) => (
                <li key={link.href} className="header__link-wrapper">
                  <a
                    href={link.href}
                    className={`header__link${link.cta ? ' header__link--cta' : ''}${
                      activeSection === link.id ? ' header__link--active' : ''
                    }`}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={`header__burger${menuOpen ? ' header__burger--active' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <span className="header__progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <div
        className={`header__sm-overlay${menuOpen ? ' header__sm-overlay--active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`header__sm-menu${menuOpen ? ' header__sm-menu--active' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="header__sm-menu-link"
                style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.06}s` : '0s' }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={activeSection === link.id ? 'header__sm-menu-link--active' : ''}
                >
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
