import { useEffect, useRef } from "react";

const projectsData = [
  {
    num: "01",
    emoji: "🛒",
    title: "PR Mart – Online Grocery Marketplace",
    tech: "ReactJS",
    desc: "Responsive online grocery marketplace enabling users to browse products and manage purchases. Features product search, cart management, coupon application, and order history tracking with reusable UI components.",
    tags: ["ReactJS", "Frontend", "E-Commerce", "UI/UX"],
  },
  {
    num: "02",
    emoji: "🏥",
    title: "Hospital Management System",
    tech: "Spring Boot · Spring Data JPA · Oracle/H2",
    desc: "RESTful APIs to manage patients, doctors, and appointments with full CRUD operations, proper endpoint design, and request validation. Tested and documented with Swagger and Postman.",
    tags: ["Spring Boot", "JPA", "REST API", "Swagger", "Oracle"],
  },
  {
    num: "03",
    emoji: "🧬",
    title: "Hepatitis Disease Prediction",
    tech: "Python · Machine Learning · Decision Tree",
    desc: "ML-based system to predict five categories of Hepatitis (A–E) using Decision Tree models trained on patient demographics and symptoms, with suggested remedies.",
    tags: ["Python", "ML", "Decision Tree", "Healthcare"],
  },
  {
    num: "04",
    emoji: "📱",
    title: "SMS Spam Detection",
    tech: "Python · SVM · Naive Bayes · K-NN",
    desc: "Rigorous comparative analysis of ML algorithms (SVM, Naive Bayes, K-NN, Weighted K-NN) on SMS datasets to identify the most accurate algorithm and optimal data split ratios for spam filtering.",
    tags: ["SVM", "Naive Bayes", "K-NN", "NLP"],
  },
  {
    num: "05",
    emoji: "🔐",
    title: "Secure Password Generator",
    tech: "Java",
    desc: "Secure password generator in Java that creates random passwords of specified length, ensuring inclusion of uppercase, lowercase, digits, and special characters for enhanced security.",
    tags: ["Java", "Security", "Utility"],
  },
  {
    num: "06",
    emoji: "🌍",
    title: "Community Awareness Campaign",
    tech: "Community Service · Digital Literacy",
    desc: "Created and executed an extensive awareness campaign to improve rural students' understanding of Microsoft Word and PowerPoint applications, promoting digital literacy.",
    tags: ["Community", "Education", "Leadership"],
  },
];

const Projects = () => {
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
      el.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-tag">// What I've Built</div>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projectsData.map((p, i) => (
          <div className="project-card reveal" key={i}>
            <div className="project-num">{p.num}</div>
            <div className="project-emoji">{p.emoji}</div>
            <div className="project-title">{p.title}</div>
            <div className="project-tech">{p.tech}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-tags">
              {p.tags.map((tag, j) => (
                <span className="ptag" key={j}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
