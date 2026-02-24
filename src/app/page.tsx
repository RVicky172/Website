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
import { SiReact, SiNodedotjs, SiDocker, SiKubernetes, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { HiAcademicCap } from 'react-icons/hi';

// ------- Hero Section -------
function HeroSection() {
  const tickerItems = resumeData.tagline.split('  •  ');

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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-text-secondary/60 flex items-center justify-center gap-2"
            >
              <UIIcons.MapPin size={14} className="text-blue-500/70" />
              {resumeData.location}
            </motion.p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
            <MagneticButton strength={0.2}>
              <Button
                variant="primary"
                size="lg"
                className="rounded-full px-12 h-16 text-xl font-bold shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-12 h-16 text-xl font-bold border-white/10 hover:bg-white/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let&apos;s Talk
              </Button>
            </MagneticButton>
          </div>

          <div className="flex justify-center gap-8 pt-4">
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

          {/* Achievement Marquee Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative overflow-hidden rounded-full glass-morphic border border-white/5 py-3 px-6 max-w-2xl mx-auto"
          >
            <div className="flex gap-12 animate-marquee-left" style={{ width: 'max-content' }}>
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
                <span key={idx} className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-text-secondary flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
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

// ------- About Section -------
function AboutSection() {
  const stats = [
    { value: 9, suffix: '+', label: 'Years Experience', icon: UIIcons.Briefcase, topColor: 'from-blue-500 to-blue-600', iconBg: 'bg-blue-500/15', color: 'text-blue-400', glow: 'shadow-blue-500/20' },
    { value: 100, suffix: 'M+', label: 'Global Users', icon: UIIcons.Sparkles, topColor: 'from-purple-500 to-violet-600', iconBg: 'bg-purple-500/15', color: 'text-purple-400', glow: 'shadow-purple-500/20' },
    { value: 20, suffix: '+', label: 'Projects Delivered', icon: UIIcons.Code2, topColor: 'from-cyan-500 to-sky-600', iconBg: 'bg-cyan-500/15', color: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
    { value: 70, suffix: '+', label: 'Countries Served', icon: UIIcons.MapPin, topColor: 'from-emerald-500 to-green-600', iconBg: 'bg-emerald-500/15', color: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  ];

  const dynamicTags = [
    ...resumeData.skills.frontend.slice(0, 4),
    ...resumeData.skills.infrastructure.slice(0, 4),
  ];

  return (
    <FullScreenSection id="about" title="The Architect">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[280px]">

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 md:row-span-2 relative overflow-hidden group rounded-[2.5rem] border border-white/8 hover:border-white/15 transition-all duration-500"
            style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern bg-[length:24px_24px] opacity-[0.03]" />
            {/* Blue glow orb */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] group-hover:bg-blue-600/15 transition-all duration-700" />

            <div className="relative z-10 p-10 h-full flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/8 text-blue-400 text-[11px] font-black tracking-[0.2em] uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Biography
                </div>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[1.05] tracking-tight">
                  Engineering <br />
                  <span className="text-blue-500">Digital Mastery.</span>
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
                  {resumeData.summary}
                </p>
              </div>
              <div className="flex items-center gap-3 text-white font-semibold group-hover:gap-5 transition-all cursor-pointer text-sm">
                <span className="text-text-secondary group-hover:text-white transition-colors">Core expertise in scalability</span>
                <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors">
                  <UIIcons.ArrowRight size={14} className="text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="md:col-span-4 md:row-span-2 grid grid-cols-1 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/8 hover:border-white/15 transition-all duration-300 group flex items-center gap-5 px-7 py-5"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)' }}
              >
                {/* Coloured top edge */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.topColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform shadow-lg ${stat.glow}`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className={`text-3xl font-black ${stat.color}`}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-text-secondary font-semibold tracking-wider uppercase mt-0.5">{stat.label}</p>
                </div>
                {/* Subtle corner glow */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${stat.iconBg} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </div>

          {/* Location Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-12 relative overflow-hidden rounded-[2rem] border border-white/8 hover:border-white/15 transition-all duration-300 group"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <UIIcons.MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-text-primary tracking-tight">Currently operating from</h4>
                  <p className="text-sm text-text-secondary font-medium">{resumeData.location} • Open to Remote</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {dynamicTags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold border border-white/8 text-text-secondary hover:text-white hover:border-white/20 hover:bg-white/5 transition-all" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </FullScreenSection>
  );
}


// ------- Skills Section -------
function SkillsSection() {
  const skillCategories = [
    { title: 'Frontend', skills: resumeData.skills.frontend, gradient: 'from-blue-500 to-cyan-400', headerBg: 'from-blue-900/60 to-cyan-900/30', borderColor: 'border-blue-500/20', accentColor: 'blue-400', IconComponent: SiReact, delay: 0 },
    { title: 'Backend', skills: resumeData.skills.backend, gradient: 'from-purple-500 to-pink-500', headerBg: 'from-purple-900/60 to-pink-900/30', borderColor: 'border-purple-500/20', accentColor: 'purple-400', IconComponent: SiNodedotjs, delay: 0.1 },
    { title: 'Cloud & Infrastructure', skills: resumeData.skills.infrastructure, gradient: 'from-emerald-500 to-teal-400', headerBg: 'from-emerald-900/60 to-teal-900/30', borderColor: 'border-emerald-500/20', accentColor: 'emerald-400', IconComponent: SiDocker, delay: 0.2 },
    { title: 'Core & AI', skills: resumeData.skills.other, gradient: 'from-orange-500 to-red-500', headerBg: 'from-orange-900/60 to-red-900/30', borderColor: 'border-orange-500/20', accentColor: 'orange-400', IconComponent: SiKubernetes, delay: 0.3 },
  ];

  return (
    <FullScreenSection id="skills" title="Tech Stack">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: category.delay }}
              viewport={{ once: true }}
              className={`group relative rounded-[1.75rem] border ${category.borderColor} hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col`}
              style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(10,10,10,0.8) 100%)' }}
            >
              {/* Coloured header panel */}
              <div className={`relative p-6 bg-gradient-to-br ${category.headerBg} border-b border-white/5`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.headerBg} opacity-60`} />
                <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity duration-700`} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <category.IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">{category.title}</h3>
                </div>
              </div>

              {/* Skills chips */}
              <div className="p-6 flex flex-wrap gap-2 flex-grow">
                {category.skills.map((skill) => {
                  const SkillIcon = getTechIcon(skill);
                  return (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -1 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold border border-white/8 text-text-secondary hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-default"
                      style={{ background: 'rgba(255,255,255,0.025)' }}
                    >
                      <SkillIcon size={12} />
                      <span>{skill}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Also Familiar With Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative rounded-[1.5rem] border border-white/8 p-5 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/50 whitespace-nowrap flex-shrink-0 pl-1">
              Also familiar with
            </span>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.testing.map((skill) => {
                const SkillIcon = getTechIcon(skill);
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold border border-white/6 text-text-secondary/50 hover:text-text-secondary hover:border-white/12 transition-all cursor-default"
                    style={{ background: 'rgba(255,255,255,0.018)' }}
                  >
                    <SkillIcon size={11} />
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </FullScreenSection>
  );
}

// ------- Experience Section -------
const experienceAccents = [
  { topGrad: 'from-blue-500 to-purple-500', badge: 'bg-blue-500 shadow-blue-500/40', companyBg: 'bg-blue-500/8 border-blue-500/20 text-blue-300', cardBorder: 'border-blue-500/15', dot: 'bg-blue-500' },
  { topGrad: 'from-purple-500 to-pink-500', badge: 'bg-purple-500 shadow-purple-500/40', companyBg: 'bg-purple-500/8 border-purple-500/20 text-purple-300', cardBorder: 'border-purple-500/15', dot: 'bg-purple-500' },
  { topGrad: 'from-emerald-500 to-teal-500', badge: 'bg-emerald-500 shadow-emerald-500/40', companyBg: 'bg-emerald-500/8 border-emerald-500/20 text-emerald-300', cardBorder: 'border-emerald-500/15', dot: 'bg-emerald-500' },
];

function ExperienceSection() {
  return (
    <FullScreenSection id="experience" title="The Journey">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {resumeData.experience.map((job, index) => {
            const accent = experienceAccents[index % experienceAccents.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative rounded-[2rem] border ${accent.cardBorder} hover:border-white/15 transition-all duration-500 overflow-hidden`}
                style={{ background: 'linear-gradient(150deg, rgba(255,255,255,0.04) 0%, rgba(10,10,10,0.7) 100%)' }}
              >
                {/* Coloured top line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.topGrad}`} />
                {/* Subtle corner glow */}
                <div className={`absolute -top-12 -left-12 w-48 h-48 rounded-full bg-gradient-to-br ${accent.topGrad} blur-[80px] opacity-5 group-hover:opacity-12 transition-opacity duration-700`} />

                <div className="p-8 md:p-10 space-y-5">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      {/* Numbered badge */}
                      <div className={`mt-1 w-9 h-9 rounded-xl ${accent.badge} shadow-lg flex items-center justify-center text-white text-xs font-black flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{job.role}</h3>
                        <span className={`inline-flex items-center mt-2 px-4 py-1 rounded-lg text-sm font-bold border ${accent.companyBg}`}>{job.company}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-text-secondary/70 tracking-widest uppercase whitespace-nowrap pt-1">
                      {job.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed ml-13">
                    {job.description}
                  </p>

                  {/* Highlights grid */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 ml-13 border-t border-white/5`}>
                    {job.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-text-secondary text-sm">
                        <div className={`mt-[7px] w-1.5 h-1.5 rounded-full ${accent.dot} flex-shrink-0 opacity-70`} />
                        <span className="group-hover:text-white/80 transition-colors leading-snug">{highlight}</span>
                      </div>
                    ))}
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

// ------- Projects Section -------
const projectThemes = [
  { grad: 'from-blue-600 to-cyan-500', borderColor: 'border-blue-500/20', bgAura: 'from-blue-500/12 to-cyan-500/5', chipBg: 'bg-blue-500/10 border-blue-500/20 text-blue-300', dot: 'text-blue-400' },
  { grad: 'from-purple-600 to-pink-500', borderColor: 'border-purple-500/20', bgAura: 'from-purple-500/12 to-pink-500/5', chipBg: 'bg-purple-500/10 border-purple-500/20 text-purple-300', dot: 'text-purple-400' },
  { grad: 'from-emerald-600 to-teal-500', borderColor: 'border-emerald-500/20', bgAura: 'from-emerald-500/12 to-teal-500/5', chipBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300', dot: 'text-emerald-400' },
  { grad: 'from-orange-600 to-red-500', borderColor: 'border-orange-500/20', bgAura: 'from-orange-500/12 to-red-500/5', chipBg: 'bg-orange-500/10 border-orange-500/20 text-orange-300', dot: 'text-orange-400' },
];

function ProjectsSection() {
  const colSpans = [
    'lg:col-span-8 md:col-span-12',
    'lg:col-span-4 md:col-span-12',
    'lg:col-span-5 md:col-span-12',
    'lg:col-span-7 md:col-span-12',
  ];

  const projectIcons = [
    [SiReact, SiTypescript],
    [SiNextdotjs, SiTypescript],
    [SiReact, SiNodedotjs],
    [SiReact, SiNodedotjs],
  ];

  return (
    <FullScreenSection id="projects" title="Featured Work">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {resumeData.projects.map((project, index) => {
            const isWide = colSpans[index % colSpans.length].includes('col-span-8') || colSpans[index % colSpans.length].includes('col-span-7');
            const theme = projectThemes[index % projectThemes.length];
            const [IconA, IconB] = projectIcons[index % projectIcons.length];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group relative ${colSpans[index % colSpans.length]} rounded-[2rem] border ${theme.borderColor} hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col ${isWide ? 'lg:flex-row' : 'flex-col'}`}
                style={{ background: 'linear-gradient(150deg, rgba(255,255,255,0.04) 0%, rgba(8,8,12,0.95) 100%)' }}
              >
                {/* Top colour line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.grad} z-20`} />
                {/* Background hover aura */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgAura} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Visual Preview Panel */}
                <div className={`relative flex-shrink-0 ${isWide ? 'lg:w-2/5' : 'w-full'} ${isWide ? 'min-h-[250px]' : 'h-44'} p-5 flex items-center justify-center overflow-hidden`}>
                  {/* Gradient mesh background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgAura} opacity-60`} />
                  <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-[0.04]" />

                  {/* Floating tech icons */}
                  <div className="relative flex items-center justify-center gap-4">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className={`text-gradient-to-br ${theme.grad}`}
                      style={{ filter: 'drop-shadow(0 0 20px currentColor)' }}
                    >
                      <IconA size={72} className="opacity-70" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      className="opacity-30"
                    >
                      <IconB size={52} />
                    </motion.div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-wider text-white/50" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Content Panel */}
                <div className={`relative z-10 flex-1 p-7 md:p-9 flex flex-col justify-between gap-5`}>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold border transition-all hover:brightness-125 ${theme.chipBg}`}
                      >
                        <UIIcons.ExternalLink size={11} />
                        View
                      </a>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors ${theme.chipBg}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-3 border-t border-white/5">
                    {project.highlights.slice(0, isWide ? 4 : 2).map((h, i) => (
                      <div key={i} className={`text-[11px] flex items-start gap-2 ${theme.dot}`}>
                        <span className="font-bold mt-0.5 flex-shrink-0">▹</span>
                        <span className="text-text-secondary group-hover:text-white/80 transition-colors">{h}</span>
                      </div>
                    ))}
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

// ------- Education & Achievements Section -------
function EducationAndAchievementsSection() {
  return (
    <FullScreenSection id="education" title="Education & Achievements">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* Main Education Card */}
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

          {/* Testimonial Highlight Card */}
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
                &ldquo;{resumeData.testimonials[0].text.substring(0, 120)}...&rdquo;
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <p className="text-lg font-black text-white">{resumeData.testimonials[0].name}</p>
              <p className="text-sm text-text-secondary font-bold uppercase tracking-widest text-xs">{resumeData.testimonials[0].role}</p>
            </div>
          </motion.div>

          {/* Remaining Testimonials */}
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
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="pt-2">
                  <p className="text-sm font-black text-white">{testimonial.name}</p>
                  <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Key Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 glass-morphic rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-all duration-700" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                Key Achievements
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resumeData.achievements.map((ach, i) => (
                  <div key={i} className="space-y-2 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 transition-all">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <UIIcons.Sparkles size={12} className="text-emerald-400" />
                      </div>
                      <p className="text-sm font-black text-white leading-snug">{ach.label}</p>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

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

// ------- Contact Section -------
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
              Whether you have a breakthrough idea or a complex engineering challenge, I&apos;m ready to help you build the future with cutting-edge technology.
            </p>
          </motion.div>

          {/* Contact Direct Hub */}
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
                <p className="text-text-secondary leading-relaxed">Reach out directly for partnership inquiries or technical collaborations.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
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
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 text-xs font-bold text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Typical response: &lt; 24 hours
                </div>
              </div>
              <div className="flex -space-x-3 items-center">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-primary bg-bg-secondary flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  </div>
                ))}
                <div className="pl-6 text-xs text-text-secondary font-bold uppercase tracking-widest">+20 Projects Delivered</div>
              </div>
            </div>
          </motion.div>

          {/* Social Cluster */}
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

          {/* Info Card */}
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
                <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Phone</p>
                <p className="text-white font-bold text-sm">{resumeData.phone}</p>
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
      <EducationAndAchievementsSection />
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

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p className="text-xs text-text-secondary font-medium tracking-widest uppercase">
                © 2026 Vicky Kumar • Built with <span className="text-blue-500">React</span> & <span className="text-purple-500">Next.js</span>
              </p>
              <p className="text-xs text-text-secondary/50 font-medium">
                Made with <span className="text-red-400">❤️</span> in India
              </p>
            </div>
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
