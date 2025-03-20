import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
type Props = {
  title: string;
  description: string;
  languages: string[];
  repoLink: string;
  company: string;
  range: string;
};

export const ExperienceItem: React.FC<Props> = ({ title, description, languages, repoLink, company, range}) => {
  const { darkMode } = useContext(ThemeContext); // Access dark mode context

  return (
    <div className={`py-4 rounded-lg ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="flex space-x-3 justify-between">
        <a href={repoLink} className={`text-md  ${!repoLink && "cursor-default"}  ${darkMode ? "text-[#60a5fa]" : "text-blue-800"}`}>  {title}{company ? ` @ ${company}` : ''} </a>
        {range &&
        <a className={`text-xs ${darkMode ? "text-[#959290]" : "text-black"}`}>{range}</a>
        }
      </div>



      <h2 className={`text-sm mt-4 ${darkMode ? "text-[#c0c0c0]" : "text-black"}`}>{description}</h2>
      {languages.length !== 0 &&
        languages.map((language, index) => (
          <button
            key={index}
            disabled={true}
            className={`mt-5 mr-2 ${
              darkMode ? "bg-black text-[#959290]" : "bg-white text-black"
            } text-sm `}
          >
            {language}
          </button>
        ))}
    </div>
  );
};
