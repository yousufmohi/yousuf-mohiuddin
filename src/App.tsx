import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import {ExperienceItem} from "./ExperienceItem";
import {FiSun, FiMoon} from "react-icons/fi";

function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (

    <div className={`w-full max-w-xl mx-auto p-4 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`} style={{ minHeight: "100vh" }} >

      <div className="flex justify-between items-center mt-10">
        <h1 className="text-2xl md:text-2xl">yousuf mohiuddin</h1>
        <button
          onClick={toggleDarkMode}
          className={`px-2 py-2 rounded-lg ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {darkMode ? <FiMoon /> : <FiSun />}
        </button>
      </div>

      <p className="text-md md:text-md mt-2">cs & math @ university of guelph</p>

      <div className="mt-2">

      <div className="grid gap-4">
            <ExperienceItem
              title="software developer intern"
              company="descartes systems"
              description={"worked on address validation tools and backend optimization"}
              languages={["JavaScript", "C#", ".NET"]}
              repoLink=""
            />
            <ExperienceItem
              title="web developer"
              company="university of guelph"
              description={"website maintenance and designed new features"}
              languages={["JavaScript", "Python"]}
              repoLink=""
            />
          </div>
        
          <div className="grid gap-2">
            <ExperienceItem
              title="codestore"
              description={"application which stores code snippets"}
              company=""
              languages={["React", "Nodejs", "MongoDB"]}
              repoLink="https://github.com/yousufmohi/codestore"
            />
            <ExperienceItem
              title="haven"
              description={"hackathon project for cuHacking 6"}
              company=""
              languages={["React","Python", "Nodejs", "GraphQL", "PostgreSQL"]}
              repoLink="https://github.com/yousufmohi/ArithmeticAssist"
            />
          </div>

          
      </div>
    </div>
  );
}

export default App;
