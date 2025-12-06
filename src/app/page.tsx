'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink, Code2, Briefcase, ArrowRight } from 'lucide-react';
import { Suspense } from 'react';
import { Scene } from '@/src/components/canvas/Scene';
import { HeroModel } from '@/src/components/canvas/HeroModel';
import { FullScreenSection } from '@/src/components/ui/FullScreenSection';
import { Button } from '@/src/components/ui/Button';
import { SkillCard } from '@/src/components/ui/SkillCard';
import { BentoGrid, BentoItem } from '@/src/components/ui/BentoGrid';
import { Spotlight } from '@/src/components/ui/Spotlight';
import { resumeData } from '@/data/config';

// Hero Section - Clean & Bold
function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-grid-pattern"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-glow rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border-subtle mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-text-secondary text-sm font-medium tracking-wide">Available for work</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-text-primary">
              Vicky <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-purple-500">
                Kumar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mt-8 max-w-lg font-light leading-relaxed">
              Associate Staff Engineer architecting <span className="text-text-primary font-medium">cloud-native</span> solutions and building <span className="text-text-primary font-medium">State of the Art</span> user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" size="lg" className="group shadow-lg shadow-accent-glow/20">
              View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="glass border-border-subtle hover:bg-bg-secondary">
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
          className="h-[500px] lg:h-[700px] hidden lg:block relative"
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
        <BentoItem colSpan={2} rowSpan={2} className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-zinc-50 mb-2">My Journey</h3>
            <p className="text-zinc-400 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold text-zinc-50">9+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years Exp</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-zinc-50">70+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Countries</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-zinc-50">M+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Users</p>
            </div>
          </div>
        </BentoItem>

        <BentoItem className="p-6 flex flex-col justify-center items-center text-center gap-4">
          <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-blue-500">
            <Code2 size={32} />
          </div>
          <div>
            <p className="font-bold text-zinc-50">Full Stack</p>
            <p className="text-sm text-zinc-500">Frontend & Backend</p>
          </div>
        </BentoItem>

        <BentoItem className="p-6 flex flex-col justify-center items-center text-center gap-4">
          <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-purple-500">
            <Briefcase size={32} />
          </div>
          <div>
            <p className="font-bold text-zinc-50">Leadership</p>
            <p className="text-sm text-zinc-500">Team Mentoring</p>
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
  ];

  return (
    <FullScreenSection id="skills" title="Expertise">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-lg font-medium text-zinc-50 border-b border-zinc-800 pb-2">{category.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </FullScreenSection>
  );
}

// Projects Section - Bento Grid
function ProjectsSection() {
  const projects = resumeData.projects.slice(0, 3);

  return (
    <FullScreenSection id="projects" title="Selected Work">
      <BentoGrid>
        {projects.map((project, index) => (
          <BentoItem
            key={index}
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            className="group relative flex flex-col"
          >
            <div className="flex-1 p-6 z-10 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-zinc-950/50 rounded-lg border border-zinc-800">
                  <Code2 size={20} className="text-zinc-400" />
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-50 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="mt-auto">
                <h3 className="text-xl font-bold text-zinc-50 mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Abstract Gradient Background */}
            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${index === 0 ? 'from-blue-500/20 to-purple-500/20' : 'from-zinc-800/20 to-zinc-900/20'}`} />
          </BentoItem>
        ))}
      </BentoGrid>
    </FullScreenSection>
  );
}

// Contact Section - Minimal
function ContactSection() {
  return (
    <FullScreenSection id="contact" title="Get in Touch">
      <div className="max-w-xl mx-auto w-full">
        <Spotlight className="p-8 text-center">
          <h3 className="text-2xl font-bold text-zinc-50 mb-4">Ready to start a project?</h3>
          <p className="text-zinc-400 mb-8">
            I&apos;m currently available for freelance work and open to full-time opportunities.
          </p>
          <Button variant="primary" size="lg" className="w-full md:w-auto" onClick={() => window.location.href = `mailto:${resumeData.social.email}`}>
            Say Hello
          </Button>

          <div className="mt-12 flex justify-center gap-8 border-t border-zinc-800 pt-8">
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
                className="text-zinc-500 hover:text-zinc-50 transition-colors"
              >
                <Icon size={24} />
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
      <ProjectsSection />
      <ContactSection />

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© 2025 Vicky Kumar. Crafted with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
