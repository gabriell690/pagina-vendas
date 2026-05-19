 
 

 
import googleLogo from "./assets/logos/google.png";
import tiktokLogo from "./assets/logos/tiktok.png";
import shopifyLogo from "./assets/logos/shopify.png";
import hotmartLogo from "./assets/logos/hotmart.png";
import shopeeLogo from "./assets/logos/shopee.png";
import kiwifyLogo from "./assets/logos/kiwify.png";
import heroBg from "./assets/hero-bg.png";
import mercadolivreLogo from "./assets/logos/mercadolivre.png";
import "./App.css";
import { useEffect } from "react";
import {
  Globe,
  MonitorSmartphone,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function App() {

useEffect(() => {

  /* CURSOR */

  const glow = document.querySelector(".mouse-glow") as HTMLElement;
  const cursor = document.querySelector(".custom-cursor") as HTMLElement;

  const handleMouseMove = (e: MouseEvent) => {

    const x = e.clientX;
    const y = e.clientY;

    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    }

    if (cursor) {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }

  };

  window.addEventListener("mousemove", handleMouseMove);

  /* REVEAL */

  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {

    revealElements.forEach((element) => {

      const windowHeight = window.innerHeight;

      const elementTop =
        element.getBoundingClientRect().top;

      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }

    });

  };

  window.addEventListener("scroll", revealOnScroll);

  revealOnScroll();

  return () => {

    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );

    window.removeEventListener(
      "scroll",
      revealOnScroll
    );

  };

}, []);


  return (
    <div className="page">

<div className="mouse-glow"></div>
<div className="custom-cursor"></div>


<header className="navbar">

  <div className="nav-logo">
    Gabriel Batista
  </div>

  <nav className="nav-links">
    <a href="#servicos">Serviços</a>
    <a href="#projetos">Projetos</a>
    <a href="#contato">Contato</a>
  </nav>

  <a
    href="https://wa.me/5583999999999"
    target="_blank"
    className="nav-btn"
  >
    Solicitar site
  </a>

</header>


      {/* HERO */}
<section
  className="hero"
  style={{
    backgroundImage: `
      linear-gradient(
        to right,
        rgba(5,5,5,0.96) 15%,
        rgba(5,5,5,0.82) 40%,
        rgba(5,5,5,0.45) 70%,
        rgba(5,5,5,0.2) 100%
      ),
      url(${heroBg})
    `,
  }}
>

  <div className="hero-content">

    <h1>
    
<h1>
  Transforme sua presença digital
  em uma 
  <span> máquina de vendas.</span>
</h1>



    </h1>

    <p>
  
<p>
  Hoje, empresas que vendem mais possuem algo em comum:
  uma presença digital forte. Um site premium ou landing page
  bem construída 
  
  <span> aumenta autoridade, </span>
  
  gera mais confiança
  e potencializa suas vendas — seja no seu e-commerce,
  lançamento de infoproduto, escritório, empresa local
  ou <span> marca pessoal. </span>
</p>

    </p>

    <a
      href="https://wa.me/5583999999999"
      target="_blank"
      className="hero-btn"
    >
      Quero meu site agora
    </a>

  </div>

</section>

   
{/* LOGO MARQUEE */}
<section className="logo-marquee reveal delay-5">
  <div className="marquee-track">

    <img src={googleLogo} alt="Google" />
    <img src={tiktokLogo} alt="TikTok" />
    <img src={shopifyLogo} alt="Shopify" />
    <img src={hotmartLogo} alt="Hotmart" />
    <img src={shopeeLogo} alt="Shopee" />
    <img src={kiwifyLogo} alt="Kiwify" />
    <img src={mercadolivreLogo} alt="Mercado Livre" />

    {/* DUPLICA */}

    <img src={googleLogo} alt="Google" />
    <img src={tiktokLogo} alt="TikTok" />
    <img src={shopifyLogo} alt="Shopify" />
    <img src={hotmartLogo} alt="Hotmart" />
    <img src={shopeeLogo} alt="Shopee" />
    <img src={kiwifyLogo} alt="Kiwify" />
    <img src={mercadolivreLogo} alt="Mercado Livre" />

     {/* DUPLICA */}

    <img src={googleLogo} alt="Google" />
    <img src={tiktokLogo} alt="TikTok" />
    <img src={shopifyLogo} alt="Shopify" />
    <img src={hotmartLogo} alt="Hotmart" />
    <img src={shopeeLogo} alt="Shopee" />
    <img src={kiwifyLogo} alt="Kiwify" />
    <img src={mercadolivreLogo} alt="Mercado Livre" />
     {/* DUPLICA */}

    <img src={googleLogo} alt="Google" />
    <img src={tiktokLogo} alt="TikTok" />
    <img src={shopifyLogo} alt="Shopify" />
    <img src={hotmartLogo} alt="Hotmart" />
    <img src={shopeeLogo} alt="Shopee" />
    <img src={kiwifyLogo} alt="Kiwify" />
    <img src={mercadolivreLogo} alt="Mercado Livre" />

  </div>
</section>

      {/* BENEFITS */}
      <section className="benefits reveal delay-2" id="benefits">
        <div className="section-header">
          <span className="section-tag">ESTRUTURA PREMIUM</span>
          <h2>Seu site precisa vender antes mesmo do atendimento.</h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon">
              <Globe />
            </div>

            <h3>Autoridade Digital</h3>

            <p>
              Um site profissional aumenta instantaneamente a percepção de valor
              da sua marca.
            </p>
          </div>

          <div className="benefit-card">
            <div className="icon">
              <MonitorSmartphone />
            </div>

            <h3>Experiência Premium</h3>

            <p>
              Design moderno, responsivo e otimizado para transmitir confiança.
            </p>
          </div>

          <div className="benefit-card">
            <div className="icon">
              <TrendingUp />
            </div>

            <h3>Conversão</h3>

            <p>
              Landing pages criadas estrategicamente para gerar mais contatos e
              vendas.
            </p>
          </div>

          <div className="benefit-card">
            <div className="icon">
              <ShieldCheck />
            </div>

            <h3>Presença Profissional</h3>

            <p>
              Sua empresa online 24h com aparência de marca consolidada.
            </p>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="showcase reveal delay-3">
        <div className="showcase-left">
          <span className="section-tag">POSICIONAMENTO</span>

          <h2>
            Empresas fortes possuem presença digital forte.
          </h2>

          <p>
            Hoje, a percepção de valor começa antes do primeiro contato.
            Clientes analisam sua presença online antes de comprar.
          </p>

          <ul>
            <li>✔ Visual premium</li>
            <li>✔ Estrutura moderna</li>
            <li>✔ Carregamento rápido</li>
            <li>✔ Layout focado em conversão</li>
          </ul>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            COMEÇAR AGORA
          </a>
        </div>

        <div className="showcase-right">
          <div className="glass-card">
            <span>VISUAL PREMIUM</span>
            <h3>Landing pages com aparência de empresa high ticket.</h3>
          </div>

          <div className="glass-card">
            <span>ESTRATÉGIA</span>
            <h3>
              Estrutura criada para aumentar autoridade e percepção de valor.
            </h3>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer reveal delay-4">
        <div className="offer-box">
          <span className="offer-badge">
            Vagas limitadas este mês
          </span>

          <h2>
            Criação completa do seu site profissional por apenas:
          </h2>

          <div className="offer-price">
            <span>R$</span>
            <h1>397</h1>
          </div>

          <div className="offer-items">
            <div>✔ Design premium</div>
            <div>✔ Versão mobile</div>
            <div>✔ Integração WhatsApp</div>
            <div>✔ Estrutura moderna</div>
            <div>✔ Deploy online</div>
            <div>✔ Otimização visual</div>
          </div>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary big-btn"
          >
            SOLICITAR MEU SITE
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>
          Seu negócio pode parecer pequeno hoje.
          <br />
          Sua presença digital não precisa.
        </h2>

        <p>
          © 2026 Gabriel Batista — Criação de sites e landing pages premium.
        </p>
      </footer>
    </div>
  );
}