import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
type Props = {
  title: string;
  description: string;
  languages: string[];
  repoLink: string;
  company: string;
};

export const ExperienceItem: React.FC<Props> = ({ title, description, languages, repoLink, company }) => {
  const { darkMode } = useContext(ThemeContext); // Access dark mode context

  return (
    <div
      className={`py-4 rounded-lg ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="flex space-x-3">
        <a href={repoLink} className={`text-md text-[#60a5fa] ${repoLink && "cursor-default"}`}>  {title}{company ? ` @ ${company}` : ''} </a>
      </div>



      <h2 className="text-sm mt-4 text-[#c0c0c0]">{description}</h2>
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
