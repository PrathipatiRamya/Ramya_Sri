import { useEffect, useRef } from "react";

const certsData = [
  {
    icon: "🏆",
    name: "Java Full Stack Development",
    issuer: "Sathya Technologies",
    // url: "https://your-certificate-link.com/java-fullstack", // 👈 replace
  },
  {
    icon: <i className="devicon-java-plain colored" />,
    name: "Java",
    issuer: "LinkedIn Learning",
    url: "https://drive.google.com/file/d/1c3B-1DWdjNPHb41HBTNSP75oXUaA6LmN/view?usp=sharing", // 👈 replace
  },
  {
    icon: "⚡",
    name: "Agile Foundations",
    issuer: "LinkedIn Learning",
    url: "https://drive.google.com/file/d/1nJGeF2mmC0p1-mPjk2tX6XYq4LFr-H3b/view?usp=sharing", // 👈 replace
  },
  {
    icon: <i className="devicon-python-plain colored" />,
    name: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    url: "https://drive.google.com/file/d/1SVg9c5LHgZ-hwOtzxdgsseMQehLFaAc5/view?usp=sharing", // 👈 replace
  },
  {
    icon: "🤖",
    name: "Machine Learning with Python",
    issuer: "IBM Developer Skills Network",
    url: "https://drive.google.com/file/d/1VnzdVnBwcPzESWQje11L0vWvudGjdW3_/view?usp=sharing", // 👈 replace
  },
  {
    icon: "📊",
    name: "Python",
    issuer: "Kaggle · Google",
    url: "https://drive.google.com/file/d/1G9pDIaqt6EZG2HrgkGtEiGURr5PIL58A/view?usp=sharing", // 👈 replace
  },
  {
    icon: "📈",
    name: "Python Data Analyst",
    issuer: "Infosys Springboard",
    url: "https://drive.google.com/file/d/1ks-YBaSzZZ-4g_6TAFr_dAJg0nGosj7N/view?usp=sharing", // 👈 replace
  },
];

const Certificates = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.06}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="certificates"
      className="certificates-section"
      ref={sectionRef}
    >
      <div className="section-header reveal">
        <div className="section-tag">// Continuous Learning</div>
        <h2 className="section-title">Certifications</h2>
        <div className="section-line" />
      </div>

      <div className="certs-grid">
        {certsData.map((cert, i) => (
          <div
            className="cert-card reveal"
            key={i}
            onClick={() => handleClick(cert.url)}
            style={{ cursor: cert.url ? "pointer" : "default" }}
            title={cert.url ? "Click to view certificate" : ""}
          >
            <div className="cert-icon">{cert.icon}</div>
            <div style={{ flex: 1 }}>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>
            {cert.url && (
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  marginLeft: "auto",
                  flexShrink: 0,
                  alignSelf: "center",
                }}
              >
                ↗
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
