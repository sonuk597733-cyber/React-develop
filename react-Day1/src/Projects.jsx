function Projects() {

  const projects = [
    {
      id: 1,
      name: "To-Do App",
      technology: "HTML | CSS | JavaScript",
      description:
        "A simple To-Do application to add, delete and complete tasks."
    },

    {
      id: 2,
      name: "Student API",
      technology: "Node.js | Express | MongoDB",
      description:
        "A REST API for managing student data with CRUD operations."
    },

    {
      id: 3,
      name: "Portfolio Website",
      technology: "React",
      description:
        "A personal portfolio website to showcase skills and projects."
    }
  ];

  return (
    <section className="section" id="projects">

      <h2>📁 My Projects</h2>

      <p className="subtitle">
        Some of the projects I have built
      </p>

      <div className="projects-container">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <div className="project-image">
              💻
            </div>

            <h3>{project.name}</h3>

            <p className="technology">
              {project.technology}
            </p>

            <p>
              {project.description}
            </p>

            <button>
              View Project
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;