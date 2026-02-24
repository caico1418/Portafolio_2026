import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Desorrollo Web Freelancer',
    category: 'Web Application',
    description: 'Blog para contactar los servicios de un freelancer.',
    tags: ['HTML5'],
    gradient: 'from-blue-500 to-cyan-500',
    url: 'https://proyectowebpractica.netlify.app',
    imageProject: '/freelancer.png',
    
  },
  {
    id: 2,
    title: 'Fronted Store',
    category: 'Web Application',
    description: 'Pagina web fronted store para realizar compras de camisas con logos de tecnologia de programacion',
    tags: ['HTML5'],
    gradient: 'from-purple-500 to-pink-500',
    url: 'https://camisasventas.netlify.app',
    icon: Globe,
    imageProject: '/shirts.png'
  },
  {
    id: 3,
    title: 'Blog Café',
    category: 'Web Application',
    description: 'Blog para ofrecer informacion a los usuarios sobre el cafe y ofrecer distintas recetas.',
    tags: ['HTML5'],
    gradient: 'from-emerald-500 to-teal-500',
    url: 'https://64e194b151f1392c9a3eb664--sunny-salmiakki-a88576.netlify.app',
    icon: Globe,
    imageProject: '/BlogCafe.png'
  },
  {
    id: 4,
    title: 'Rock & EDM Festival',
    category: 'Web Application',
    description: 'Proyecto para consultar fechas de conciertos y comprar boletos en la misma pagina.',
    tags: ['HTML5', 'Node', 'Gulp', 'SASS'],
    gradient: 'from-orange-500 to-red-500',
    url: 'https://64e19628d46b3e2b53ea94ec--amazing-blancmange-8c3e26.netlify.app',
    icon: Globe,
    imageProject: '/Rock.png'
  },
  {
    id: 5,
    title: 'Bienes Raices',
    category: 'Web Application',
    description: 'Real-time analytics dashboard with interactive charts and comprehensive reporting capabilities.',
    tags: ['HTML5', 'Node', 'Gulp', 'SASS', 'PHP'],
    gradient: 'from-indigo-500 to-blue-500',
    url: 'https://64e197c5a489b62f2f34ce72--superlative-malabi-cc5a92.netlify.app',
    icon: Globe,
    imageProject: '/BienesRaices.png'
  },
  {
    id: 6,
    title: 'TO-DO',
    category: 'Web Application',
    description: 'App TODO para realizar tareas programadas',
    tags: ['React', 'TypeScript', 'Tailwindcss'],
    gradient: 'from-pink-500 to-rose-500',
    url: 'https://todo-proyect.netlify.app',
    icon: Smartphone,
    imageProject: '/TODO.png',
  },
  {
    id: 7,
    title: 'Gifs App',
    category: 'Mobile & Web',
    description: 'Buscador de gifs, consumiendo la API de GIPHY',
    tags: ['React', 'TypeScript', 'Tailwindcss', 'API'],
    gradient: 'from-pink-500 to-rose-500',
    url: 'https://eclectic-lamington-3ad9f0.netlify.app',
    icon: Smartphone,
    imageProject: '/GifsApp.png',
  },
  {
    id: 8,
    title: 'Heroes App',
    category: 'Mobile & Web',
    description: 'Buscador de gifs, consumiendo la API de GIPHY',
    tags: ['React', 'TypeScript', 'Tailwindcss', 'API'],
    gradient: 'from-pink-500 to-rose-500',
    url: 'https://eclectic-lamington-3ad9f0.netlify.app',
    icon: Smartphone,
    imageProject: '/GifsApp.png',
  },
];

const categories = ['All', 'Web Application', 'Mobile & Web', 'Mobile Application'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes que refleja mi enfoque tanto en el diseño como en el desarrollo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
