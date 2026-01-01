'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Scene } from '@/src/components/canvas/Scene';
import { HeroModel } from '@/src/components/canvas/HeroModel';
import { FullScreenSection } from '@/src/components/ui/FullScreenSection';
import { Button } from '@/src/components/ui/Button';
import { TypeWriter } from '@/src/components/ui/TypeWriter';
import { AnimatedCounter } from '@/src/components/ui/AnimatedCounter';
import { MagneticButton } from '@/src/components/ui/MagneticButton';
import { TiltCard } from '@/src/components/ui/TiltCard';
import { TechEcosystem } from '@/src/components/ui/TechEcosystem';
import { TestimonialCarousel } from '@/src/components/ui/TestimonialCarousel';
import { resumeData } from '@/data/config';
import { UIIcons } from '@/src/lib/techIcons';

// Hero Section - Clean & Bold
function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Animated Particle Background - Moved to Layout */}

      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-glow rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="space-y-6"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border-subtle hover:border-green-500/30 transition-colors mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-sm shadow-green-400"></span>
              </span>
              <span className="text-text-secondary text-sm font-medium tracking-wide">Available for work</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-text-primary">
              Vicky <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 animate-gradient">
                Kumar
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-xl font-light leading-relaxed">
              <TypeWriter
                words={[
                  'Associate Staff Engineer',
                  'Cloud-Native Architect',
                  'Full-Stack Developer',
                  'Tech Lead & Mentor'
                ]}
                className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              />
              {' '}architecting cloud-native solutions and building enterprise-scale user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <MagneticButton strength={0.2}>
              <Button
                variant="primary"
                size="lg"
                icon={<UIIcons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                View Projects
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </MagneticButton>
          </div>

          <div className="flex gap-6 pt-4 items-center">
            <span className="h-px w-12 bg-border-subtle" />
            {[
              { icon: UIIcons.Github, href: resumeData.social.github },
              { icon: UIIcons.Linkedin, href: resumeData.social.linkedin },
              { icon: UIIcons.Twitter, href: resumeData.social.twitter },
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
          {/* Glow backdrop for 3D scene */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />

          {/* 3D Scene Container */}
          <div className="relative w-full h-full">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin" />
              </div>
            }>
              <Scene className="w-full h-full">
                <HeroModel scale={1.5} />
              </Scene>
            </Suspense>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </div>
    </section>
  );
}

// About Section - Modern Redesign
function AboutSection() {
  const stats = [
    { value: 9, suffix: '+', label: 'Years Experience', gradient: 'from-blue-500 to-purple-500' },
    { value: 70, suffix: '+', label: 'Countries Reached', gradient: 'from-purple-500 to-pink-500' },
    { value: 100, suffix: 'M+', label: 'Users Impacted', gradient: 'from-cyan-500 to-blue-500' },
  ];

  const highlights = [
    { icon: UIIcons.Code2, title: 'Full Stack Developer', desc: 'Frontend & Backend Expertise', gradient: 'from-blue-500 to-cyan-500' },
    { icon: UIIcons.Briefcase, title: 'Team Leadership', desc: 'Mentoring & Architecture', gradient: 'from-purple-500 to-pink-500' },
  ];

  return (
    <FullScreenSection id="about" title="About Me">
      <div className="max-w-6xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle backdrop-blur-sm overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-text-primary to-blue-400 bg-clip-text text-transparent">
                    Professional Journey
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {resumeData.summary}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{item.title}</p>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle hover:border-blue-500/30 transition-all duration-300 text-center overflow-hidden"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                />
                <p className="text-sm text-text-secondary mt-2 font-medium tracking-wide">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}


// Skills Section - Premium Redesign
function SkillsSection() {
  const skillCategories = [
    { title: 'Frontend', skills: resumeData.skills.frontend, gradient: 'from-blue-500 to-cyan-500', icon: '🎨' },
    { title: 'Backend', skills: resumeData.skills.backend, gradient: 'from-purple-500 to-pink-500', icon: '⚡' },
    { title: 'Infrastructure', skills: resumeData.skills.infrastructure, gradient: 'from-emerald-500 to-cyan-500', icon: '☁️' },
    { title: 'Other', skills: resumeData.skills.other, gradient: 'from-orange-500 to-pink-500', icon: '🔧' },
  ];

  return (
    <FullScreenSection id="skills" title="Technical Expertise">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle hover:border-blue-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Background glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Header */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills chips */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-bg-primary/50 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

// Experience Section - Enhanced Timeline
function ExperienceSection() {
  return (
    <FullScreenSection id="experience" title="Work Experience">
      <div className="max-w-4xl mx-auto space-y-0">
        {resumeData.experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative pl-10 pb-12 last:pb-0"
          >
            {/* Timeline line */}
            {index < resumeData.experience.length - 1 && (
              <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />
            )}

            {/* Timeline dot with glow */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Content card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/50 border border-border-subtle hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-text-primary to-blue-400 bg-clip-text text-transparent">
                    {job.role}
                  </h3>
                  <p className="text-blue-400 font-medium text-sm mt-1">{job.company}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-text-secondary">
                  {job.duration}
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4">{job.description}</p>

              <ul className="space-y-2">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary text-sm group/item">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="group-hover/item:text-text-primary transition-colors">{highlight}</span>
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

// Projects Section - Premium Redesign
function ProjectsSection() {
  const projects = resumeData.projects;
  const gradients = [
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-500',
    'from-cyan-500 to-blue-500',
    'from-emerald-500 to-cyan-500',
  ];

  return (
    <FullScreenSection id="projects" title="Featured Projects">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <TiltCard tiltAmount={6} glareOpacity={0.1}>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle hover:border-blue-500/20 transition-all duration-500 overflow-hidden h-full">
                  {/* Background gradient glow */}
                  <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} shadow-lg`}>
                        <UIIcons.Code2 size={24} className="text-white" />
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-primary/50 border border-border-subtle text-text-secondary hover:text-blue-400 hover:border-blue-500/30 transition-all text-sm font-medium"
                      >
                        <span>View Project</span>
                        <UIIcons.ExternalLink size={14} />
                      </a>
                    </div>

                    {/* Title & Description */}
                    <h3 className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${gradients[index % gradients.length]} bg-clip-text text-transparent mb-3`}>
                      {project.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <div key={i} className="flex gap-3 text-text-secondary text-sm">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} mt-2 flex-shrink-0`} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                      {project.technologies.slice(0, index === 0 ? 6 : 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-primary/50 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-blue-500/30 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

// Education Section - Enhanced
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
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-bg-secondary/90 to-bg-tertiary/50 border border-border-subtle hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-opacity" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-text-primary to-blue-400 bg-clip-text text-transparent">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 font-semibold mt-2">{edu.school}</p>
                  </div>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-text-secondary whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                  <span className="text-sm">{edu.field}</span>
                  <span className="text-border-subtle">•</span>
                  <span className="text-sm">{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

// Testimonials Section - Carousel
function TestimonialsSection() {
  return (
    <FullScreenSection id="testimonials" title="Impact & Recognition">
      <TestimonialCarousel
        testimonials={resumeData.testimonials}
        autoPlayInterval={6000}
      />
    </FullScreenSection>
  );
}

// Contact Section - Premium Redesign
function ContactSection() {
  const contactMethods = [
    { icon: UIIcons.Mail, label: 'Email', value: resumeData.social.email, href: `mailto:${resumeData.social.email}`, gradient: 'from-blue-500 to-cyan-500' },
    { icon: UIIcons.Phone, label: 'Phone', value: resumeData.phone, href: `tel:${resumeData.phone}`, gradient: 'from-purple-500 to-pink-500' },
    { icon: UIIcons.MapPin, label: 'Location', value: resumeData.location, href: null, gradient: 'from-emerald-500 to-cyan-500' },
  ];

  const socialLinks = [
    { icon: UIIcons.Github, href: resumeData.social.github, label: 'GitHub' },
    { icon: UIIcons.Linkedin, href: resumeData.social.linkedin, label: 'LinkedIn' },
    { icon: UIIcons.Twitter, href: resumeData.social.twitter, label: 'Twitter' },
  ];

  return (
    <FullScreenSection id="contact" title="Get in Touch">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle overflow-hidden text-center mb-8"
        >
          {/* Background decorations */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            >
              Let's Build Something Great
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-xl mx-auto mb-8"
            >
              I'm always interested in hearing about new opportunities and innovative projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<UIIcons.Mail size={18} />}
                iconPosition="left"
                onClick={() => window.location.href = `mailto:${resumeData.social.email}`}
              >
                Send Me a Message
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {method.href ? (
                <a
                  href={method.href}
                  className="group block p-6 rounded-2xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle hover:border-blue-500/30 transition-all duration-300 text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <method.icon size={22} className="text-white" />
                  </div>
                  <p className={`font-bold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent mb-1`}>
                    {method.label}
                  </p>
                  <p className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
                    {method.value}
                  </p>
                </a>
              ) : (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-lg`}>
                    <method.icon size={22} className="text-white" />
                  </div>
                  <p className={`font-bold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent mb-1`}>
                    {method.label}
                  </p>
                  <p className="text-text-secondary text-sm">{method.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group p-4 rounded-2xl bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/30 border border-border-subtle hover:border-blue-500/30 transition-all duration-300"
              title={label}
            >
              <Icon size={24} className="text-text-secondary group-hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </FullScreenSection>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent-primary/30">
      <HeroSection />
      <AboutSection />

      {/* Tech Stack Marquee */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Tech Stack
          </motion.h2>
          <TechEcosystem />
        </div>
      </section>

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
              { icon: UIIcons.Github, href: resumeData.social.github },
              { icon: UIIcons.Linkedin, href: resumeData.social.linkedin },
              { icon: UIIcons.Twitter, href: resumeData.social.twitter },
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
