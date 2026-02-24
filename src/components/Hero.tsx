import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Full Stack
          </span>
          <br />
          <span className="text-gray-800">Developer</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Creando experiencias web hermosas y funcionales que combinan
          <span className="text-blue-600 font-medium"> creatividad </span>
          con
          <span className="text-cyan-600 font-medium"> código. </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Mirar Proyectos
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="cursor-pointer px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200"
          >
            Contacto
          </button>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="cursor-pointer absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
