import { useEffect, useState } from 'react'

const services = [
  {
    number: '01',
    icon: 'chart',
    title: 'Dados & Business Intelligence',
    description: 'Dashboards e análises que transformam dados dispersos em decisões claras para o seu negócio.',
    tags: ['Power BI', 'Big Data', 'Excel'],
  },
  {
    number: '02',
    icon: 'code',
    title: 'Sistemas sob medida',
    description: 'Aplicações web seguras, rápidas e pensadas para resolver a rotina real da sua empresa.',
    tags: ['React', 'Node.js', 'PHP'],
  },
  {
    number: '03',
    icon: 'automation',
    title: 'Automação de processos',
    description: 'Integrações e fluxos automáticos para reduzir tarefas manuais, erros e tempo de operação.',
    tags: ['APIs', 'Power Automate', 'Webhooks'],
  },
  {
    number: '04',
    icon: 'compass',
    title: 'Consultoria em TI',
    description: 'Orientação técnica para escolher soluções, organizar processos e evoluir com segurança.',
    tags: ['Estratégia', 'Arquitetura', 'Suporte'],
  },
]

const cases = [
  {
    category: 'Automação',
    title: 'Orçamentos automáticos',
    description: 'Fluxo em Power Apps e Power Automate para gerar orçamentos e enviar ao responsável por e-mail.',
    client: 'Eduardo',
    company: 'Global Projetores',
    accent: 'blue',
  },
  {
    category: 'Integração de dados',
    title: 'Consulta de minutas via API',
    description: 'Integração para consultar minutas diretamente no Google Sheets e simplificar o trabalho da equipe.',
    client: 'Anderson',
    company: 'Transcourier',
    accent: 'cyan',
  },
  {
    category: 'Dados & BI',
    title: 'Big Data para decisões',
    description: 'Tratamento de grandes volumes de dados para dashboards e emissão de orçamentos com consulta de CPF.',
    client: 'André Galvão',
    company: 'Imobiliária · Unaí, MG',
    accent: 'silver',
  },
  {
    category: 'Pagamentos',
    title: 'PIX integrado ao WordPress',
    description: 'API de pagamento e webhook PIX Sicredi integrados ao site da organização.',
    client: 'Marlon',
    company: 'SOS4PATAS',
    accent: 'gold',
  },
  {
    category: 'Sistema web',
    title: 'Gestão de pacientes',
    description: 'Sistema objetivo, com acesso protegido e cadastro organizado de pacientes de saúde.',
    client: 'Anderson',
    company: 'Triunfo Saúde',
    accent: 'cyan',
  },
  {
    category: 'React & Next.js',
    title: 'Gestão comercial agrícola',
    description: 'Acompanhamento de vendas de fertilizantes, geração de PDF e ranking de vendedores.',
    client: 'Deyvid',
    company: 'Agrobueno · Minas Gerais',
    accent: 'blue',
  },
]

const technologies = ['React', 'Node.js', 'PHP', 'Laravel', 'Symfony', 'Magento', 'Express', 'Power BI', 'MySQL', 'PostgreSQL', 'Excel', 'APIs']

function Icon({ name, size = 24 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    chart: <><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19V3"/><path d="M2 19h20"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    automation: <><path d="M12 3v3"/><path d="M12 18v3"/><path d="m4.22 4.22 2.12 2.12"/><path d="m17.66 17.66 2.12 2.12"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m4.22 19.78 2.12-2.12"/><path d="m17.66 6.34 2.12-2.12"/><circle cx="12" cy="12" r="4"/></>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.78 19.78 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.72a16 16 0 0 0 4.28 4.28l1.26-1.25a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
    quote: <><path d="M9 11H5a4 4 0 0 1 4-4v8a4 4 0 0 1-4 4"/><path d="M19 11h-4a4 4 0 0 1 4-4v8a4 4 0 0 1-4 4"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="BlessPlan Digital, início" onClick={close}>
          <img src="./logo-mark.svg" alt="" />
          <span className="brand-copy"><strong>BLESSPLAN</strong><small>DIGITAL</small></span>
        </a>
        <nav className={open ? 'nav is-open' : 'nav'} aria-label="Navegação principal">
          <a href="#servicos" onClick={close}>Serviços</a>
          <a href="#sobre" onClick={close}>Sobre</a>
          <a href="#projetos" onClick={close}>Projetos</a>
          <a href="#tecnologias" onClick={close}>Tecnologias</a>
          <a href="#contato" className="button button-small" onClick={close}>Fale conosco <Icon name="arrow" size={18} /></a>
        </nav>
        <button className={open ? 'menu-button is-open' : 'menu-button'} type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="orb orb-one" aria-hidden="true"></div>
      <div className="orb orb-two" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> Tecnologia que move negócios</div>
          <h1>Dados claros.<br />Sistemas <span>inteligentes.</span></h1>
          <p className="hero-lead">Transformamos desafios complexos em soluções digitais simples, eficientes e feitas para o crescimento da sua empresa.</p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/5548988310636?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20BlessPlan%20Digital%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer">Vamos conversar <Icon name="arrow" size={19} /></a>
            <a className="text-link" href="#projetos">Conheça nossos projetos <span>↓</span></a>
          </div>
          <div className="hero-trust">
            <div className="trust-avatars" aria-hidden="true"><span>BI</span><span>API</span><span>WEB</span></div>
            <p><strong>Soluções reais</strong><br />para empresas de diferentes setores</p>
          </div>
        </div>
        <div className="hero-visual" aria-label="Identidade visual BlessPlan Digital">
          <div className="visual-ring ring-one"></div>
          <div className="visual-ring ring-two"></div>
          <div className="visual-glow"></div>
          <div className="logo-stage">
            <div className="stage-edge"></div>
            <img src="./logo-mark.svg" alt="Escudo azul com a letra B e coroa dourada, símbolo da BlessPlan Digital" />
          </div>
          <div className="floating-card card-data"><span className="floating-icon"><Icon name="chart" size={19} /></span><div><small>Dados</small><strong>Decisões claras</strong></div><i className="status-dot"></i></div>
          <div className="floating-card card-code"><span className="floating-icon"><Icon name="code" size={19} /></span><div><small>Tecnologia</small><strong>Sob medida</strong></div></div>
          <div className="tech-chip chip-react">React</div>
          <div className="tech-chip chip-bi">Power BI</div>
        </div>
      </div>
      <a className="scroll-cue" href="#servicos" aria-label="Rolar para serviços"><span></span>EXPLORE</a>
    </section>
  )
}

function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <div className="section-heading heading-split">
          <div><div className="eyebrow"><span></span> O que fazemos</div><h2>Soluções que conectam<br /><em>estratégia e tecnologia.</em></h2></div>
          <p>Entendemos o seu desafio antes de escrever a primeira linha de código. Cada solução nasce para gerar valor no dia a dia.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-top"><span className="service-icon"><Icon name={service.icon} size={27} /></span><span className="service-number">{service.number}</span></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href="#contato" aria-label={`Conversar sobre ${service.title}`}>Saiba mais <Icon name="arrow" size={18} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="code-window">
            <div className="window-bar"><span></span><span></span><span></span><small>blessplan.solution</small></div>
            <div className="code-content" aria-label="Representação visual do processo de desenvolvimento">
              <p><i>01</i><span className="code-blue">const</span> projeto = <span className="code-silver">{'{'}</span></p>
              <p><i>02</i>&nbsp;&nbsp;desafio: <span className="code-gold">'entendido'</span>,</p>
              <p><i>03</i>&nbsp;&nbsp;estratégia: <span className="code-gold">'definida'</span>,</p>
              <p><i>04</i>&nbsp;&nbsp;solução: <span className="code-gold">'sob medida'</span>,</p>
              <p><i>05</i>&nbsp;&nbsp;resultado: <span className="code-blue">true</span></p>
              <p><i>06</i><span className="code-silver">{'}'}</span></p>
              <p><i>07</i></p>
              <p><i>08</i><span className="code-blue">return</span> projeto.<span className="code-cyan">crescer</span>()</p>
            </div>
          </div>
          <div className="experience-badge"><strong>BI</strong><span>Especialização<br />em dados</span></div>
        </div>
        <div className="about-copy">
          <div className="eyebrow"><span></span> Sobre a BlessPlan</div>
          <h2>Tecnologia com propósito.<br /><em>Parceria de verdade.</em></h2>
          <p>Somos especialistas em análise de dados e desenvolvimento de software. Unimos conhecimento técnico, visão de negócio e comunicação próxima para criar soluções que funcionam.</p>
          <p>Com liderança especializada em Business Intelligence e experiência em tecnologias modernas, cuidamos de cada projeto com atenção do planejamento à entrega.</p>
          <div className="about-points">
            <div><span><Icon name="check" size={17} /></span><p><strong>Soluções personalizadas</strong>Sem pacotes genéricos</p></div>
            <div><span><Icon name="check" size={17} /></span><p><strong>Comunicação direta</strong>Você acompanha cada etapa</p></div>
            <div><span><Icon name="check" size={17} /></span><p><strong>Visão de negócio</strong>Tecnologia focada em resultado</p></div>
          </div>
          <a className="text-link bright" href="#contato">Conte seu desafio <Icon name="arrow" size={18} /></a>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    ['01', 'Descoberta', 'Entendemos seu cenário, suas dores e o resultado esperado.'],
    ['02', 'Estratégia', 'Desenhamos a solução certa, com escopo e prioridades claros.'],
    ['03', 'Construção', 'Desenvolvemos com transparência e validações ao longo do projeto.'],
    ['04', 'Evolução', 'Entregamos, acompanhamos e ajudamos a solução a crescer.'],
  ]
  return (
    <section className="section process">
      <div className="container">
        <div className="section-heading centered"><div className="eyebrow"><span></span> Nosso processo <span></span></div><h2>Do desafio à <em>solução.</em></h2><p>Um caminho claro, sem complicação e com você perto das decisões.</p></div>
        <div className="process-line">
          {steps.map(([number, title, description]) => <div className="process-step" key={number}><span className="step-number">{number}</span><div className="step-dot"></div><h3>{title}</h3><p>{description}</p></div>)}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects" id="projetos">
      <div className="container">
        <div className="section-heading heading-split">
          <div><div className="eyebrow"><span></span> Projetos realizados</div><h2>Desafios transformados<br /><em>em resultados.</em></h2></div>
          <p>Conheça algumas soluções desenvolvidas para operações, vendas, dados, saúde e pagamentos.</p>
        </div>
        <div className="projects-grid">
          {cases.map((item) => (
            <article className={`project-card accent-${item.accent}`} key={item.title}>
              <div className="project-shine"></div>
              <div className="project-heading"><span>{item.category}</span><Icon name="quote" size={28} /></div>
              <h3>{item.title}</h3>
              <p>“{item.description}”</p>
              <div className="client"><div className="client-avatar">{item.client.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div><div><strong>{item.client}</strong><span>{item.company}</span></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Technologies() {
  return (
    <section className="section technologies" id="tecnologias">
      <div className="container">
        <div className="section-heading centered"><div className="eyebrow"><span></span> Stack tecnológica <span></span></div><h2>Ferramentas certas para<br /><em>cada desafio.</em></h2></div>
        <div className="tech-cloud">{technologies.map((tech, index) => <div className="technology" key={tech}><span className={`tech-symbol symbol-${index % 4}`}>{tech.slice(0, 2).toUpperCase()}</span><strong>{tech}</strong></div>)}</div>
        <div className="quality-strip">
          <div><Icon name="database" size={23} /><span><strong>Dados organizados</strong> para decisões melhores</span></div>
          <div><Icon name="layers" size={23} /><span><strong>Soluções escaláveis</strong> preparadas para crescer</span></div>
          <div><Icon name="shield" size={23} /><span><strong>Desenvolvimento seguro</strong> desde o início</span></div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-glow" aria-hidden="true"></div>
      <div className="container contact-inner">
        <div className="contact-copy">
          <div className="eyebrow"><span></span> Vamos criar juntos</div>
          <h2>Seu próximo projeto<br />começa com uma <em>conversa.</em></h2>
          <p>Conte o que sua empresa precisa. Nós ajudamos a transformar a ideia em uma solução digital clara e possível.</p>
          <a className="button button-whatsapp" href="https://wa.me/5548988310636?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20BlessPlan%20Digital%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer"><Icon name="phone" size={20} /> Chamar no WhatsApp <Icon name="arrow" size={19} /></a>
        </div>
        <div className="contact-card">
          <h3>Fale com a BlessPlan</h3>
          <p>Escolha o canal que preferir. Retornaremos assim que possível.</p>
          <a href="tel:+5548988310636"><span><Icon name="phone" size={21} /></span><div><small>Telefone / WhatsApp</small><strong>(48) 98831-0636</strong></div><Icon name="arrow" size={18} /></a>
          <a href="mailto:blesplanDigital@gmail.com"><span><Icon name="mail" size={21} /></span><div><small>E-mail</small><strong>blesplanDigital@gmail.com</strong></div><Icon name="arrow" size={18} /></a>
          <a href="https://www.instagram.com/blessplan_digital/" target="_blank" rel="noreferrer"><span><Icon name="instagram" size={21} /></span><div><small>Instagram</small><strong>@blessplan_digital</strong></div><Icon name="arrow" size={18} /></a>
          <div className="contact-location"><span><Icon name="location" size={21} /></span><div><small>Atendimento</small><strong>Projetos em todo o Brasil</strong></div></div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div className="footer-brand"><a className="brand" href="#inicio"><img src="./logo-mark.svg" alt="" /><span className="brand-copy"><strong>BLESSPLAN</strong><small>DIGITAL</small></span></a><p>Dados, sistemas e automações para empresas que querem evoluir.</p></div>
        <div className="footer-column"><strong>Navegação</strong><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#tecnologias">Tecnologias</a></div>
        <div className="footer-column"><strong>Soluções</strong><a href="#servicos">Business Intelligence</a><a href="#servicos">Desenvolvimento web</a><a href="#servicos">Automação</a><a href="#servicos">Consultoria em TI</a></div>
        <div className="footer-column"><strong>Contato</strong><a href="tel:+5548988310636">(48) 98831-0636</a><a href="mailto:blesplanDigital@gmail.com">blesplanDigital@gmail.com</a><a href="https://www.instagram.com/blessplan_digital/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} BlessPlan Digital. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div>
    </footer>
  )
}

export default function App() {
  return <><Header /><main id="conteudo"><Hero /><Services /><About /><Process /><Projects /><Technologies /><Contact /></main><Footer /></>
}
