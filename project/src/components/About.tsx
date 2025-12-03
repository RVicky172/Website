import React from 'react';
import { User, Award, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between 
            complex technology and intuitive user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Professional Profile</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                As a seasoned full-stack JavaScript developer with 8 years of experience, 
                I specialize in building scalable web applications and innovative development tools. 
                My expertise spans from modern frontend frameworks to robust backend architectures.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Specialization</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pioneer in browser-based IDE development, with deep expertise in VSCode and Theia 
                architectures. I've successfully integrated AI capabilities into development 
                environments, enhancing developer productivity and code quality.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <Calendar className="h-8 w-8 mb-3" />
                <div className="text-2xl font-bold mb-1">8+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <Award className="h-8 w-8 mb-3" />
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-purple-100">Projects Delivered</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Innovation-driven development approach
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  User-centric design philosophy
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Continuous learning and adaptation
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Collaborative team leadership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;