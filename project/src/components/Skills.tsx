import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development", 
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express/Fastify", level: 90 },
        { name: "GraphQL", level: 85 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "IDE Development",
      color: "from-purple-500 to-violet-500", 
      skills: [
        { name: "VSCode Extensions", level: 90 },
        { name: "Theia Framework", level: 85 },
        { name: "Language Servers", level: 80 },
        { name: "Monaco Editor", level: 85 }
      ]
    },
    {
      title: "AI Integration",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "OpenAI API", level: 85 },
        { name: "Code Analysis", level: 80 },
        { name: "ML Model Integration", level: 75 },
        { name: "AI-Powered Tooling", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set built through years of hands-on experience 
            and continuous learning in cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300">
              <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}>
                {category.title}
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">JavaScript</div>
            <div className="text-gray-300">Primary Language</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">React</div>
            <div className="text-gray-300">Frontend Framework</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">Node.js</div>
            <div className="text-gray-300">Backend Runtime</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">AI/ML</div>
            <div className="text-gray-300">Integration Expert</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;