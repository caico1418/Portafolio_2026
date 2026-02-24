import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  url: string;
  imageProject?: string;

}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: project.imageProject
            ? `url(${project.imageProject})`
            : `linear-gradient(to bottom right, var(--tw-gradient-stops))`
        }}
      >

        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        />


        <div
          className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white hover:scale-110 transition-all">
            <a target='_blank' href={project.url}>
              <ExternalLink size={18} className="text-gray-700" />
            </a>
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white hover:scale-110 transition-all">
            <Github size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm font-medium text-blue-600 mb-2">{project.category}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`absolute inset-0 border-2 border-blue-500 rounded-2xl transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
      />
    </div>
  );
}
