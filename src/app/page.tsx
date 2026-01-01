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
import { resumeData } from '@/data/config';
import { UIIcons, getTechIcon } from '@/src/lib/techIcons';
import { SiReact, SiNodedotjs, SiDocker, SiGit } from 'react-icons/si';
import { HiAcademicCap } from 'react-icons/hi';

// Hero Section - Immersive & High-Impact
function HeroSection() {
  return (
    <FullScreenSection id="hero" className="relative pt-32 md:pt-40">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphic border border-white/5 text-blue-400 font-medium text-sm tracking-wide"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Available for Strategic Roles</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9]">
              <span className="block text-text-primary">Full-Stack</span>
              <span className="block gradient-text animate-gradient">Architect.</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
              <TypeWriter
                words={[
                  'Associate Staff Engineer',
                  'Cloud-Native Architect',
                  'Full-Stack Developer',
                  'Tech Lead & Mentor'
                ]}
                className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              />
              <br />
              Building enterprise-scale distributed systems and user experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
            <MagneticButton strength={0.2}>
              <Button
                variant="primary"
                size="lg"
                className="rounded-full px-12 h-16 text-xl font-bold shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Launch Project
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-12 h-16 text-xl font-bold border-white/10 hover:bg-white/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </Button>
            </MagneticButton>
          </div>

          <div className="flex justify-center gap-8 pt-12">
            {[
              { icon: UIIcons.Github, href: resumeData.social.github, label: "GitHub" },
              { icon: UIIcons.Linkedin, href: resumeData.social.linkedin, label: "LinkedIn" },
              { icon: UIIcons.Twitter, href: resumeData.social.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-text-secondary hover:text-white transition-all p-4 rounded-full glass-morphic border border-white/5 hover:border-white/20"
                title={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hero-specific 3D Scene Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
          </div>
        }>
          <Scene className="w-full h-full opacity-40">
            <HeroModel scale={2} />
          </Scene>
        </Suspense>
      </div>
    </FullScreenSection>
  );
}

// About Section - Modern Redesign
// About Section - Bento Grid Redesign
function AboutSection() {
  const stats = [
    { value: 9, suffix: '+', label: 'Years Experience', icon: UIIcons.Briefcase, color: 'text-blue-400' },
    { value: 100, suffix: 'M+', label: 'Global Users', icon: UIIcons.Sparkles, color: 'text-purple-400' },
    { value: 50, suffix: '+', label: 'Systems Built', icon: UIIcons.Code2, color: 'text-cyan-400' },
  ];

  return (
    <FullScreenSection id="about" title="The Architect">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[280px]">
          {/* Bio Card - Large Bento Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 md:row-span-2 glass-morphic rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-white/10 transition-all bg-grid-pattern bg-[length:20px_20px]"
          >
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase">
                Biography
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight tracking-tighter">
                Engineering <br />
                <span className="text-blue-500">Digital Mastery.</span>
              </h3>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-light">
                {resumeData.summary}
              </p>
              <div className="flex items-center gap-4 text-white font-bold group-hover:gap-6 transition-all cursor-pointer">
                <span>Core expertise in scalability</span>
                <UIIcons.ArrowRight size={20} className="text-blue-500" />
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-700" />
          </motion.div>

          {/* Stats Grid for Bento */}
          <div className="md:col-span-4 md:row-span-2 grid grid-cols-1 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-morphic rounded-[2rem] p-8 flex items-center gap-6 group hover:border-white/10 transition-all"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform shadow-xl`}>
                  <stat.icon size={28} />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-text-primary">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-text-secondary font-medium tracking-wide italic">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Location & Interactive Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-12 glass-morphic rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group border border-white/5"
          >
            <div className="flex items-center gap-6 z-10">
              <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-inner">
                <UIIcons.MapPin size={36} />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-black text-text-primary tracking-tight">Currently operating from</h4>
                <p className="text-lg text-text-secondary font-light">{resumeData.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 z-10">
              {['Next.js', 'TypeScript', 'Kubernetes', 'Cloud Native'].map(tag => (
                <span key={tag} className="px-5 py-2 rounded-full glass border border-white/5 text-sm font-medium text-text-secondary hover:text-white hover:border-white/20 transition-all">
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </div>
    </FullScreenSection>
  );
}


// Skills Section - Premium Redesign
// Skills Section - Bento-Style Grid
function SkillsSection() {
  const skillCategories = [
    { title: 'Frontend', skills: resumeData.skills.frontend, gradient: 'from-blue-500 to-cyan-500', IconComponent: SiReact, delay: 0 },
    { title: 'Backend', skills: resumeData.skills.backend, gradient: 'from-purple-500 to-pink-500', IconComponent: SiNodedotjs, delay: 0.1 },
    { title: 'Cloud & Infrastructure', skills: resumeData.skills.infrastructure, gradient: 'from-emerald-500 to-teal-400', IconComponent: SiDocker, delay: 0.2 },
    { title: 'Core & AI', skills: resumeData.skills.other, gradient: 'from-orange-500 to-red-500', IconComponent: SiGit, delay: 0.3 },
  ];

  return (
    <FullScreenSection id="skills" title="Arsenal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: category.delay }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2rem] glass-morphic border border-white/5 hover:border-white/10 transition-all overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${category.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-all duration-700`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-2xl mb-8 group-hover:scale-110 transition-transform`}>
                  <category.IconComponent size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.skills.map((skill) => {
                    const SkillIcon = getTechIcon(skill);
                    return (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white/5 border border-white/5 text-text-secondary hover:text-white hover:border-white/20 transition-all cursor-default"
                      >
                        <SkillIcon size={14} className="group-hover:text-blue-400 transition-colors" />
                        <span>{skill}</span>
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

// Experience Section - Enhanced Timeline
// Experience Section - Cyber Timeline
function ExperienceSection() {
  return (
    <FullScreenSection id="experience" title="The Journey">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative border-l-2 border-dashed border-white/10 space-y-16 pl-8 md:pl-16">
          {resumeData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Animated Glow on Timeline */}
              <div className="absolute -left-[33px] md:-left-[65px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-transform" />

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {job.role}
                  </h3>
                  <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">
                    {job.duration}
                  </span>
                </div>
                <p className="text-xl font-bold bg-white/10 w-fit px-4 py-1 rounded-lg text-text-secondary border border-white/5">
                  {job.company}
                </p>
                <p className="text-lg text-text-secondary leading-relaxed font-light">
                  {job.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {job.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-3 text-text-secondary text-sm group/item">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 flex-shrink-0" />
                      <span className="group-hover/item:text-white transition-colors">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

// Projects Section - Dynamic 12-Column Bento Grid
function ProjectsSection() {
  const gradients = [
    'from-blue-600/20 to-cyan-500/10',
    'from-purple-600/20 to-pink-500/10',
    'from-emerald-600/20 to-teal-500/10',
    'from-orange-600/20 to-red-500/10',
  ];

  const colSpans = [
    'lg:col-span-8 md:col-span-12', // Wide
    'lg:col-span-4 md:col-span-12', // Narrow
    'lg:col-span-5 md:col-span-12', // Medium
    'lg:col-span-7 md:col-span-12', // Wide
  ];

  return (
    <FullScreenSection id="projects" title="Featured Work">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {resumeData.projects.map((project, index) => {
            const isWide = colSpans[index % colSpans.length].includes('col-span-8') || colSpans[index % colSpans.length].includes('col-span-7');

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${colSpans[index % colSpans.length]} glass-morphic rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all overflow-hidden flex flex-col ${isWide ? 'lg:flex-row' : 'flex-col'}`}
              >
                {/* Animated Background Aura */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                {/* Mockup/Image Placeholder with Parallax */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${isWide ? 'lg:w-1/2 w-full' : 'w-full'} aspect-video lg:aspect-auto p-6 md:p-8 flex items-center justify-center`}
                >
                  <div className="absolute inset-4 rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl relative">
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: -20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-20`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div whileHover={{ rotate: 10, scale: 1.2 }} className="text-white/20">
                        <UIIcons.Code2 size={120} />
                      </motion.div>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass border border-white/20 text-[10px] font-black uppercase tracking-widest text-white/70">
                      Production Ready
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`relative z-10 ${isWide ? 'lg:w-1/2 w-full' : 'w-full'} p-8 md:p-10 flex flex-col justify-center space-y-6`}>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary tracking-tighter leading-tight break-words">
                        {project.title}
                      </h3>
                      <a href={project.link} target="_blank" className="flex-shrink-0 p-3 rounded-full glass border border-border-subtle hover:bg-blue-500 hover:text-white transition-all">
                        <UIIcons.ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500 break-words">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-bg-secondary border border-border-subtle text-[10px] font-bold text-text-secondary group-hover:text-text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="flex flex-col gap-3">
                      {project.highlights.slice(0, 1).map((h, i) => (
                        <div key={i} className="text-[12px] text-text-secondary flex gap-2 font-medium">
                          <span className="text-blue-500">▹</span>
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </FullScreenSection>
  );
}

// Education & Testimonials - Integrated Bento Architecture
function EducationAndRecognitionSection() {
  return (
    <FullScreenSection id="education" title="Recognition & Foundation">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* Main Education Card - Spans 8 columns */}
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8 glass-morphic rounded-[2.5rem] p-10 md:p-14 border border-white/5 relative overflow-hidden group flex flex-col md:flex-row items-center gap-10"
            >
              <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10" />
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700" />

              <div className="relative z-10 w-32 h-32 rounded-3xl bg-blue-500 flex items-center justify-center text-white shadow-2xl group-hover:rotate-6 transition-transform flex-shrink-0">
                <HiAcademicCap size={64} />
              </div>

              <div className="relative z-10 space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                  Foundation
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-xl md:text-2xl text-blue-400/80 font-bold">{edu.school}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                  <div className="flex items-center gap-2 text-text-secondary text-sm font-medium">
                    <UIIcons.Calendar size={16} className="text-blue-500" />
                    {edu.year}
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-sm font-medium">
                    <UIIcons.MapPin size={16} className="text-blue-500" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Testimonial Highlight Card - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-4 glass-morphic rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-10 right-10 text-blue-500/20">
              <UIIcons.Quote size={80} />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-widest">
                Impact
              </div>
              <p className="text-lg md:text-xl text-white italic font-light leading-relaxed">
                "{resumeData.testimonials[0].text.substring(0, 120)}..."
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <p className="text-lg font-black text-white">{resumeData.testimonials[0].name}</p>
              <p className="text-sm text-text-secondary font-bold uppercase tracking-widest text-xs">{resumeData.testimonials[0].role}</p>
            </div>
          </motion.div>

          {/* Remaining Testimonials as smaller cards */}
          {resumeData.testimonials.slice(1).map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="md:col-span-4 glass-morphic rounded-[2.5rem] p-8 border border-white/5 relative group hover:border-white/10 transition-all"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-blue-500">
                  {[1, 2, 3, 4, 5].map(i => <UIIcons.Star key={i} size={12} />)}
                </div>
                <p className="text-sm text-text-secondary italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="pt-2">
                  <p className="text-sm font-black text-white">{testimonial.name}</p>
                  <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Call to Action Small Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-2xl shadow-blue-500/20 group cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <UIIcons.MessageSquare size={32} className="text-white" />
            </div>
            <p className="text-xl font-black text-white tracking-tighter leading-tight">Build the Future Together</p>
            <p className="text-xs text-white/70 font-bold uppercase tracking-widest">Get in touch ▹</p>
          </motion.div>

        </div>
      </div>
    </FullScreenSection>
  );
}

// Contact Section - Interactive Grid Hub Redesign
function ContactSection() {
  return (
    <FullScreenSection id="contact" title="Collaboration">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-12 glass-morphic rounded-[3rem] p-12 flex flex-col items-center text-center space-y-6 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10" />
            <h3 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter relative z-10">
              Ready to <span className="gradient-text animate-gradient">Innovate?</span>
            </h3>
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl relative z-10">
              Whether you have a breakthrough idea or a complex engineering challenge, I'm ready to help you build the future with cutting-edge technology.
            </p>
          </motion.div>

          {/* Contact Direct Hub - spans 8 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-8 glass-morphic rounded-[3rem] p-10 md:p-14 border border-white/5 relative overflow-hidden group flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-all" />

            <div className="relative z-10 flex-1 space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-black text-blue-500 uppercase tracking-[0.3em]">Direct Line</p>
                <h4 className="text-4xl font-black text-white tracking-tighter">Start a Conversation</h4>
                <p className="text-text-secondary leading-relaxed">Reach out directly for partnership inquiries or technical collaborations. I typically respond within 24 hours.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <MagneticButton strength={0.2}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="rounded-2xl h-16 px-10 text-lg font-black shadow-2xl shadow-blue-500/20"
                    onClick={() => window.location.href = `mailto:${resumeData.social.email}`}
                  >
                    Send Message
                  </Button>
                </MagneticButton>
                <div className="flex -space-x-3 items-center ml-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-primary bg-bg-secondary flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    </div>
                  ))}
                  <div className="pl-6 text-xs text-text-secondary font-bold uppercase tracking-widest">+50 Projects Delivered</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Cluster - span 4 */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            {[
              { icon: UIIcons.Github, href: resumeData.social.github, color: 'hover:text-white', bg: 'hover:bg-white/5' },
              { icon: UIIcons.Linkedin, href: resumeData.social.linkedin, color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/5' },
              { icon: UIIcons.Twitter, href: resumeData.social.twitter, color: 'hover:text-cyan-400', bg: 'hover:bg-cyan-400/5' },
              { icon: UIIcons.Mail, href: `mailto:${resumeData.social.email}`, color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/5' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ delay: i * 0.1 }}
                className={`aspect-square flex items-center justify-center rounded-[2rem] glass-morphic border border-white/5 ${social.color} ${social.bg} transition-all duration-300 shadow-lg`}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>

          {/* Info Card - span 12 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-12 glass border border-white/5 rounded-[2rem] p-6 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <UIIcons.MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Location</p>
                <p className="text-white font-bold">{resumeData.location} • Available Globally</p>
              </div>
            </div>
            <div className="h-px w-full md:w-px md:h-8 bg-white/10" />
            <div className="flex items-center gap-8">
              <div className="text-center md:text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Email</p>
                <p className="text-white font-bold text-sm">{resumeData.social.email}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Timezone</p>
                <p className="text-white font-bold text-sm">IST (UTC +5:30)</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </FullScreenSection>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent-primary/30 relative">
      <HeroSection />
      <AboutSection />

      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationAndRecognitionSection />
      <ContactSection />

      <footer className="relative py-20 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-bg-primary z-0" />
        {/* Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">V</span>
                </div>
                <span className="text-2xl font-black text-text-primary tracking-widest uppercase">Rohilla</span>
              </div>
              <p className="text-text-secondary leading-relaxed font-light">
                Architecting the next generation of digital infrastructure and immersive user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black text-text-primary uppercase tracking-[0.3em] opacity-50">Navigation</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Skills', 'Experience', 'Projects'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-text-secondary hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black text-text-primary uppercase tracking-[0.3em] opacity-50">Connect</h4>
              <div className="flex gap-4">
                {[
                  { icon: UIIcons.Github, href: resumeData.social.github },
                  { icon: UIIcons.Linkedin, href: resumeData.social.linkedin },
                  { icon: UIIcons.Twitter, href: resumeData.social.twitter },
                ].map(({ icon: Icon, href }, i) => (
                  <MagneticButton key={i} strength={0.2}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/20 transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] opacity-50">Status</h4>
              <div className="p-4 rounded-2xl glass border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-sm font-bold text-text-secondary">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-text-secondary font-medium tracking-widest uppercase">
              © 2025 Vicky Kumar • Built with <span className="text-blue-500">React</span> & <span className="text-purple-500">Next.js</span>
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
