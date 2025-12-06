'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code2,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { Suspense } from 'react';
import { Scene } from '@/src/components/canvas/Scene';
import { HeroModel } from '@/src/components/canvas/HeroModel';
import { FullScreenSection } from '@/src/components/ui/FullScreenSection';
import { Button } from '@/src/components/ui/Button';
import { BentoGrid, BentoItem } from '@/src/components/ui/BentoGrid';
import { Spotlight } from '@/src/components/ui/Spotlight';
import { resumeData } from '@/data/config';

// Hero Section - Clean & Bold
function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-grid-pattern pt-20 md:pt-0"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-glow rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border-subtle mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-text-secondary text-sm font-medium tracking-wide">Available for work</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-text-primary">
              Vicky <br />
              <span className="bg-clip-text bg-gradient-to-r from-accent-primary to-purple-500">
                Kumar
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-xl font-light leading-relaxed">
              Associate Staff Engineer architecting <span className="text-text-primary font-semibold">cloud-native</span> solutions and building <span className="text-text-primary font-semibold">enterprise-scale</span> user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <Button
              variant="primary"
              size="lg"
              className="group shadow-lg shadow-accent-glow/20"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass border-border-subtle hover:bg-bg-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 pt-8 items-center">
            <span className="h-px w-12 bg-border-subtle" />
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
                className="text-text-secondary hover:text-accent-primary transition-colors transform hover:scale-110 duration-200"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[400px] sm:h-[500px] lg:h-[700px] hidden lg:block relative"
        >
          {/* 3D Scene Container */}
          <Suspense fallback={null}>
            <Scene className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
              <HeroModel scale={1.8} />
            </Scene>
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}

// About Section - Bento Style
function AboutSection() {
  return (
    <FullScreenSection id="about" title="About Me">
      <BentoGrid>
        <BentoItem colSpan={2} rowSpan={2} className="p-8 flex flex-col justify-between bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-border-subtle">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">Professional Journey</h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              {resumeData.summary}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border-subtle pt-8">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-accent-primary">9+</p>
              <p className="text-xs md:text-sm text-text-secondary uppercase tracking-widest font-medium">Years Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-accent-primary">70+</p>
              <p className="text-xs md:text-sm text-text-secondary uppercase tracking-widest font-medium">Countries Reached</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-accent-primary">100M+</p>
              <p className="text-xs md:text-sm text-text-secondary uppercase tracking-widest font-medium">Users Impacted</p>
            </div>
          </div>
        </BentoItem>

        <BentoItem className="p-8 flex flex-col justify-center items-center text-center gap-6 bg-gradient-to-br from-bg-secondary/50 to-bg-tertiary/50 border border-border-subtle hover:border-accent-primary/30 transition-colors">
          <div className="p-4 rounded-lg bg-bg-tertiary border border-border-subtle">
            <Code2 size={40} className="text-accent-primary" />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-text-primary text-lg">Full Stack Developer</p>
            <p className="text-sm text-text-secondary">Frontend & Backend Expertise</p>
          </div>
        </BentoItem>

        <BentoItem className="p-8 flex flex-col justify-center items-center text-center gap-6 bg-gradient-to-br from-bg-secondary/50 to-bg-tertiary/50 border border-border-subtle hover:border-accent-primary/30 transition-colors">
          <div className="p-4 rounded-lg bg-bg-tertiary border border-border-subtle">
            <Briefcase size={40} className="text-accent-primary" />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-text-primary text-lg">Team Leadership</p>
            <p className="text-sm text-text-secondary">Mentoring & Architecture</p>
          </div>
        </BentoItem>
      </BentoGrid>
    </FullScreenSection>
  );
}

// Skills Section - Categorized
function SkillsSection() {
  const skillCategories = [
    { title: 'Frontend', skills: resumeData.skills.frontend },
    { title: 'Backend', skills: resumeData.skills.backend },
    { title: 'Infrastructure', skills: resumeData.skills.infrastructure },
    { title: 'Other', skills: resumeData.skills.other },
  ];

  return (
    <FullScreenSection id="skills" title="Technical Expertise">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 p-6 rounded-lg bg-bg-secondary border border-border-subtle hover:border-accent-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-text-primary pb-3 border-b border-border-subtle">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50"></span>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

// Experience Section - Timeline
function ExperienceSection() {
  return (
    <FullScreenSection id="experience" title="Work Experience">
      <div className="max-w-4xl mx-auto space-y-8">
        {resumeData.experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative pl-8 pb-8 border-l-2 border-border-subtle hover:border-accent-primary/50 transition-colors"
          >
            {/* Timeline dot */}
            <div className="absolute -left-4 top-0 w-6 h-6 bg-bg-primary border-2 border-border-subtle group-hover:border-accent-primary group-hover:bg-accent-primary/20 rounded-full transition-all" />
            
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                  {job.role}
                </h3>
                <p className="text-accent-primary font-medium text-sm">{job.company}</p>
                <p className="text-text-secondary text-sm mt-1">{job.duration}</p>
              </div>
              <p className="text-text-secondary leading-relaxed">{job.description}</p>
              <ul className="space-y-2 mt-4">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary text-sm">
                    <span className="text-accent-primary/60 mt-1">▪</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </FullScreenSection>
  );
}

// Projects Section - Bento Grid
function ProjectsSection() {
  const projects = resumeData.projects;

  return (
    <FullScreenSection id="projects" title="Featured Projects">
      <BentoGrid>
        {projects.map((project, index) => (
          <BentoItem
            key={index}
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            className="group relative flex flex-col bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-border-subtle hover:border-accent-primary/30 transition-all overflow-hidden"
          >
            <div className="flex-1 p-6 lg:p-8 z-10 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-bg-tertiary rounded-lg border border-border-subtle group-hover:border-accent-primary/30 transition-colors">
                  <Code2 size={24} className="text-accent-primary/70" />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors p-2 hover:bg-bg-secondary rounded-lg"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="mt-auto">
                <h3 className="text-lg lg:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm lg:text-base line-clamp-3 mb-6">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-text-secondary text-xs lg:text-sm">
                        <span className="text-accent-primary/60">▪</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border-subtle">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-bg-tertiary border border-border-subtle rounded-full text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${
                index === 0
                  ? 'from-accent-primary/20 to-purple-500/20'
                  : 'from-accent-primary/20 to-transparent'
              }`}
            />
          </BentoItem>
        ))}
      </BentoGrid>
    </FullScreenSection>
  );
}

// Education Section
function EducationSection() {
  return (
    <FullScreenSection id="education" title="Education">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 lg:p-8 rounded-lg bg-gradient-to-r from-bg-secondary to-bg-tertiary border border-border-subtle hover:border-accent-primary/30 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-text-primary">{edu.degree}</h3>
                  <span className="text-accent-primary font-medium text-sm">{edu.year}</span>
                </div>
                <div>
                  <p className="text-text-primary font-medium">{edu.school}</p>
                  <p className="text-text-secondary text-sm mt-1">
                    {edu.field} • {edu.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <FullScreenSection id="testimonials" title="Impact & Recognition">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {resumeData.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 lg:p-8 rounded-lg bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-border-subtle hover:border-accent-primary/30 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed italic">"{testimonial.text}"</p>
            </div>
            <div className="pt-6 border-t border-border-subtle mt-6">
              <h4 className="text-lg font-bold text-text-primary">{testimonial.name}</h4>
              <p className="text-accent-primary text-sm font-medium">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </FullScreenSection>
  );
}

// Contact Section - Enhanced
function ContactSection() {
  return (
    <FullScreenSection id="contact" title="Get in Touch">
      <div className="max-w-2xl mx-auto w-full">
        <Spotlight className="p-8 lg:p-12 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary">Let&apos;s Build Something Great</h3>
            <p className="text-lg text-text-secondary">
              I&apos;m always interested in hearing about new opportunities and innovative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <a
              href={`mailto:${resumeData.social.email}`}
              className="px-6 py-4 rounded-lg bg-bg-tertiary border border-border-subtle hover:border-accent-primary/50 hover:bg-accent-primary/10 transition-all text-text-secondary hover:text-text-primary text-sm font-medium"
            >
              <div className="font-bold text-accent-primary mb-1">Email</div>
              {resumeData.social.email}
            </a>
            <a
              href={`tel:${resumeData.phone}`}
              className="px-6 py-4 rounded-lg bg-bg-tertiary border border-border-subtle hover:border-accent-primary/50 hover:bg-accent-primary/10 transition-all text-text-secondary hover:text-text-primary text-sm font-medium"
            >
              <div className="font-bold text-accent-primary mb-1">Phone</div>
              {resumeData.phone}
            </a>
            <div className="px-6 py-4 rounded-lg bg-bg-tertiary border border-border-subtle text-text-secondary text-sm font-medium">
              <div className="font-bold text-accent-primary mb-1">Location</div>
              {resumeData.location}
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full shadow-lg shadow-accent-glow/20"
            onClick={() => window.location.href = `mailto:${resumeData.social.email}`}
          >
            Send Me a Message
          </Button>

          <div className="flex justify-center gap-8 border-t border-border-subtle pt-8">
            {[
              { icon: Github, href: resumeData.social.github, label: 'GitHub' },
              { icon: Linkedin, href: resumeData.social.linkedin, label: 'LinkedIn' },
              { icon: Twitter, href: resumeData.social.twitter, label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors"
                title={label}
              >
                <Icon size={24} />
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </Spotlight>
      </div>
    </FullScreenSection>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent-primary/30">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />

      <footer className="py-12 text-center text-zinc-500 text-sm border-t border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex justify-center gap-6 pb-6 border-b border-zinc-900/50">
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
                className="text-zinc-500 hover:text-accent-primary transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p>© 2025 Vicky Kumar. Architecting scalable solutions with React, TypeScript & Cloud-Native Technologies.</p>
        </div>
      </footer>
    </main>
  );
}
