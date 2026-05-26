const socialLinks = [
  { icon: '/assets/png/linkedin-ico.png', href: '#' },
  { icon: '/assets/png/github-ico.png', href: '#' },
  // { icon: '/assets/png/twitter-ico.png', href: '#' },
  // { icon: '/assets/png/yt-ico.png', href: '#' },
  { icon: '/assets/png/insta-ico.png', href: '#', last: true },
]

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer">
                  <img
                    src={s.icon}
                    alt="icon"
                    className={`main-footer__icon${s.last ? ' main-footer__icon--mr-none' : ''}`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Octávio Augusto</h4>
            <p className="main-footer__short-desc">
              Desenvolvedor Full Stack com experiência em projetos corporativos. Especializado em criar soluções que agregam valor real aos negócios.
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright {new Date().getFullYear()}. Octávio Augusto
        </div>
      </div>
    </footer>
  )
}
