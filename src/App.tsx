import "./index.css";

export default function App() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <span className="tag">CRIAÇÃO DE SITES PROFISSIONAIS</span>

            <h1>
              Seu negócio perde clientes todos os dias por não ter um site
              profissional.
            </h1>

            <p>
              Enquanto concorrentes vendem 24h por dia na internet, sua empresa
              continua invisível.
            </p>

            <div className="price-box">
              <span className="small">Criação de site profissional</span>
              <h2>R$ 397,00</h2>
            </div>

            <div className="buttons">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                className="btn-primary"
              >
                QUERO MEU SITE
              </a>

              <a href="#benefits" className="btn-secondary">
                VER BENEFÍCIOS
              </a>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Gabriel"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits" id="benefits">
        <h2>Por que um site muda seu negócio?</h2>

        <div className="cards">
          <div className="card">
            <h3>Mais Autoridade</h3>
            <p>
              Empresas com site passam mais confiança e profissionalismo.
            </p>
          </div>

          <div className="card">
            <h3>Mais Clientes</h3>
            <p>
              Landing pages convertem visitantes em compradores diariamente.
            </p>
          </div>

          <div className="card">
            <h3>Vendas 24h</h3>
            <p>
              Seu negócio funcionando mesmo enquanto você dorme.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparison">
        <h2>Sem site vs Com site profissional</h2>

        <div className="comparison-grid">
          <div className="comparison-box bad">
            <h3>❌ Sem site</h3>

            <ul>
              <li>Pouca credibilidade</li>
              <li>Cliente desiste</li>
              <li>Aparência amadora</li>
              <li>Menos vendas</li>
            </ul>
          </div>

          <div className="comparison-box good">
            <h3>✅ Com site</h3>

            <ul>
              <li>Mais autoridade</li>
              <li>Mais conversão</li>
              <li>Visual profissional</li>
              <li>Mais clientes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="Gabriel"
          />
        </div>

        <div className="about-content">
          <span className="tag">SOBRE MIM</span>

          <h2>Especialista em posicionamento digital.</h2>

          <p>
            Crio sites modernos e páginas de vendas focadas em conversão,
            autoridade e crescimento para empresas que querem se destacar na
            internet.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="btn-primary"
          >
            SOLICITAR SITE
          </a>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer">
        <div className="offer-box">
          <span className="tag">OFERTA LIMITADA</span>

          <h2>Seu site profissional por apenas R$ 397</h2>

          <ul>
            <li>✔ Design moderno</li>
            <li>✔ Versão mobile</li>
            <li>✔ Botão WhatsApp</li>
            <li>✔ Estrutura de vendas</li>
            <li>✔ Entrega rápida</li>
          </ul>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="btn-primary big"
          >
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>
          Seu negócio pode parecer pequeno hoje. Sua presença digital não
          precisa.
        </h3>
      </footer>
    </div>
  );
}