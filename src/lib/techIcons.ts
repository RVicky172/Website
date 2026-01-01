import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiJest,
  SiFigma,
  SiGraphql,
  SiGithub,
  SiLinux,
  SiNginx,
  SiApache,
  SiOpenai,
  SiAmazon,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaBriefcase,
  FaQuoteLeft
} from 'react-icons/fa';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
  HiArrowRight,
  HiMenu,
  HiX,
  HiMoon,
  HiSun,
  HiDownload,
  HiSparkles,
  HiChevronLeft,
  HiChevronRight,
  HiStar,
  HiCalendar,
  HiChatAlt2
} from 'react-icons/hi';
import { IconType } from 'react-icons';

export const techIconMap: Record<string, IconType> = {
  // Frontend
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'JavaScript ES6+': SiJavascript,
  'JavaScript (ES6+)': SiJavascript,
  Redux: SiRedux,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  SASS: SiSass,
  'Next.js': SiReact,
  Figma: SiFigma,
  GraphQL: SiGraphql,
  'Responsive Design': SiCss3,

  // Backend
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  'RESTful Services': SiNodedotjs,
  Microservices: SiDocker,
  'Microservices Architecture': SiDocker,
  RabbitMQ: SiGithub,
  'VS Code/Theia Extensions': VscCode,

  // Testing
  Jest: SiJest,
  Playwright: SiJest,
  'React Testing Library': SiReact,
  TDD: SiJest,
  'End-to-End Testing': SiJest,

  // Infrastructure
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  'CI/CD': SiJenkins,
  'CI/CD Pipelines': SiJenkins,
  Git: SiGit,
  'Azure DevOps': SiGithub,
  AWS: SiAmazon,
  'VS Code': VscCode,
  Theia: VscCode,
  Nginx: SiNginx,
  Apache: SiApache,
  Linux: SiLinux,
  Performance: SiJenkins,

  // Emerging Tech
  LLMs: SiOpenai,
  'Large Language Models': SiOpenai,
  'AI-Powered Tools': SiOpenai,
  OpenAI: SiOpenai,
  'Cloud-Native Architecture': SiKubernetes,
  'Team Leadership': SiGithub,
};

export const getTechIcon = (skillName: string): IconType => {
  return techIconMap[skillName] || SiGithub; // Default to GitHub icon if not found
};

export const skillColors: Record<string, string> = {
  React: 'text-blue-400',
  TypeScript: 'text-blue-600',
  JavaScript: 'text-yellow-400',
  'JavaScript ES6+': 'text-yellow-400',
  'JavaScript (ES6+)': 'text-yellow-400',
  Redux: 'text-purple-600',
  HTML5: 'text-orange-500',
  CSS3: 'text-blue-500',
  SASS: 'text-pink-600',
  'Next.js': 'text-gray-800 dark:text-white',
  Figma: 'text-purple-500',
  GraphQL: 'text-pink-500',
  'Responsive Design': 'text-cyan-500',
  'Node.js': 'text-green-600',
  Express: 'text-gray-700 dark:text-gray-300',
  MongoDB: 'text-green-500',
  PostgreSQL: 'text-blue-700',
  'RESTful Services': 'text-blue-500',
  Microservices: 'text-cyan-500',
  'Microservices Architecture': 'text-cyan-500',
  RabbitMQ: 'text-orange-600',
  'VS Code/Theia Extensions': 'text-blue-500',
  Jest: 'text-red-600',
  Playwright: 'text-green-600',
  'React Testing Library': 'text-red-500',
  TDD: 'text-red-600',
  'End-to-End Testing': 'text-green-500',
  Docker: 'text-blue-400',
  Kubernetes: 'text-blue-600',
  Jenkins: 'text-red-700',
  'CI/CD': 'text-red-600',
  'CI/CD Pipelines': 'text-red-600',
  Git: 'text-red-600',
  'Azure DevOps': 'text-blue-500',
  AWS: 'text-orange-500',
  'VS Code': 'text-blue-500',
  Theia: 'text-purple-500',
  Nginx: 'text-green-600',
  Apache: 'text-orange-600',
  Linux: 'text-black dark:text-white',
  Performance: 'text-green-500',
  LLMs: 'text-green-500',
  'Large Language Models': 'text-green-500',
  'AI-Powered Tools': 'text-green-500',
  OpenAI: 'text-green-500',
  'Cloud-Native Architecture': 'text-cyan-500',
  'Team Leadership': 'text-purple-500',
};

// UI Icons - replacing lucide-react
export const UIIcons = {
  // Social
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,

  // Contact
  Mail: HiMail,
  Phone: HiPhone,
  MapPin: HiLocationMarker,

  // Actions
  ExternalLink: HiExternalLink,
  ArrowRight: HiArrowRight,
  Download: HiDownload,

  // Navigation
  Menu: HiMenu,
  X: HiX,
  ChevronLeft: HiChevronLeft,
  ChevronRight: HiChevronRight,

  // Theme
  Moon: HiMoon,
  Sun: HiSun,

  // Misc
  Code2: FaCode,
  Briefcase: FaBriefcase,
  Sparkles: HiSparkles,
  Quote: FaQuoteLeft,
  Star: HiStar,
  Calendar: HiCalendar,
  MessageSquare: HiChatAlt2,
};
