import Header from '../components/Header'
import Footer from '../components/Footer'
import { projectsData } from '../data/projects'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.BASE_URL
const asset = (path) => `${baseUrl}${path.replace(/^\//, '')}`

const skills = [
  { name: 'Desenvolvimento de Plataformas', type: 'hard' },
  { name: 'Soluções Web Personalizadas', type: 'soft' },
  { name: 'Integração de Sistemas', type: 'hard' },
  { name: 'Automação de Processos', type: 'soft' },
  { name: 'APIs & Serviços', type: 'hard' },
  { name: 'Arquitetura de Software', type: 'soft' },
  { name: 'Desenvolvimento Full Stack', type: 'hard' },
  { name: 'Performance & Escalabilidade', type: 'hard' },
];

const qualifications = [
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'PUC Minas',
    icon: asset('/assets/svg/pucminas.png'),
  },
  {
    degree: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'SENAI BH CECOTEG',
    icon: asset('/assets/svg/senai.jpeg'),
  },
]

const socialIcons = [
  { src: asset('/assets/png/linkedin-ico.png'), href: 'https://www.linkedin.com/in/octaviocrv' },
  { src: asset('/assets/png/github-ico.png'), href: 'https://github.com/octaviocrv' },
  // { src: '/assets/png/twitter-ico.png', href: '#' },
  // { src: '/assets/png/yt-ico.png', href: '#' },
  { src: asset('/assets/png/insta-ico.png'), href: 'https://www.instagram.com/octaviocrv', last: true },
]

const aboutCarouselPhotos = [
  asset('/assets/svg/eu-fund-branco-de-preto.svg'),
  asset('/assets/svg/eu-fundo-branco-cruzado-preto.svg'),
]

const ABOUT_CAROUSEL_INTERVAL_MS = 10000


const IconExternal = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
)

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1.18-.02-2.14-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
  </svg>
)

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
  </svg>
)

const IconLock = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
  </svg>
)

const IconLaptop = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="12" rx="1.6" stroke="currentColor" strokeWidth="2" />
    <path
      d="M2.4 18.4h19.2l-1.1 1.9a1.6 1.6 0 0 1-1.38.8H4.88a1.6 1.6 0 0 1-1.38-.8l-1.1-1.9z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      className="badge-icon__code"
      d="M8.6 8.3 6.4 10l2.2 1.7M15.4 8.3l2.2 1.7-2.2 1.7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect className="badge-icon__cursor" x="11.3" y="9" width="1.4" height="3.4" rx="0.4" fill="currentColor" />
  </svg>
)

const IconWhatsapp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.03 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.6A11.96 11.96 0 0 0 12.02 24h.01C18.66 24 24 18.63 24 12c0-3.2-1.25-6.2-3.48-8.52zM12.03 21.9h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.68.95.98-3.59-.23-.37A9.88 9.88 0 0 1 2.12 12c0-5.47 4.45-9.92 9.91-9.92 2.65 0 5.14 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.47-4.44 9.92-9.9 9.92zm5.43-7.44c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.76.97-.94 1.17c-.17.2-.35.22-.64.07-.3-.15-1.24-.46-2.37-1.46a8.92 8.92 0 0 1-1.64-2.03c-.17-.3-.02-.46.13-.61.13-.12.3-.32.44-.48.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.5.7.3 1.25.49 1.67.62.7.22 1.33.19 1.84.11.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
  </svg>
)

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.33V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.3zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
  </svg>
)

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="m2 7 10 7L22 7" />
  </svg>
)

const IconCopy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const handleImageSpotlight = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
  e.currentTarget.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
}

const CONTACT_EMAIL = 'octavio.peregrino80@gmail.com'

const contactMarqueeItems = [
  'Vamos conversar',
  'Disponível para novos projetos',
  'Bora criar algo incrível',
]

export default function Home() {
  const [aboutPhotoIndex, setAboutPhotoIndex] = useState(0)
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2000)
    } catch {
      // clipboard indisponível — o link de e-mail continua funcionando normalmente
    }
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAboutPhotoIndex((prev) => (prev + 1) % aboutCarouselPhotos.length)
    }, ABOUT_CAROUSEL_INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    if (revealEls.length === 0) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      revealEls.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__content">

          <div className="home-hero__badge animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="home-hero__badge-icon" aria-hidden="true">
              <IconLaptop />
            </span>
            <span>Full Stack Developer</span>
          </div>

          <h1 className="heading-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Oi, eu sou o <span className="text-highlight">Octávio</span>
          </h1>

          <div className="home-hero__info animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-primary">
              Desenvolvedor de Sistemas Jr. com foco em aplicações web, automações e integração com APIs.
              Ajudo empresas a escalar resultados transformando ideias em produtos digitais de alta performance.
              Desenvolvo interfaces modernas e construo automações que conectam necessidades de negócio a soluções práticas e eficientes.
            </p>
          </div>

          <div className="home-hero__cta animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn btn--theme home-hero__cta-btn">
              Ver Projetos
            </a>
            <a href="#contact" className="btn btn--outline home-hero__cta-btn">
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="home-hero__socials animate-fade-in-right">
          {socialIcons.map((s, i) => (
            <div key={i} className="home-hero__social">
              <a
                href={s.href}
                className={`home-hero__social-icon-link${s.last ? ' home-hero__social-icon-link--bd-none' : ''}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={s.src} alt="icon" className="home-hero__social-icon" />
              </a>
            </div>
          ))}
        </div>

        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med reveal">
            <span className="heading-sec__main">Sobre mim</span>
            <span className="heading-sec__sub">
              Conheça um pouco mais sobre minha trajetória e minhas habilidades.
            </span>
          </h2>

          <div className="about__content">

            <div className="about__photo-container reveal reveal--d1">
              <div className="about__photo-frame">
                <img
                  key={aboutCarouselPhotos[aboutPhotoIndex]}
                  src={aboutCarouselPhotos[aboutPhotoIndex]}
                  alt="Foto de Octávio Augusto"
                  className="about__photo about__photo--carousel"
                />
              </div>

              <div
                className="about__photo-indicators"
                style={{ '--carousel-duration': `${ABOUT_CAROUSEL_INTERVAL_MS}ms` }}
                aria-label="Indicadores do carrossel de fotos"
              >
                {aboutCarouselPhotos.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`about__photo-indicator${index === aboutPhotoIndex ? ' about__photo-indicator--active' : ''}`}
                    onClick={() => setAboutPhotoIndex(index)}
                    aria-label={`Mostrar foto ${index + 1}`}
                    aria-current={index === aboutPhotoIndex ? 'true' : undefined}
                  />
                ))}
              </div>

              <div className="about__content-qualifications" style={{ marginTop: '4rem' }}>
                <h3 className="about__content-title">Formação Acadêmica</h3>
                <div className="qualifications">
                  {qualifications.map((qual) => (
                    <div key={qual.institution} className="qualifications__item">
                      <img
                        src={qual.icon}
                        alt={`Logo ${qual.institution}`}
                        className="qualifications__icon"
                        loading="lazy"
                      />
                      <div className="qualifications__text">
                        <p className="qualifications__degree">{qual.degree}</p>
                        <p className="qualifications__institution">{qual.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about__content-qualifications" style={{ marginTop: '4rem' }}>
                <h3 className="about__content-title">Idiomas</h3>
                <div className="qualifications">
                  <div className="qualifications__item">
                    <img
                      src={asset('/assets/png/estados-unidos.png')}
                      alt="Ícone idioma Inglês"
                      className="qualifications__icon"
                      loading="lazy"
                    />
                    <div className="qualifications__text">
                      <p className="qualifications__degree">Inglês</p>
                      <p className="qualifications__institution">B2 - Intermediário Superior</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__info-container">
              <div className="about__content-main reveal reveal--d2">
                <h3 className="about__content-title">Muito prazer!</h3>
                <div className="about__badges">
                  <span className="about__badge">📍 Belo Horizonte</span>
                  <span className="about__badge">⚙️ Integrações & Automação</span>
                  <span className="about__badge">💻 Web & Sistemas</span>
                  <span className="about__badge">🧩 Resolvedor de problemas</span>
                  <span className="about__badge">🧠 IA & Automação Inteligente</span>
                </div>
                <div className="about__content-details">
                  <p className="about__content-details-para">
                    Hoje, atuo diretamente na interseção entre tecnologia e resolução de problemas, <strong>transformando necessidades reais</strong> em soluções digitais funcionais, bem estruturadas e pensadas para gerar valor.
                  </p>

                  <p className="about__content-details-para">
                    Com base em <strong>Belo Horizonte (MG)</strong>, desenvolvo projetos próprios desde a concepção até a implementação, unindo visão de negócio, experiência do usuário e tecnologia para construir soluções que façam sentido na prática.
                  </p>

                  <p className="about__content-details-para">
                    Mais do que desenvolver, busco compreender o contexto, identificar o que realmente precisa ser resolvido e encontrar uma abordagem eficiente para cada desafio.
                  </p>

                  <p className="about__content-details-para">
                    <strong>Tem um projeto ou uma ideia? Vamos conversar.</strong>
                  </p>
                </div>
                <a href="#contact" className="btn btn--med btn--theme dynamicBgClr about__cta-btn">
                  Contato <IconArrow />
                </a>
              </div>

              <div className="about__content-skills reveal reveal--d3" style={{ marginTop: '6rem' }}>
                <h3 className="about__content-title">Especialidades</h3>

                {/* SKILLS */}
                <div className="skills">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`skills__skill skills__skill--${skill.type}`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
                {/* FIM SKILLS */}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg reveal">
            <span className="heading-sec__main">Projetos</span>
            <span className="heading-sec__sub">
              Uma seleção dos meus principais projetos, do planejamento à entrega final.
            </span>
          </h2>

          {/* DESTAQUE — primeiro projeto */}
          {projectsData[0] && (
            <article className="projects__featured reveal">
              <div className="projects__featured-img-cont" onMouseMove={handleImageSpotlight}>
                <img
                  src={projectsData[0].image}
                  alt={projectsData[0].title}
                  className="projects__featured-img"
                  loading="lazy"
                />
              </div>

              <div className="projects__featured-body">
                <div className="projects__badges">
                  {projectsData[0].status && (
                    <span className="projects__badge projects__badge--live">
                      <IconCheck /> {projectsData[0].status}
                    </span>
                  )}
                  {projectsData[0].client && (
                    <span className="projects__badge projects__badge--cat">
                      Enterprise · {projectsData[0].client}
                    </span>
                  )}
                </div>

                <h3 className="projects__featured-title">{projectsData[0].title}</h3>
                <p className="projects__featured-desc">{projectsData[0].shortDesc}</p>

                {projectsData[0].tools && (
                  <div className="projects__tech">
                    {projectsData[0].tools.slice(0, 6).map((tool) => (
                      <span key={tool} className="projects__tech-pill">{tool}</span>
                    ))}
                  </div>
                )}

                {projectsData[0].results && (
                  <div className="projects__metrics">
                    {projectsData[0].results.map((result, idx) => (
                      <div key={idx} className="projects__metric">
                        <p className="projects__metric-value">{result.value}</p>
                        <p className="projects__metric-label">{result.metric}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="projects__featured-actions">
                  <Link to={`/project-${projectsData[0].id}`} className="projects__btn-primary">
                    Saber mais <IconArrow />
                  </Link>
                  {projectsData[0].isPrivate && (
                    <span className="projects__nda-note">
                      <IconLock /> Código privado (NDA)
                    </span>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* GRID — demais projetos */}
          <div className="projects__grid">
            {projectsData.slice(1).map((project, index) => (
              <article
                key={project.id}
                className={`projects__card reveal reveal--d${(index % 3) + 1}`}
              >
                <div className="projects__card-img-cont" onMouseMove={handleImageSpotlight}>
                  <span className="projects__card-index" aria-hidden="true">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__card-img"
                    loading="lazy"
                  />
                </div>
                <div className="projects__card-body">
                  <h4 className="projects__card-title">{project.title}</h4>
                  <p className="projects__card-desc">{project.shortDesc}</p>

                  {project.tools && (
                    <div className="projects__tech projects__tech--sm">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="projects__tech-pill projects__tech-pill--sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="projects__card-links">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__icon-link"
                        title="Ver online"
                        aria-label="Ver online"
                      >
                        <IconExternal />
                      </a>
                    )}
                    {project.codeLink && project.codeLink !== '#' && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__icon-link"
                        title="Código no GitHub"
                        aria-label="Código no GitHub"
                      >
                        <IconGithub />
                      </a>
                    )}
                    <Link to={`/project-${project.id}`} className="projects__more-link">
                      Detalhes <IconArrow />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact sec-pad">
        <div className="contact__bg" aria-hidden="true">
          <span className="contact__orb contact__orb--1"></span>
          <span className="contact__orb contact__orb--2"></span>
          <span className="contact__grid-overlay"></span>
          <span className="contact__ghost-text">Contato</span>
        </div>

        <div className="main-container contact__container">
          <div className="contact__intro reveal">
            <span className="contact__status">
              <span className="contact__status-dot" aria-hidden="true"></span>
              Disponível para novos projetos
            </span>

            <h2 className="contact__heading">
              Vamos <span className="text-highlight">conversar</span>?
            </h2>
            <span className="contact__subtitle">
              Seja para discutir arquitetura front-end, integrações de automação ou uma nova oportunidade, escolha a melhor forma de falar comigo.
            </span>
          </div>

          <div className="contact__layout">
            <div className="contact__signature reveal reveal--d1">
              <div className="contact__signature-text">
                <span className="contact__signature-label">Prefere o direto ao ponto?</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact__signature-link">
                  <IconEmail />
                  <span>{CONTACT_EMAIL}</span>
                  <IconArrow />
                </a>
              </div>

              <div className="contact__signature-actions">
                <button
                  type="button"
                  className={`contact__copy-btn${emailCopied ? ' contact__copy-btn--done' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {emailCopied ? <IconCheck /> : <IconCopy />}
                  <span>{emailCopied ? 'Copiado!' : 'Copiar e-mail'}</span>
                </button>

                <div className="contact__meta">
                  <span className="contact__meta-item">📍 Belo Horizonte, MG</span>
                  <span className="contact__meta-item">⏱️ Resposta em até 24h</span>
                </div>
              </div>
            </div>

            <div className="contact__quick">
              <a
                href="https://wa.me/5531989184698?text=Olá!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noreferrer"
                className="contact__card reveal reveal--d2"
                onMouseMove={handleImageSpotlight}
              >
                <span className="contact__card-index" aria-hidden="true">01</span>
                <div className="contact__card-body">
                  <div className="contact__card-icon whatsapp">
                    <IconWhatsapp />
                  </div>
                  <h3 className="contact__card-title">WhatsApp</h3>
                  <p className="contact__card-desc">Me chame para um papo rápido e direto.</p>
                  <span className="contact__card-link">Enviar mensagem <IconArrow /></span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/octaviocrv"
                target="_blank"
                rel="noreferrer"
                className="contact__card reveal reveal--d3"
                onMouseMove={handleImageSpotlight}
              >
                <span className="contact__card-index" aria-hidden="true">02</span>
                <div className="contact__card-body">
                  <div className="contact__card-icon linkedin">
                    <IconLinkedin />
                  </div>
                  <h3 className="contact__card-title">LinkedIn</h3>
                  <p className="contact__card-desc">Acompanhe minha trajetória e conexões.</p>
                  <span className="contact__card-link">Conectar <IconArrow /></span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__marquee" aria-hidden="true">
          <div className="contact__marquee-track">
            {[...contactMarqueeItems, ...contactMarqueeItems].map((item, i) => (
              <span className="contact__marquee-item" key={i}>
                {item}
                <span className="contact__marquee-dot">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}