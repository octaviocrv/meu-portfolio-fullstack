import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProjectDetail({ project }) {
  const highlightSentence =
    'Por ser um projeto empresarial sob NDA e em produção, o código-fonte não está disponível publicamente.';

  const renderOverviewText = (text) => {
    if (typeof text !== 'string') return text;

    const sentenceIndex = text.indexOf(highlightSentence);
    if (sentenceIndex === -1) return text;

    const before = text.slice(0, sentenceIndex);
    const after = text.slice(sentenceIndex + highlightSentence.length);

    return (
      <>
        {before}
        <span className="project-details__nda-highlight">{highlightSentence}</span>
        {after}
      </>
    );
  };

  return (
    <>
      <Header />

      <section className="project-cs-hero">
        <div className="project-cs-hero__content animate-fade-in-up">
          <h1 className="heading-primary">{project.title}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{project.heroDesc}</p>
          </div>
        </div>
      </section>

      <section className="project-details">
        <div className="main-container">
          
          <div className="project-details__showcase-img-cont animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src={project.image}
              alt={`Demonstração do projeto ${project.title}`}
              className="project-details__showcase-img"
            />
          </div>

          <div className="project-details__grid">
            
            <div className="project-details__main-col">
              <div className="project-details__section">
                <h3 className="project-details__content-title">Visão Geral do Projeto</h3>
                <div className="project-details__desc">
                  {project.overview.map((para, i) => (
                    <p key={i} className="project-details__desc-para">
                      {renderOverviewText(para)}
                    </p>
                  ))}
                </div>
              </div>

              {Array.isArray(project.challenges) && project.challenges.length > 0 && (
                <div className="project-details__section">
                  <h3 className="project-details__content-title">Principais Desafios & Soluções</h3>
                  <div className="project-details__challenges-grid">
                    {project.challenges.map((challenge, i) => (
                      <div key={challenge.title || i} className="project-details__challenge-card">
                        <h4 className="project-details__challenge-title">{challenge.title}</h4>
                        <p className="project-details__challenge-desc">{challenge.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="project-details__side-col">
              
              <div className="project-details__side-card">
                <h3 className="project-details__content-title project-details__content-title--sm">Ferramentas Utilizadas</h3>
                <div className="project-details__tech-list">
                  {project.tools.map((tool) => (
                    <span key={tool} className="project-details__tech-pill">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-details__side-card">
                <h3 className="project-details__content-title project-details__content-title--sm">Ações</h3>
                <div className="project-details__links-container">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="btn btn--theme project-details__btn-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Acessar Aplicação &rarr;
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      className="btn btn--outline-dark project-details__btn-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver Código Fonte
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}