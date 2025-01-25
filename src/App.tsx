import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import {ExperienceItem} from "./ExperienceItem";
import {FiSun, FiMoon} from "react-icons/fi";
import { getSong } from "./SpotifyAPI";

function App() {
  getSong();
  const str: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus rem, aliquam error aliquid accusantium pariatur ad? Dolore quos quis, deserunt voluptatem optio eveniet quia obcaecati aut asperiores, rem vero minus!";
  // state for the current tabs
  const [active, setActive] = useState(0);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full max-w-xl mx-auto p-4 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`} style={{ minHeight: "100vh" }} >
      <button onClick={toggleDarkMode} 
              className={`absolute top-4 right-4 px-2 py-2 rounded-lg shadow ${
              darkMode ? "bg-white text-black" : "bg-black text-white"}`}> 
              {darkMode ? <FiMoon/> : <FiSun/>} 
      </button>

      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className={`text-3xl md:text-4xl font-semibold text-center`}>Yousuf Mohiuddin</h1>
        <p className={`text-base md:text-lg mt-2 text-center ${darkMode ? 'text-emerald-400' : 'text-black'}`}>cs & math @ university of guelph</p>
      </div>

      <div className="flex items-center justify-center mt-4 mb-6 space-x-4">
        <a href="https://www.linkedin.com/in/yousufmo/" > <FaLinkedin color={"#0A66C2"} size={32} /> </a>
        <a href="https://github.com/yousufmohi"><FaGithub color={darkMode ? "white" : "black"} size={32} /></a>
      </div>

      <div className={`flex justify-center sm:justify-start space-x-4`}>
        {["about", "projects", "experience"].map((label, index) => (
          <button
            key={label}
            className={`inline-block px-4 py-2 text-left transition-all duration-300 border-b-2 ${
              active === index
                ? darkMode
                  ? "border-white text-white font-semibold"
                  : "border-black text-black font-semibold"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActive(index)}
          >
            {label}
          </button>
        ))}
      </div>
      

      <div className="mt-2">

        {active === 1 && (
          <div className="grid gap-2">
            <ExperienceItem
              title="CodeStore"
              description={str}
              company=""
              languages={["React", "NodeJS", "MongoDB"]}
              link=""
              repoLink="https://github.com/yousufmohi/codestore"
            />
            <ExperienceItem
              title="Passkeep"
              description={str}
              company=""
              languages={["Python", "MySQL"]}
              link=""
              repoLink="https://github.com/yousufmohi/Password-Manager"
            />
            <ExperienceItem
              title="ArithmeticAssist"
              description={str}
              company=""
              languages={["React"]}
              link="https://arithmeticassist.netlify.app/"
              repoLink="https://github.com/yousufmohi/ArithmeticAssist"
            />
          </div>
        )}

        {active === 2 && (
          <div className="grid gap-4">
            <ExperienceItem
              title="Software Developer Intern"
              company="Descartes Systems Group"
              description={str}
              languages={["JavaScript", "C#", ".NET"]}
              link=""
              repoLink=""
            />
            <ExperienceItem
              title="Web Developer"
              company="University of Guelph"
              description={str}
              languages={["HTML", "CSS", "Python"]}
              link=""
              repoLink=""
            />
            <ExperienceItem
              title="Undergraduate Teaching Assistant"
              company="University of Guelph"
              description={str}
              languages={[]}
              link=""
              repoLink=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
