import { techStack } from '../constants/index.js';

const TechStack = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text mb-10 text-center">My Tech Stack</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {techStack.map((tech) => (
          <div key={`tech-${tech.id}`} className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-2xl shadow-md w-20 h-20 flex items-center justify-center">
              <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
            </div>
            <p className="mt-2 text-white-800 text-sm font-medium text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
