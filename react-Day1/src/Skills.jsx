function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB"
  ];

  return (
    <section className="section" id="skills">

      <h2>💻 My Skills</h2>

      <p className="subtitle">
        Technologies I work with
      </p>

      <div className="skills-container">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;