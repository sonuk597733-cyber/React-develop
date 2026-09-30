import Header from "./Header.jsx";
import Profile from "./Profile.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Profile />
        <Skills />
        <Projects />
      </main>

      <footer>
        © 2026 Sonu Kumar. All rights reserved.
      </footer>
    </>
  );
}

export default App;