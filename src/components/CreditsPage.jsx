import { creditsContributors, creditsIntro } from '../data/credits'

function CreditsPage() {
  return (
    <main className="app-shell credits-shell">
      <section className="hero-panel credits-hero">
        <div className="hero-copy">
          <p className="eyebrow">Sprite and portrait credits</p>
          <h1>Credits for the Pokemon art used in this app</h1>
          <p className="hero-description">
            Credits for the PMD-style sprites and portraits used in this app.
          </p>
        </div>

        <div className="hero-orb">
          <div className="orb-card credits-orb">
            <p>{creditsIntro.license}</p>
            <div className="credits-links">
              <a href={creditsIntro.licenseUrl} target="_blank" rel="noreferrer">
                View license
              </a>
              <a href={creditsIntro.sourceUrl} target="_blank" rel="noreferrer">
                Open sprite source
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="panel credits-panel">
        <div className="panel-heading">
          <div>
            <p className="section-kicker">Attribution</p>
            <h2>Contributors and asset breakdown</h2>
          </div>
        </div>

        <p className="panel-copy">
          Source repository:{' '}
          <a href={creditsIntro.sourceUrl} target="_blank" rel="noreferrer">
            {creditsIntro.sourceLabel}
          </a>
        </p>

        <div className="credits-grid">
          {creditsContributors.map((contributor) => (
            <article key={`${contributor.name}-${contributor.discord}`} className="credit-card">
              <div className="credit-head">
                <h3>{contributor.name}</h3>
                <p className="credit-meta">Discord: {contributor.discord}</p>
                {contributor.contact ? (
                  <p className="credit-meta">
                    Contact:{' '}
                    {contributor.contact.startsWith('http') ? (
                      <a href={contributor.contact} target="_blank" rel="noreferrer">
                        {contributor.contact}
                      </a>
                    ) : (
                      contributor.contact
                    )}
                  </p>
                ) : null}
              </div>

              <div className="credit-sections">
                {contributor.sections.map((section) => (
                  <section key={`${contributor.name}-${section.type}`} className="credit-section">
                    <p className="credit-section-title">{section.type}</p>
                    <ul className="credit-list">
                      {section.entries.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CreditsPage
