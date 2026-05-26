import Header from '../components/Header'
import Footer from '../components/Footer'
import { projectsData } from '../data/projects'
import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.BASE_URL
const asset = (path) => `${baseUrl}${path.replace(/^\//, '')}`

const skills = [
  { name: 'React', type: 'tech' },
  { name: 'Resolução de Problemas', type: 'soft' },
  { name: 'TypeScript', type: 'tech' },
  { name: 'Comunicação Clara', type: 'soft' },
  { name: 'JavaScript', type: 'tech' },
  { name: 'Foco em Resultados', type: 'soft' },
  { name: 'Node.js', type: 'tech' },
  { name: 'Visão de Negócio', type: 'soft' },
  { name: 'Next.js', type: 'tech' },
  { name: 'Adaptabilidade', type: 'soft' },
  { name: 'Banco de Dados', type: 'tech' },
  { name: 'C#', type: 'tech' },
  { name: 'N8N / Integrações', type: 'tech' }
]

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

const IconWave = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 11V5a2 2 0 1 1 4 0v6" />
    <path d="M12 11V4a2 2 0 1 1 4 0v7" />
    <path d="M16 11V6a2 2 0 1 1 4 0v8c0 3.3-2.7 6-6 6h-2.2a6 6 0 0 1-5-2.7L4 13.5a2 2 0 1 1 3.2-2.4L8 12" />
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

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="home-hero">
      <div className="home-hero__content">
        
        <div className="home-hero__badge animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="home-hero__badge-icon" aria-hidden="true">
            <IconWave />
          </span>
          <span>Full Stack Developer</span>
        </div>

        <h1 className="heading-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Oi, eu sou o <span className="text-highlight">Octávio</span>
        </h1>
        
        <div className="home-hero__info animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-primary">
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
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">Sobre mim</span>
            <span className="heading-sec__sub">
              Conheça um pouco mais sobre minha trajetória e minhas habilidades.
            </span>
          </h2>

          <div className="about__content">

            <div className="about__photo-container">
              <img
                src={asset('/assets/jpeg/foto1.jpeg')}
                alt="Foto de Octávio Augusto"
                className="about__photo"
              />
            </div>

            <div className="about__info-container">
              <div className="about__content-main">
                <h3 className="about__content-title">Muito prazer!</h3>
                <div className="about__content-details">
                  <p className="about__content-details-para">
                    Sou um <strong>problema-solver</strong> e busco sempre transformar
                    problemas em soluções digitais. Tenho sólida experiência de sistemas legados
                    e entendo como conectar regras de negócio a interfaces que realmente funcionam.
                  </p>
                  <p className="about__content-details-para">
                    Além do desenvolvimento web tradicional, também crio integrações e automações
                    utilizando ferramentas para otimizar processos. Sinta-se à vontade
                    para entrar em <strong>contato</strong> comigo.
                  </p>
                </div>
                <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">
                  Contato
                </a>
              </div>

              <div className="about__content-skills" style={{ marginTop: '6rem' }}>
                <h3 className="about__content-title">Minhas Habilidades</h3>

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
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projetos</span>
            <span className="heading-sec__sub">
              Uma seleção dos meus principais projetos, do planejamento à entrega final.
            </span>
          </h2>

          {/* DESTAQUE — primeiro projeto */}
          {projectsData[0] && (
            <article className="projects__featured">
              <div className="projects__featured-img-cont">
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
            {projectsData.slice(1).map((project) => (
              <article key={project.id} className="projects__card">
                <div className="projects__card-img-cont">
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
      <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container">
          <h2 className="heading-sec__main heading-sec__main--lt">Vamos Conversar?</h2>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Seja para discutir arquitetura front-end, integrações de automação ou uma nova oportunidade, escolha a melhor forma de falar comigo.
          </span>

          <div className="contact__cards-container">

            <a
              href="https://wa.me/5531989184698?text=Olá!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              className="contact__card"
            >
              <div className="contact__card-icon whatsapp">
                <IconWhatsapp />
              </div>
              <h3 className="contact__card-title">WhatsApp</h3>
              <p className="contact__card-desc">Me chame para um papo rápido e direto.</p>
              <span className="contact__card-link">Enviar mensagem &rarr;</span>
            </a>

            <a
              href="https://www.linkedin.com/in/octaviocrv"
              target="_blank"
              rel="noreferrer"
              className="contact__card"
            >
              <div className="contact__card-icon linkedin">
                <IconLinkedin />
              </div>
              <h3 className="contact__card-title">LinkedIn</h3>
              <p className="contact__card-desc">Acompanhe minha trajetória e conexões.</p>
              <span className="contact__card-link">Conectar &rarr;</span>
            </a>

            <a
              href="mailto:octavio.peregrino80@gmail.com"
              className="contact__card"
            >
              <div className="contact__card-icon email">
                <IconEmail />
              </div>
              <h3 className="contact__card-title">E-mail</h3>
              <p className="contact__card-desc">Para propostas e assuntos mais detalhados.</p>
              <span className="contact__card-link">Escrever e-mail &rarr;</span>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}