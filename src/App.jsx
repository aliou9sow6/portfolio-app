import React, { useState } from 'react';
import Dossier from './components/Dossier';
import Accueil from './components/Accueil';

function App() {
  const [vue, setVue] = useState('accueil'); // 'accueil' | 'projets' | 'detail' | 'editer'
  const [projetSelectionne, setProjetSelectionne] = useState(null);

  const afficherDetail = (projet) => {
    setProjetSelectionne(projet);
    setVue('detail');
  };

  const afficherEdition = (projet) => {
    setProjetSelectionne(projet);
    setVue('editer');
  };

  const retourListe = () => {
    setProjetSelectionne(null);
    setVue('projets');
  };

  const allerAccueil = () => {
    setProjetSelectionne(null);
    setVue('accueil');
  };

  const allerProjets = () => {
    setProjetSelectionne(null);
    setVue('projets');
  };

  const allerContact = () => {
    setProjetSelectionne(null); 
    setVue('contact');
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo" onClick={allerAccueil} style={{ cursor: 'pointer' }}>
            <img
              src="/assets/logo.png"
              alt="Logo Portfolio"
              className="logo-image"
            />
            <span className="logo-dot" />
            <span className="logo-text">Groupe4</span>
          </div>

           {/* navigation */}
          <div className="header-nav">
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); allerAccueil(); }}>Accueil</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); allerProjets(); }}>Projets</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); allerContact(); }}>Contact</a>
          </div>

        </div>
      </header>

      <main className="app-main">
        {vue === 'accueil' ? (
          <Accueil />
        ) : (
          <Dossier
            vue={vue}
            projetSelectionne={projetSelectionne}
            onAfficherDetail={afficherDetail}
            onAfficherEdition={afficherEdition}
            onRetourListe={retourListe}
          />
        )}
      </main>

      <footer className="app-footer">
        <span>© 2024 Portfolio · Propulsé par React &amp; json-server</span>
      </footer>
    </div>
  );
}

export default App;
