import { div } from 'framer-motion/client';
import React from 'react';

interface Project {
  id: number;
  name: string;
  techStack: string;
  Link: string;
  type: string;
  info: string;
}

const projects: Project[] = [
  { id: 1, name: 'Bloper', techStack: 'Django, Tailwind', Link: 'https://github.com/username/project-one', type: 'Type A', info: 'Blogging website' },
  { id: 2, name: 'wEarth', techStack: 'JavaScript, CSS, HTML', Link: 'https://github.com/username/project-two', type: 'Type A', info: 'Weather Predicting website' },
  { id: 3, name: 'Receipt gen', techStack: 'Django, Twilio, ngrok', Link: 'https://github.com/username/project-three', type: 'Type A', info: 'WhatsApp bot to generate receipt' },
  { id: 4, name: 'BT Pred', techStack: 'Vue, Vuex, Vuetify', Link: 'https://github.com/username/project-four', type: 'Type B', info: 'Vision Transformer based brain tumour predictor' },
  { id: 5, name: 'Emotionizer', techStack: 'Svelte, Sapper, Tailwind', Link: 'https://github.com/username/project-five', type: 'Type B', info: 'CNN based emotion analyzer' },
];

const ProjectCard: React.FC<Project> = ({ name, techStack, Link, info }) => {
  return (
    <div className="bg-gray-800 bg-opacity-40 shadow-lg rounded-lg p-6 m-4 border border-gray-700 hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 mt-10">
      <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
      <p className="text-sm text-gray-400 mb-4"><strong>{info}</strong></p>
      <p className="text-sm text-gray-400 mb-4"><strong>Tech Stack:</strong> {techStack}</p>
      <a
        href={Link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-blue-500 underline"
      >
        View Source Code
      </a>
    </div>
  );
};

const ProjectList: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <div className="text-center text-6xl bg-slate-950 bg-opacity-25 text-white py-8">
        PROJECTS
      </div>
      <div className="flex flex-wrap justify-between px-8 py-4">
        <div className="flex flex-col w-full lg:w-1/2 space-y-4">
          {projects
            .filter((project) => project.type === 'Type A')
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>

        <div className="flex flex-col w-full lg:w-1/3 lg:ml-8 space-y-4 mt-8 lg:mt-0">
          {projects
            .filter((project) => project.type === 'Type B')
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
