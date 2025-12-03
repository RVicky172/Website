import React from 'react';
import { ExternalLink, Github, Code, Brain, Zap, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CloudIDE Pro",
      description: "A browser-based IDE built on Theia framework with integrated AI code assistance, real-time collaboration, and advanced debugging capabilities.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Theia", "TypeScript", "WebSockets", "Docker", "AI Integration"],
      features: ["AI Code Completion", "Real-time Collaboration", "Cloud Deployment", "Multi-language Support"],
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "DevTools Analytics Platform", 
      description: "Full-stack analytics platform for development teams, featuring real-time metrics, performance insights, and predictive analysis using machine learning.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "D3.js", "TensorFlow.js"],
      features: ["Real-time Dashboards", "Predictive Analytics", "Team Insights", "Performance Metrics"],
      icon: <Brain className="h-6 w-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI Code Assistant Extension",
      description: "VSCode extension that provides intelligent code suggestions, automated refactoring, and smart documentation generation using advanced language models.",
      image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["VSCode API", "OpenAI", "TypeScript", "AST Parsing", "Machine Learning"],
      features: ["Smart Autocomplete", "Code Refactoring", "Auto Documentation", "Bug Detection"],
      icon: <Zap className="h-6 w-6" />,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Collaborative Code Review Platform",
      description: "Enterprise-grade code review platform with AI-powered insights, automated testing integration, and advanced collaboration features.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "GraphQL", "MongoDB", "Redis", "CI/CD Integration"], 
      features: ["AI Code Analysis", "Automated Testing", "Team Collaboration", "Security Scanning"],
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of innovative solutions that demonstrate expertise in full-stack development, 
            IDE technologies, and AI integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                  {project.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;