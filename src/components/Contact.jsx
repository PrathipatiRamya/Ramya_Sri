import { useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-tag">// Let's Connect</div>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line" />
      </div>

      <div className="contact-card reveal">
        <p className="contact-intro">
          I'm actively seeking backend or Java full-stack development
          opportunities. Whether you have a role, a project, or just want to
          connect — my inbox is open!
        </p>

        <div className="contact-links">
          <a
            href="mailto:prathipatiramya2003@gmail.com"
            className="contact-link"
          >
            ✉️ Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/prathipati-ramya-sri-venkata-sai"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/PrathipatiRamya"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            🐙 GitHub
          </a>
        </div>

        <div className="lang-section">
          <span className="lang-label">Languages:</span>
          <span className="lang-chip">🇮🇳 Telugu</span>
          <span className="lang-chip">🇬🇧 English</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
