function Profile() {
  const name = "Sonu Kumar";
  const role = "Full Stack Web Developer";
  const age = 18;
  const course = "Diploma";
  const college = "Polytechnic College";

  const available = true;

  return (
    <section className="profile" id="home">

      <div className="profile-image">
        👨‍💻
      </div>

      <div className="profile-info">
        <h1>{name}</h1>

        <h2>{role}</h2>

        <p>👤 Age: {age}</p>
        <p>🎓 Course: {course}</p>
        <p>🏫 College: {college}</p>

        {available ? (
          <p className="available">
            🟢 Available for Internship
          </p>
        ) : (
          <p className="not-available">
            🔴 Currently Learning
          </p>
        )}

        <button>Download Resume</button>
      </div>

      <div className="about">
        <h2>About Me</h2>

        <p>
          I am a passionate web developer interested in
          MERN stack. I love building user-friendly web
          applications and continuously learning new
          technologies.
        </p>

        <div className="social">
          <span>GitHub</span>
          <span>LinkedIn</span>
          <span>X</span>
        </div>
      </div>

    </section>
  );
}

export default Profile;