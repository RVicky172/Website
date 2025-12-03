'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ExternalLink, Code2, Briefcase, Award } from 'lucide-react';
import { Suspense } from 'react';
import { Scene } from '@/src/components/canvas/Scene';
import { HeroModel } from '@/src/components/canvas/HeroModel';
import { Section } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/Button';
import { SkillCard } from '@/src/components/ui/SkillCard';
import { resumeData } from '@/data/config';

// Loading fallback for 3D scene
function SceneLoading() {
  return (
    <div className="w-full h-96 bg-dark-800 rounded-lg flex items-center justify-center">
      <div className="text-gray-400">Loading 3D scene...</div>
    </div>
  );
}

// Stats Component
function StatsCard({ icon: Icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="p-6 glass-light rounded-lg border border-[var(--color-border)] hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-lg">
          {Icon}
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{label}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-semibold">
                ✨ Associate Staff Engineer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Vicky Kumar
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              {resumeData.bio}
            </p>
            <p className="text-lg text-gray-400 mt-4">
              9+ years building enterprise-scale applications serving millions globally
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button variant="primary" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            {[
              { icon: Github, href: resumeData.social.github, label: 'GitHub' },
              { icon: Linkedin, href: resumeData.social.linkedin, label: 'LinkedIn' },
              { icon: Twitter, href: resumeData.social.twitter, label: 'Twitter' },
              { icon: Mail, href: `mailto:${resumeData.social.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 bg-dark-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors border border-gray-700 hover:border-blue-500/50"
                title={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-800"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">9+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">70+</p>
              <p className="text-sm text-gray-400">Countries Reached</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">Millions</p>
              <p className="text-sm text-gray-400">Users Served</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-96 lg:h-full min-h-96 hidden lg:block"
        >
          <Suspense fallback={<SceneLoading />}>
            <Scene className="w-full h-full rounded-lg">
              <HeroModel scale={1.5} />
            </Scene>
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A dedicated engineer with a passion for building scalable solutions"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {resumeData.summary}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatsCard
            icon={<Code2 className="text-blue-400" size={28} />}
            label="Professional Experience"
            value="9+ Years"
          />
          <StatsCard
            icon={<Briefcase className="text-purple-400" size={28} />}
            label="Global Impact"
            value="70+ Countries"
          />
          <StatsCard
            icon={<Award className="text-green-400" size={28} />}
            label="Users Served"
            value="Millions"
          />
        </div>

        {/* Experience Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="p-8 glass-light rounded-lg border border-[var(--color-border)] hover:border-blue-500/70 dark:hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{exp.company}</p>
                </div>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                    <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    { title: 'Frontend', skills: resumeData.skills.frontend },
    { title: 'Backend & APIs', skills: resumeData.skills.backend },
    { title: 'Testing & QA', skills: resumeData.skills.testing },
    { title: 'Infrastructure', skills: resumeData.skills.infrastructure },
    { title: 'Emerging Tech', skills: resumeData.skills.other },
  ];

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Deep expertise across the full technology stack"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.8 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{category.title}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill}
                    skill={skill}
                    delay={catIndex * 0.1 + index * 0.03}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Projects Section
function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Transformative solutions that impact millions of users globally"
      className="bg-dark-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="glass-light rounded-lg overflow-hidden border border-[var(--color-border)] hover:border-blue-500/70 dark:hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20">
                {/* Project Header with Gradient */}
                <div className="h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-black/20 dark:bg-black/30 group-hover:bg-black/10 dark:group-hover:bg-black/20 transition-all"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity }}
                      className="w-32 h-32 rounded-full border-2 border-white/20"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.highlights && (
                    <div className="mb-6 p-4 bg-blue-50 dark:bg-dark-900/50 rounded-lg border border-blue-200 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 rounded-full text-xs font-medium border border-blue-300 dark:border-blue-700/40 hover:border-blue-500 dark:hover:border-blue-500/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold"
                  >
                    Explore Project <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      title="Impact & Achievements"
      subtitle="Notable accomplishments and recognition"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="p-6 glass-light rounded-lg border border-[var(--color-border)] hover:border-blue-500/70 dark:hover:border-blue-500/50 transition-all group"
            >
              <Award className="text-blue-600 dark:text-blue-400 mb-4 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors" size={32} />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{testimonial.name}</h4>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-4">{testimonial.role}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <Section
      id="contact"
      title="Let&apos;s Connect"
      subtitle="Open to exciting opportunities and collaborations"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-light rounded-lg p-8 border border-[var(--color-border)] hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all"
        >
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', href: `mailto:${resumeData.social.email}`, value: resumeData.social.email },
              { icon: Linkedin, label: 'LinkedIn', href: resumeData.social.linkedin, value: 'vicky-rohilla' },
              { icon: Github, label: 'GitHub', href: resumeData.social.github, value: 'github.com' },
              { icon: Twitter, label: 'Twitter', href: resumeData.social.twitter, value: '@twitter' },
            ].map(({ icon: Icon, label, href, value }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-blue-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/5 transition-all group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-500/30 transition-colors">
                  <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
                  <p className="text-gray-900 dark:text-gray-200 font-semibold">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div className="mt-8 pt-8 border-t border-[var(--color-border)]">
            <Button variant="primary" size="lg" className="w-full">
              Send Me an Email
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Vicky Kumar</h3>
            <p className="text-gray-700 dark:text-gray-400">Associate Staff Engineer building scalable web applications.</p>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-400">
              <li><a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: resumeData.social.github },
                { icon: Linkedin, href: resumeData.social.linkedin },
                { icon: Twitter, href: resumeData.social.twitter },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-border)] pt-8 text-center text-gray-700 dark:text-gray-400 text-sm">
          <p>&copy; 2025 Vicky Kumar. All rights reserved.</p>
          <p className="mt-2">
            Built with React, Next.js, Tailwind CSS, Three.js, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
