import { useEffect, useRef } from "react";

const skillsData = [
  { icon: <i className="devicon-java-plain colored" />, name: "Java" },
  { icon: <i className="devicon-spring-plain colored" />, name: "Spring Boot" },
  { icon: <i className="devicon-react-original colored" />, name: "React.js" },
  { icon: <i className="devicon-python-plain colored" />, name: "Python" },
  {
    icon: <i className="devicon-flask-original" style={{ color: "#a0a0c0" }} />,
    name: "Flask",
  },
  {
    icon: <i className="devicon-postgresql-plain colored" />,
    name: "PostgreSQL",
  },
  {
    icon: <i className="devicon-azuresqldatabase-plain colored" />,
    name: "SQL",
  },
  { icon: <i className="devicon-git-plain colored" />, name: "Git" },
  {
    icon: <i className="devicon-linux-plain" style={{ color: "#a0a0c0" }} />,
    name: "Linux",
  },
  { icon: "🔗", name: "Microservices" },
  { icon: <i className="devicon-postman-plain colored" />, name: "Postman" },
  { icon: <i className="devicon-swagger-plain colored" />, name: "Swagger" },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-tag">// Technical Expertise</div>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid reveal">
        {skillsData.map((skill, i) => (
          <div
            className="skill-chip"
            key={i}
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
