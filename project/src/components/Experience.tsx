import React from 'react';
import { Briefcase, Calendar, MapPin, Award, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer & IDE Architect",
      company: "TechForward Solutions",
      location: "San Francisco, CA",
      duration: "2021 - Present",
      type: "Full-time",
      description: "Leading development of next-generation browser-based IDEs with AI integration.",
      achievements: [
        "Architected and built a VSCode-based browser IDE serving 50K+ developers",
        "Integrated OpenAI GPT models for intelligent code completion and refactoring",
        "Reduced development setup time by 80% through containerized environments",
        "Mentored 12+ junior developers and established coding standards"
      ],
      technologies: ["Theia", "VSCode Extensions", "React", "Node.js", "Docker", "AI/ML APIs"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Lead JavaScript Developer", 
      company: "CodeCraft Industries",
      location: "Austin, TX",
      duration: "2019 - 2021",
      type: "Full-time",
      description: "Specialized in building developer tools and enhancing IDE functionality with modern web technologies.",
      achievements: [
        "Developed Monaco Editor integrations for web-based code editing",
        "Built Language Server Protocol implementations for 5+ programming languages",
        "Improved IDE performance by 40% through optimization and caching strategies",
        "Led cross-functional team of 8 developers on mission-critical projects"
      ],
      technologies: ["Monaco Editor", "LSP", "TypeScript", "WebSockets", "GraphQL", "PostgreSQL"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Full-Stack JavaScript Developer",
      company: "Innovation Labs",
      location: "Seattle, WA", 
      duration: "2017 - 2019",
      type: "Full-time",
      description: "Built scalable web applications and contributed to open-source developer tooling projects.",
      achievements: [
        "Delivered 20+ full-stack applications using React and Node.js",
        "Contributed to Theia open-source project with 500+ GitHub stars",
        "Implemented real-time collaboration features using WebRTC and WebSockets",
        "Achieved 99.9% uptime for mission-critical applications"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "AWS"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", year: "2023" },
    { name: "Google Cloud Professional Developer", year: "2022" },
    { name: "Microsoft Azure AI Engineer", year: "2023" }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of continuous growth, innovation, and leadership in cutting-edge 
            development technologies and IDE architecture.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-5 w-5 text-blue-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-300 mb-2">
                    <div className="font-semibold text-blue-400">{exp.company}</div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.duration} • {exp.type}
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${exp.color} text-white text-sm font-medium`}>
                  {exp.duration.split(' - ')[1] === 'Present' ? 'Current Role' : 'Previous Role'}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-gray-300">
                      <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-700 rounded-lg">
                <Award className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;