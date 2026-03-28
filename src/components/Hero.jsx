const stats = [
  { num: "10", label: "Months Exp." },
  { num: "5+", label: "Projects" },
  { num: "8.92", label: "CGPA" },
  { num: "5+", label: "Certificates" },
];

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-tag-dot">●</span>
          Available for Opportunities
        </div>

        <h1 className="hero-name">
          Prathipati
          <span className="hero-name-gradient">Ramya Sri</span>
        </h1>

        <p className="hero-title">
          // Full Stack Developer · Backend Engineer · Software Developer
        </p>

        <p className="hero-summary">
          Software Developer with hands-on experience in full-stack application
          development and production support within Linux environments. Skilled
          in Java, Spring Boot, ReactJS, Python (Flask), and REST API
          development. Actively seeking backend or Java full-stack development
          or software developer opportunities.
        </p>

        <div className="hero-cta">
          <a href="#experience" className="btn btn-primary">
            💻 View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            ✉ Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
