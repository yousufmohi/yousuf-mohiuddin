import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
type Props = {
  title: string;
  description: string;
  languages: string[];
  link: string;
  repoLink: string;
  company: string;
};

export const ExperienceItem: React.FC<Props> = ({ title, description, languages, link, repoLink, company }) => {
  const { darkMode } = useContext(ThemeContext); // Access dark mode context

  return (
    <div
      className={`p-4 rounded-lg ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {link && (
          <a
            href={link}
            className={`text-lg text-blue-600 hover:underline`}
          >
            <FaExternalLinkAlt />
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            className={`text-2xl ${
              darkMode ? "text-gray-300" : "text-black"
            } hover:underline`}
          >
            <FaGithub />
          </a>
        )}
      </div>

      {company && (
        <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
          {company}
        </h2>
      )}


      <h2>{description}</h2>
      {languages.length !== 0 &&
        languages.map((language, index) => (
          <button
            key={index}
            disabled={true}
            className={`mt-5 mr-2 ${
              darkMode ? "bg-teal-500 text-black" : "bg-black text-white"
            } text-sm font-semibold py-1 px-2 rounded-full`}
          >
            {language}
          </button>
        ))}
    </div>
  );
};
