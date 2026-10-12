import { useEffect, useState } from "react";
import {
  Check,
  Cross,
  Clock3,
  Facebook,
  HeartPulse,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/jmamu-hero_c8ab2fc5.webp";
const careImage = "/manus-storage/async-images/Agk3oJ8Vw01SfBRzygsML3/image-2.webp";
const communityImage = "/manus-storage/jmamu-facade_799c38bb.webp";
const secondSpaceImage = "/manus-storage/jmamu-second-space_2c9bb662.webp";
const logoImage = "/manus-storage/logo-jmamu-transparent_bcc751c6.webp";
const whatsappLink = "https://wa.me/244930242472?text=Ol%C3%A1%20Farm%C3%A1cia%20JMAMU%2C%20preciso%20de%20uma%20informa%C3%A7%C3%A3o.";
const legalName = "JMAMU COMÉRCIO GERAL E PRESTAÇÃO DE SERVIÇOS (SU),Lda";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Contactos", href: "#contactos" },
];

const trustItems = [
  {
    title: "Aconselhamento próximo",
    text: "A nossa equipa ajuda a encontrar respostas simples e responsáveis para as necessidades do dia a dia, sempre com escuta e discrição.",
  },
  {
    title: "Duas localizações em Cabinda",
    text: "Duas portas abertas em pontos de referência da cidade para que o cuidado esteja mais perto de casa, do trabalho e da família.",
  },
  {
    title: "Horários pensados para si",
    text: "Abrimos cedo e prolongamos o atendimento até à noite, acompanhando o ritmo real das pessoas e das suas famílias.",
  },
  {
    title: "Cuidado com confiança",
    text: "Trabalhamos com rigor, privacidade e uma relação humana que valoriza cada pessoa para além da receita.",
  },
];

const services = [
  { icon: Stethoscope, number: "01", title: "Dispensa e orientação", text: "Apoio cuidadoso para compreender a sua medicação e utilizá-la com segurança." },
  { icon: HeartPulse, number: "02", title: "Cuidados do dia a dia", text: "Soluções para bem-estar, prevenção e acompanhamento de toda a família." },
  { icon: Sparkles, number: "03", title: "Dermocosmética", text: "Produtos selecionados para cuidar da pele com confiança e simplicidade." },
  { icon: ShieldCheck, number: "04", title: "Higiene e bebé", text: "Essenciais para a higiene, conforto e cuidado dos mais pequenos." },
  { icon: Cross, number: "05", title: "Primeiros cuidados", text: "Uma seleção prática para ter apoio quando mais precisa, em casa ou em viagem." },
  { icon: MessageCircle, number: "06", title: "Reservas por contacto", text: "Ligue ou escreva para confirmar disponibilidade antes de se deslocar." },
];

const locations = [
  {
    label: "Localização",
    name: "Simulambuco",
    address: ["Subida da praça do Cabassango", "Bairro Simulambuco", "Município de Liambo - Cabinda"],
    hours: "07h30 — 21h00",
    query: "Subida da praça do Cabassango, Simulambuco, Cabinda",
  },
  {
    label: "Localização",
    name: "Rua de Timor",
    address: ["Rua de Timor (Descida da Cadeia Civil)", "Município de Cabinda - Cabinda"],
    hours: "08h00 — 22h00",
    query: "Rua de Timor, Cabinda, Angola",
  },
];

function scrollToId(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTrust, setOpenTrust] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <header className={`site-header ${isVisible ? "header-ready" : ""}`}>
        <a className="brand" href="#home" aria-label={`${legalName} — início`} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark brand-logo-mark" aria-hidden="true"><img src={logoImage} alt="" /></span>
          <span className="brand-copy"><strong>{legalName}</strong></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-contact" href="tel:+244930242472"><Phone size={15} /> 930 242 472</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <span className="eyebrow">Navegação</span>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <div className="mobile-menu-footer">
            <span>Atendimento em Cabinda</span>
            <a href="tel:+244930242472">930 242 472</a>
          </div>
        </div>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="kicker-line" /> Farmácia de proximidade · Cabinda</div>
              <h1>Cuidar de si<br /><em>é estar perto.</em></h1>
              <p className="hero-lead">Confiança, orientação e cuidado todos os dias — em duas localizações pensadas para a sua rotina.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#localizacoes">Encontrar uma farmácia</a>
                <a className="button button-quiet" href="#sobre">Conhecer a JMAMU</a>
              </div>
              <div className="hero-meta"><span>ABERTO TODOS OS DIAS</span><span className="meta-dot" /><span>07H30 — 22H00</span></div>
            </div>
            <div className="hero-image-wrap">
              <div className="hero-image-frame"><img src={heroImage} alt="Interior da Farmácia JMAMU com balcão e prateleiras de produtos de saúde" fetchPriority="high" decoding="async" /></div>
              <div className="hero-image-caption"><span>Saúde com uma relação humana</span></div>
              <div className="hero-side-note"><span className="vertical-text">FARMÁCIA JMAMU · CABINDA</span></div>
            </div>
          </div>
          <div className="hero-bottom-line"><span>Saúde · confiança · proximidade</span><a href="#confia" aria-label="Descer para a secção de confiança">Continuar</a></div>
        </section>

        <section className="trust-section section-pad" id="confia">
          <div className="section-intro reveal"><span className="section-number">A nossa forma de cuidar</span><span className="accent-rule" /><h2>Quando precisa de cuidado,<br /><em>merece encontrar presença.</em></h2></div>
          <div className="trust-grid">
            <div className="trust-image reveal"><img src={careImage} alt="Profissional de farmácia a conversar com uma cliente" loading="lazy" decoding="async" /><div className="image-stamp"><span>JMAMU<br />DESDE SEMPRE<br />AO SEU LADO</span></div></div>
            <div className="trust-content reveal">
              <p className="large-intro">Mais do que dispensar produtos, queremos tornar cada visita mais clara, tranquila e próxima.</p>
              <div className="accordion" role="list">
                {trustItems.map((item, index) => {
                  const open = openTrust === index;
                  return <div className={`accordion-item ${open ? "accordion-open" : ""}`} key={item.title} role="listitem">
                    <button type="button" aria-expanded={open} aria-controls={`trust-panel-${index}`} onClick={() => setOpenTrust(open ? -1 : index)}>
                      <span>{item.title}</span>
                    </button>
                    <div id={`trust-panel-${index}`} className="accordion-panel" role="region"><p>{item.text}</p></div>
                  </div>;
                })}
              </div>
              <p className="transition-line"><span>O cuidado começa numa conversa.</span></p>
            </div>
          </div>
        </section>

        <section className="statement-section" id="sobre">
          <div className="statement-inner reveal"><span className="section-number">Sobre a JMAMU</span><h2>Uma farmácia que conhece<br /><em>a vida à sua volta.</em></h2><p>Estamos em Cabinda para acompanhar pessoas reais, com respostas acessíveis e uma atenção que não termina no balcão.</p><a className="text-link" href="#contactos">Fale connosco</a></div>
        </section>

        <section className="value-section section-pad">
          <div className="value-grid">
            <div className="value-copy reveal"><span className="section-number">O nosso compromisso</span><h2>Rigor no que fazemos.<br /><em>Calma na forma como cuidamos.</em></h2><p>Da primeira pergunta ao último detalhe, juntamos conhecimento técnico e proximidade para que se sinta acompanhado. Porque cuidar bem também é explicar, ouvir e estar disponível.</p><div className="value-points"><div><Check size={16} /><span>Orientação responsável</span></div><div><Check size={16} /><span>Atendimento com privacidade</span></div><div><Check size={16} /><span>Presença perto de si</span></div></div></div>
            <div className="value-aside reveal"><div className="value-image"><img src={communityImage} alt="Fachada real da Farmácia JMAMU em Cabinda" loading="lazy" decoding="async" /></div><div className="value-caption"><span>Uma porta aberta<br />para a sua saúde.</span><MapPin size={18} /></div></div>
          </div>
        </section>

        <section className="services-section section-pad" id="servicos">
          <div className="section-heading reveal"><span className="section-number">O que encontra na JMAMU</span><h2>Cuidado para cada<br /><em>momento da vida.</em></h2><p>Uma seleção de serviços e produtos para responder ao que é essencial, com aconselhamento sempre que precisar.</p></div>
          <div className="services-list">
            {services.map((service) => { const Icon = service.icon; return <article className="service-item reveal" key={service.title}><div className="service-top"><Icon size={24} strokeWidth={1.5} /></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contactos" aria-label={`Saber mais sobre ${service.title}`}>Saber mais</a></article>; })}
          </div>
        </section>

        <section className="locations-section section-pad" id="localizacoes">
          <div className="location-header reveal"><span className="section-number">Onde nos encontra</span><h2>Duas localizações.<br /><em>A mesma proximidade.</em></h2><p>Escolha o ponto mais conveniente para si. Em ambas as farmácias, a nossa equipa está pronta para o receber.</p></div>
          <div className="locations-grid">
            {locations.map((location, index) => <article className="location-card reveal" key={location.label}>{index === 1 && <div className="location-photo"><img src={secondSpaceImage} alt="Fachada da segunda Farmácia JMAMU na Rua de Timor" loading="lazy" decoding="async" /></div>}<div className="location-card-top"><span>{location.label}</span></div><h3>{location.name}</h3><div className="location-address"><MapPin size={18} /><div>{location.address.map((line) => <span key={line}>{line}</span>)}</div></div><div className="location-hours"><Clock3 size={18} /><div><small>Horário de atendimento</small><strong>{location.hours}</strong></div></div><a className="location-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.query)}`} target="_blank" rel="noreferrer">Ver no mapa</a></article>)}
          </div>
        </section>

        <section className="contact-section" id="contactos">
          <div className="contact-inner reveal"><div className="contact-copy"><span className="section-number">Contactos</span><h2>Tem uma pergunta?<br /><em>Estamos por perto.</em></h2><p>Fale diretamente com a equipa JMAMU. Teremos todo o gosto em ajudar.</p></div><div className="contact-details"><a href="tel:+244930242472" className="contact-detail"><span className="detail-icon"><Phone size={18} /></span><span><small>Ligue-nos</small><strong>930 242 472</strong></span></a><a href="mailto:geral@farmaciajmamu.com" className="contact-detail"><span className="detail-icon"><Mail size={18} /></span><span><small>Escreva-nos</small><strong>geral@farmaciajmamu.com</strong></span></a><a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-detail"><span className="detail-icon"><MessageCircle size={18} /></span><span><small>WhatsApp</small><strong>Falar connosco</strong></span></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-top"><a className="brand brand-footer" href="#home"><span className="brand-mark brand-logo-mark" aria-hidden="true"><img src={logoImage} alt="" /></span><span className="brand-copy"><strong>{legalName}</strong></span></a><p>Saúde com uma relação humana.<br />Cabinda, Angola.</p><div className="footer-nav">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div><div className="social-links" aria-label="Redes sociais"><a href="https://www.facebook.com/farmaciajmamu" target="_blank" rel="noreferrer" aria-label="Facebook da Farmácia JMAMU"><Facebook size={18} /></a><a href="https://www.instagram.com/farmaciajmamu" target="_blank" rel="noreferrer" aria-label="Instagram da Farmácia JMAMU"><Instagram size={18} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {legalName}</span><span>Feito para cuidar mais perto.</span></div></footer>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com a Farmácia JMAMU pelo WhatsApp"><MessageCircle size={21} /><span>WhatsApp</span></a>
    </div>
  );
}
