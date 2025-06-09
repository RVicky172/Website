import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Vicky Kumar</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-Stack JavaScript Developer specializing in browser-based IDEs and AI integration. 
              Building the future of development tools, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:vicky.kumar@example.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400 transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors duration-200">Experience</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2 text-sm">
              <li>Full-Stack Development</li>
              <li>IDE Architecture</li>
              <li>AI Integration</li>
              <li>React & Node.js</li>
              <li>VSCode Extensions</li>
              <li>Theia Framework</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Vicky Kumar. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and lots of coffee.</span>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;