import { useEffect, useRef } from "react";

const Education = () => {
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
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-tag">// Academic Background</div>
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
      </div>

      <div className="edu-card reveal">
        <div className="edu-icon">🎓</div>
        <div>
          <div className="edu-degree">B.Tech – Information Technology</div>
          <div className="edu-school">
            Seshadri Rao Gudlavalleru Engineering College
          </div>
          <div className="edu-meta">Dec 2020 – Mar 2024</div>
          <div className="edu-gpa">⭐ CGPA: 8.92</div>
        </div>
      </div>
    </section>
  );
};

export default Education;
