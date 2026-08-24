import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1 className="logo">Angelica Jonsson Landström</h1>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // X icon
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#fc6c26"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="#fc6c26"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* NAV */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button
            onClick={() => {
              setActiveSection("home");
              setMenuOpen(false);
            }}
          >
            Hem
          </button>
          <button
            onClick={() => {
              setActiveSection("CV");
              setMenuOpen(false);
            }}
          >
            CV
          </button>
          <button
            onClick={() => {
              setActiveSection("skills");
              setMenuOpen(false);
            }}
          >
            Skills
          </button>
          <button
            onClick={() => {
              setActiveSection("projects");
              setMenuOpen(false);
            }}
          >
            Projekt
          </button>
          <button
            onClick={() => {
              setActiveSection("contact");
              setMenuOpen(false);
            }}
          >
            Kontakt
          </button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="content">
        {activeSection === "home" && (
          <section className="section">
            <h2>Välkommen</h2>
            <p>
              Välkommen till min portfolio! Här kan du läsa mer om mig, mina
              färdigheter, projekt jag har arbetat med och hur du kan kontakta
              mig.
            </p>

            <h2>Om mig</h2>
            <p>
              Efter fem år inom digital marknadsföring insåg jag att många av de
              utmaningar jag stötte på krävde mer än strategiskt tänkande — de
              krävde kod. Det väckte en nyfikenhet som snabbt blev ett tydligt
              nästa steg: att byta inriktning och utbilda mig till
              frontendutvecklare. Teknik och programmering har alltid
              fascinerat mig, och idag kombinerar jag min erfarenhet av att
              förstå användare, data och digitala flöden med min kompetens inom
              modern webbutveckling. Det gör att jag kan se både helheten och
              detaljerna: vad som engagerar, vad som konverterar och hur man
              bygger lösningar som faktiskt fungerar i praktiken.
            </p>
          </section>
        )}

        {activeSection === "CV" && (
          <section className="section">
            <h2>CV</h2>
            <p>
              Här kan du ladda ner mitt CV:
              <a href="/Website/CV.pdf" download className="cv-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fc6c26"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="12" x2="12" y2="18" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </a>
            </p>
          </section>
        )}

        {activeSection === "skills" && (
          <section className="section">
            <h2>Skills</h2>
            <ul>
              <li>React, TypeScript, JavaScript</li>
              <li>HTML, CSS, Tailwind</li>
              <li>Node.js, Express, SQL</li>
              <li>Git, GitHub, API‑design</li>
            </ul>
          </section>
        )}

        {activeSection === "projects" && (
          <section className="section">
            <h2>Projekt</h2>
            <p>
              Här kommer jag lägga upp mina projekt från utbildningen och egna
              projekt.
            </p>
            <ul>
              <li>Airbean API – backend grupprojekt</li>
              <li>React‑appar från JavaScript 3</li>
              <li>Homelab‑projekt med Docker</li>
            </ul>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="section">
            <h2>Kontakt</h2>
            <p>Du kan nå mig via:</p>
            <ul>
              <li>
                <a href="mailto:Angelica.jonsson24@gmail.com">
                  Angelica.jonsson24@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/angelica-jonsson-landström-88482b1b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn‑profil
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AngelicaJL97"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub: AngelicaJL97
                </a>
              </li>
            </ul>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Angelica Jonsson Landström</p>
      </footer>
    </div>
  );
}

export default App;
