import { Code2, Palette, Zap, Users, Award, Heart } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Experto en React, TypeScript, y modern web frameworks',
    color: 'blue',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creando experiencias de usuario intuitivas y hermosas',
    color: 'purple',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Aplicaciones optimizadas y de carga rápida',
    color: 'yellow',
  },
  {
    icon: Users,
    title: 'Colaboracion',
    description: 'Comunicación efectiva con equipos y clientes',
    color: 'green',
  },
  {
    icon: Award,
    title: 'Buenas practicas',
    description: 'Codigo limpio, accesibilidad, y escabilidad',
    color: 'red',
  },
  {
    icon: Heart,
    title: 'Pasion',
    description: 'Amor por crear productos digitales excepcionales',
    color: 'pink',
  },
];

const colorMap: Record<string, string> = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  yellow: 'from-yellow-500 to-orange-500',
  green: 'from-emerald-500 to-teal-500',
  red: 'from-red-500 to-orange-500',
  pink: 'from-pink-500 to-rose-500',
};

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre mi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desarrollador apasionado con un gran ojo para el diseño.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              <div className="text-white text-8xl font-bold z-10">DEV</div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
             Desarrollador full-stack en formación, apasionado por crear aplicaciones web completas y funcionales. Tengo experiencia en frontend y backend, bases de datos y entornos Linux, y me enfoco en escribir código limpio, estructurado y escalable mientras continúo perfeccionando mis habilidades.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Además, disfruto aprender nuevas tecnologías y enfrentar desafíos que me permitan mejorar como desarrollador. He trabajado en proyectos que abarcan desde la creación de interfaces intuitivas hasta la implementación de lógica de negocio y conexión con bases de datos. Me enfoco en escribir código claro, mantenible y orientado a buenas prácticas, mientras continúo ampliando mi experiencia en el desarrollo de aplicaciones completas.
            </p>
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${colorMap[skill.color]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
