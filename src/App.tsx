import React, { useEffect, useState } from 'react';

interface MenuItem {
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}

const SAUDE_LINKS: MenuItem[] = [
  { label: 'Página Inicial', href: '/', icon: 'fa-home', active: true },
  { label: 'Acesso a Consultas e Exames', href: '/saude/consulta-exames.html', icon: 'fa-stethoscope' },
  { label: 'Acompanhe a Glicemia', href: '/saude/calculadora.html', icon: 'fa-heartbeat' },
  { label: 'Agenda', href: '/saude/agenda.html', icon: 'fa-calendar' },
  { label: 'O Que é? | Tipos', href: '/saude/oqueeh.html', icon: 'fa-question' },
  { label: 'Receitas', href: '/saude/receitas.html', icon: 'fa-cutlery' },
];

const DIREITOS_LINKS: MenuItem[] = [
  { label: 'Ações Judiciais (Medicamentos)', href: '/direitos/acoes-judiciais.html', icon: 'fa-balance-scale' },
  { label: 'Aposentadoria / BPC / LOAS', href: '/direitos/aposentadoria-bpc-loas.html', icon: 'fa-balance-scale' },
  { label: 'Canais de Denúncia e Reclamação', href: '/direitos/canais-denuncia.html', icon: 'fa-bullhorn' },
  { label: 'Como Solicitar Medicamentos (Fora da Relação Oficial)', href: '/direitos/medicamentos-fora-relacao.html', icon: 'fa-balance-scale' },
  { label: 'Critérios para Conseguir Medicamentos pela Justiça', href: '/direitos/criterios-justica.html', icon: 'fa-balance-scale' },
  { label: 'Defensoria Pública e Assistência Jurídica Gratuita', href: '/direitos/defensoria-publica.html', icon: 'fa-balance-scale' },
  { label: 'Diferenças entre Medicamentos Padronizados e Não Padronizados no SUS', href: '/direitos/padronizados.html', icon: 'fa-balance-scale' },
  { label: 'Direitos da Pessoa com Diabetes', href: '/direitos/direitos-diabetico.html', icon: 'fa-balance-scale' },
  { label: 'Direitos da Pessoa com Diabetes em Situação de Vulnerabilidade', href: '/direitos/vulnerabilidade.html', icon: 'fa-balance-scale' },
  { label: 'Incorporação de Novos Medicamentos ao SUS', href: '/direitos/incorporacao-conitec.html', icon: 'fa-balance-scale' },
  { label: 'Instrumentos Jurídicos Aplicáveis', href: '/direitos/instrumentos-juridicos.html', icon: 'fa-balance-scale' },
  { label: 'Medicamentos e Insumos Fornecidos pelo SUS', href: '/direitos/medicamentos-insumos-sus.html', icon: 'fa-medkit' },
  { label: 'Políticas Públicas para Pessoas com Diabetes', href: '/direitos/politicas-publicas.html', icon: 'fa-balance-scale' },
  { label: 'Responsabilidade do Estado', href: '/direitos/responsabilidade-estado.html', icon: 'fa-balance-scale' },
  { label: 'Tratamentos Não Disponibilizados pelo SUS', href: '/direitos/tratamentos-nao-disponibilizados.html', icon: 'fa-balance-scale' },
];

const LOGO_NAV_URL =
  'https://lh3.google.com/u/1/d/1AFkllEteK2G4I7QkAsqzwZrgo43DDGtE=w1878-h956-iv1?auditContext=prefetch';
const LOGO_AVATAR_URL =
  'https://lh3.google.com/u/1/d/1LXI0zimC6koiCi20q6CK9m6mwu5gSo7w=w1878-h956-iv1?auditContext=prefetch';

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* NAV SUPERIOR */}
      <nav className="topnav">
        <div className="topnav-left">
          <button className="hamburger" id="hamburger-btn" aria-label="Abrir menu" onClick={openMenu}>
            <i className="fa fa-bars"></i>
          </button>
          {!logoFailed ? (
            <img
              className="topnav-logo"
              src={LOGO_NAV_URL}
              alt="GLICO+"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="topnav-logo-fallback">
              <span className="plus-icon">+</span>
              <span>GLICO+</span>
            </div>
          )}
        </div>

        <div className="topnav-center">
          <a href="/" className="topnav-link active">
            <i className="fa fa-home"></i>
            <span>Início</span>
          </a>
          <a href="/saude/agenda.html" className="topnav-link">
            <i className="fa fa-calendar"></i>
            <span>Agenda</span>
          </a>
          <a href="/saude/calculadora.html" className="topnav-link">
            <i className="fa fa-heartbeat"></i>
            <span>Glicemia</span>
          </a>
          <a href="/saude/receitas.html" className="topnav-link">
            <i className="fa fa-cutlery"></i>
            <span>Receitas</span>
          </a>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`sidebar-overlay ${isMenuOpen ? 'open' : ''}`}
        id="overlay"
        onClick={closeMenu}
      ></div>

      {/* MENU LATERAL COMPLETO */}
      <aside className={`side-menu ${isMenuOpen ? 'open' : ''}`} id="side-menu">
        <div className="side-menu-header">
          {!logoFailed && <img src={LOGO_NAV_URL} alt="GLICO+" />}
          <span>GLICO+</span>
          <button className="side-menu-close" id="menu-close" aria-label="Fechar menu" onClick={closeMenu}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="side-menu-section">
          <div className="side-menu-label">Navegação &amp; Saúde</div>
          {SAUDE_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`side-menu-item ${item.active ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className={`fa ${item.icon}`}></i> {item.label}
            </a>
          ))}
        </div>

        <div className="side-menu-section">
          <div className="side-menu-label">Direitos &amp; SUS</div>
          {DIREITOS_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="side-menu-item"
              onClick={closeMenu}
            >
              <i className={`fa ${item.icon}`}></i> {item.label}
            </a>
          ))}
        </div>
      </aside>

      {/* FOTO DE CAPA */}
      <div className="cover-wrapper">
        <div className="cover-pattern"></div>
        <div className="cover-overlay"></div>
        <div className="heart-float">🩷</div>
        <div className="heart-float">🩷</div>
        <div className="heart-float">🩷</div>
        <div className="heart-float">🩷</div>
        <div className="heart-float">🩷</div>
        <div className="heart-float">🩷</div>
        <div className="heart-float">🩷</div>
        <div className="heart-float">🩷</div>
      </div>

      {/* CABEÇALHO DO PROJETO */}
      <div className="profile-block">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar">
            <img src={LOGO_AVATAR_URL} alt="GLICO+" />
          </div>
        </div>

        <div className="profile-info">
          <h1>GLICO+</h1>
          <p className="bio">
            Informação, acesso e apoio para quem vive com diabetes. Aqui você encontra tudo sobre
            insulina, direitos, tratamentos e muito mais. 🩷
          </p>
          <div className="profile-actions">
            <a
              className="btn-msg"
              href="https://www.instagram.com/glicomais_/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i> Instagram
            </a>
            <a
              className="btn-msg"
              href="https://wa.me/5519989802967?text=Ol%C3%A1%20Gostaria%20De%20Saber%20Mais,%20%20Vim%20Pela%20GlicoMais"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* CORPO / FEED */}
      <div className="page-body">
        <main>
          <div className="post-card">
            <div className="post-header">
              <div className="post-avatar-mini">
                <img src={LOGO_AVATAR_URL} alt="GLICO+" />
              </div>
              <div className="post-meta">
                <strong>GLICO+</strong>
              </div>
            </div>
            <p className="post-text">
              Você sabia que mais de <strong>16 milhões de brasileiros</strong> vivem com diabetes?
              Muitos deles não sabem que têm direito a insulina gratuita pelo SUS. O GLICO+ existe
              para te ajudar a entender e acessar esses direitos!
            </p>
            <div className="post-img-banner">
              <div>
                <h4>Insulina gratuita pelo SUS</h4>
                <p>Saiba o passo a passo para conseguir sua insulina gratuitamente na rede pública de saúde.</p>
                <a href="/direitos/medicamentos-insumos-sus.html">Ver medicamentos e insumos no SUS →</a>
              </div>
            </div>
          </div>

          <div className="post-card" style={{ animationDelay: '.15s' }}>
            <div className="post-header">
              <div className="post-avatar-mini">
                <img src={LOGO_AVATAR_URL} alt="GLICO+" />
              </div>
              <div className="post-meta">
                <strong>GLICO+</strong>
              </div>
            </div>
            <p className="post-text">
              <strong>Receita do dia:</strong> Bolo de canela sem açúcar que não vai desregular sua
              glicemia! Feito com adoçante culinário e farinha de amêndoas, é fofinho, saboroso e
              100% seguro para diabéticos.
            </p>
            <div className="post-img-banner">
              <div>
                <h4>Bolo de canela sem açúcar</h4>
                <p>Tempo de preparo: 40 min · Porções: 8 · Índice glicêmico: baixo</p>
                <a href="/saude/receitas.html">Ver receita completa →</a>
              </div>
            </div>
          </div>

          <div className="post-card" style={{ animationDelay: '.3s' }}>
            <div className="post-header">
              <div className="post-avatar-mini">
                <img src={LOGO_AVATAR_URL} alt="GLICO+" />
              </div>
              <div className="post-meta">
                <strong>GLICO+</strong>
              </div>
            </div>
            <p className="post-text">
              <strong>Direito no trabalho e benefícios:</strong> Você tem diabetes e quer entender
              quais são os seus direitos sociais, previdenciários e de acesso à saúde pelo SUS?
            </p>
            <div className="post-img-banner">
              <div>
                <h4>Seus direitos e acesso à Justiça</h4>
                <p>Consulte os guias completos sobre assistência jurídica gratuita, benefícios e medicamentos.</p>
                <a href="/direitos/direitos-diabetico.html">Explorar direitos →</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
