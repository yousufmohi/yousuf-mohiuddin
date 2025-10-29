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

      <div className="flex mt-4 mb-6 space-x-4 text-sm md:text-sm">
        <a href="https://www.linkedin.com/in/yousufmo/" >linkedin</a>
        <a href="https://github.com/yousufmohi">github</a>
      </div>

      <div className="mt-2">
      <h1 className={` ${darkMode ? "text-[#959290]" : "text-black"}  text-xl mt-6 mb-4 `}>Experience</h1>
      <div className="grid gap-4">
              <ExperienceItem
              title="software developer intern"
              company="info-tech research group"
              description={"working on the IT diagostics team"}
              languages={["Ruby on Rails"]}
              repoLink=""
              range="Sep. 2025 - present"
            />
              <ExperienceItem
              title="software developer intern"
              company="descartes systems"
              description={"worked on sso authentication and IT automation tooling"}
              languages={["C#", "PostgreSQL", ".NET"]}
              repoLink=""
              range="May - Aug. 2025"
            />
            <ExperienceItem
              title="software developer intern"
              company="descartes systems"
              description={"worked on geocoding tools and backend optimization"}
              languages={["JavaScript", "C#", ".NET"]}
              repoLink=""
              range="Sep - Dec. 2024"
            />
            <ExperienceItem
              title="web developer"
              company="university of guelph"
              description={"website maintenance and designed new features"}
              languages={["JavaScript", "Python"]}
              repoLink=""
              range="Jun - Aug. 2024"
            />
          </div>
          <h1 className={` ${darkMode ? "text-[#959290]" : "text-black"}  text-xl mt-6 mb-4 `}>Projects</h1>
          <div className="grid gap-2">
            <ExperienceItem
              title="codestore"
              description={"application for developers to store non-git worthy code snippets"}
              company=""
              languages={["React", "Nodejs", "MongoDB"]}
              repoLink="https://github.com/yousufmohi/codestore"
              range=""
            />
            <ExperienceItem
              title="haven"
              description={"hackathon project for cuHacking 6"}
              company=""
              languages={["React","Python", "Nodejs", "GraphQL", "PostgreSQL"]}
              repoLink="https://github.com/yousufmohi/Haven"
              range=""
            />
          </div>

          
      </div>
    </div>
  );
}

export default App;
