import "../styles/developmentPage.css";

function DevelopmentPage() {
  return (
    <div className="app-container">
      <div className="content">
        <div className="logo-section">
          <h1 className="logo-text">DRIV</h1>
        </div>

        <div className="tagline">
          <p className="tagline-main">There are plenty of tools for racing.</p>
          <p className="tagline-main">There are none built for drifting.</p>
          <p className="tagline-emphasis">Driv exists to change that.</p>
        </div>

        <div className="description">
          <p className="description-text">
            The drifting world is scattered across social media feeds, outdated
            bracket tools, random streaming links, and endless spreadsheets.
            Fans chase content. Drivers build portfolios in isolation.
            Organizers patch together workflows that weren't designed for the
            sport.
          </p>
          <p className="description-text highlight">
            Driv brings it all under one roof.
          </p>
          <p className="description-text">
            A drifting-first platform built by someone who's lived the sport for
            over a decade. Driver profiles that preserve legacies. Live brackets
            designed for tandem battles. Event hubs with embedded streams.
            Season standings across every series. Media galleries that showcase
            the culture.
          </p>
          <p className="description-text highlight">
            This isn't just an app. It's an ecosystem.
          </p>
        </div>

        <div className="coming-soon">
          <h2 className="coming-soon-title">Coming Soon</h2>
          <p className="coming-soon-text">
            We're building something special. The future of drifting starts
            here.
          </p>
          <div className="status-indicator">
            <span className="pulse"></span>
            <span className="status-text">In Development</span>
          </div>
        </div>

        <div className="footer">
          <p className="footer-text">
            Built with 🏎️💨 by the drifting community
          </p>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentPage;
