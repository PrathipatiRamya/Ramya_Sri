import { useEffect, useRef } from "react";

const experienceData = [
  {
    dot: "🏢",
    role: "System Executive / Full Stack Developer Trainee",
    company: "Jhaishna Technologies Private Limited",
    date: "Mar 2025 – Dec 2025",
    projects: [
      {
        title: "▸ Project: Malaysian B2B Web Application",
        points: [
          "Developed and maintained RESTful APIs using Python (Flask) for provider–contractor onboarding and business workflows.",
          "Designed and optimized PostgreSQL database schemas, improving data retrieval efficiency and consistency.",
          "Implemented responsive ReactJS dashboards and UI components enabling real-time data display.",
          "Integrated frontend and backend modules through secure API communication for end-to-end functionality.",
          "Debugged and resolved cross-stack application issues, improving platform stability.",
          "Collaborated with cross-functional teams to implement new features and enhancements.",
        ],
        tags: ["Python", "Flask", "ReactJS", "PostgreSQL", "REST APIs"],
      },
      {
        title: "▸ Project: Hathway (L2/L3 Support)",
        points: [
          "Provided L2/L3 application support for web applications in Linux environments ensuring high availability.",
          "Investigated and resolved production incidents through log analysis, debugging, and RCA.",
          "Implemented bug fixes using PHP (Yii Framework) to support business requirements.",
          "Optimized SQL queries and assisted in database validation for improved performance.",
          "Handled and closed support tickets within defined SLA timelines.",
          "Maintained detailed incident documentation to support knowledge sharing.",
        ],
        tags: ["PHP", "Yii Framework", "Linux", "SQL", "Log Analysis"],
      },
    ],
  },
];

const Experience = () => {
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
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-tag">// Career Journey</div>
        <h2 className="section-title">Work Experience</h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {experienceData.map((exp, i) => (
          <div className="tl-item reveal" key={i}>
            <div className="tl-dot">{exp.dot}</div>
            <div className="tl-card">
              <div className="tl-header">
                <div>
                  <div className="tl-role">{exp.role}</div>
                  <div className="tl-company">{exp.company}</div>
                </div>
                <div className="tl-date">{exp.date}</div>
              </div>

              {exp.projects.map((proj, j) => (
                <div key={j}>
                  <div
                    className="tl-project"
                    style={{ marginTop: j > 0 ? "1.5rem" : "0" }}
                  >
                    {proj.title}
                  </div>
                  <ul>
                    {proj.points.map((pt, k) => (
                      <li key={k}>{pt}</li>
                    ))}
                  </ul>
                  <div className="tl-tags">
                    {proj.tags.map((tag, k) => (
                      <span className="tl-tag" key={k}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
