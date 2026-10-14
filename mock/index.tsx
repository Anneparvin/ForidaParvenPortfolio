import { ProjectItem, Service, Testimonial } from '@/types'
import {
  Monitor,
  Server,
  Database,
  Layers,
  ShieldCheck,
  Gauge,
  GitBranch,
  Bug,
} from 'lucide-react';


export const SERVICES: Service[] = [
  {
    key: 'frontend-development',
    title: 'Frontend Development',
    description:
      'Build responsive, accessible, and engaging interfaces using React, Next.js, and Tailwind CSS.',
    icon: Monitor,
    highlights: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    key: 'backend-development',
    title: 'Backend Development & API',
    description:
      'Develop secure, scalable backend services and REST APIs using Node.js and Express.js.',
    icon: Server,
    highlights: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    key: 'database-management',
    title: 'Database Management',
    description:
      'Manage application data efficiently using MongoDB, PostgreSQL, and Prisma ORM.',
    icon: Database,
    highlights: ['MongoDB', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    key: 'full-stack-development',
    title: 'Full-Stack Development',
    description:
      'Build complete web applications integrating modern frontend, backend, and database technologies.',
    icon: Layers,
    highlights: ['Next.js', 'Node.js', 'Database Integration'],
  },
  {
    key: 'authentication-security',
    title: 'Authentication & Security',
    description:
      'Implement secure authentication, authorization, and validation.',
    icon: ShieldCheck,
    highlights: ['JWT', 'Password Hashing', 'Protected Routes'],
  },
  {
    key: 'responsive-optimization',
    title: 'Responsive Design & Optimization',
    description:
      'Improve website usability, performance, and search visibility.',
    icon: Gauge,
    highlights: ['Responsive UI', 'Performance', 'SEO Basics'],
  },
  {
    key: 'version-control-deployment',
    title: 'Version Control & Deployment',
    description:
      'Manage source code collaboratively using modern development tools.',
    icon: GitBranch,
    highlights: ['Git', 'GitHub', 'Vercel'],
  },
  {
    key: 'testing-debugging',
    title: 'Testing & Debugging',
    description:
      'Identify bugs, test API endpoints, and improve application.',
    icon: Bug,
    highlights: ['Postman', 'API Testing', 'Error Handling'],
  },
 
]

export const PROJECTS: ProjectItem[] = [
  {
    frontImage: '/images/project/project-sample-1-1.png',
    backImage: '/images/project/project-sample-1-2.png',
    title: 'Booking Dashboard',
    topics: ['React', 'Next.js', 'TypeScript', 'Dashboard System', 'Tailwind'],
  },
  {
    frontImage: '/images/project/project-sample-2-1.png',
    backImage: '/images/project/project-sample-2-2.png',
    title: 'E-commerce API',
    topics: ['Backend System', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    frontImage: '/images/project/project-sample-3-1.png',
    backImage: '/images/project/project-sample-3-2.png',
    title: 'Realtime Chat App',
    topics: ['Next.js', 'React', 'TypeScript', 'Redis', 'WebSocket'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alex Morgan',
    avatar: 'https://i.ibb.co.com/vvT33VdY/75.jpg',
    content:
      'Forida is a dedicated and enthusiastic web developer who focuses on creating responsive, user-friendly, and visually appealing websites. Her willingness to learn new technologies and attention to detail make her a great team player.She done any task very well.',
    profession: 'CEO of Acme Inc.',
  },
  {
    name: 'Mithila Mani',
    avatar: 'https://i.ibb.co.com/rK5Vq6HS/44.jpg',
    content:
      "It is a pleasure to collaborate with Forida. She understands the importance of clean design, responsive layouts, and user experience. Her commitment to improving her development skills and turning design ideas into functional web interfaces is impressive.",
    profession: 'Product Manager',
  },
  {
    name: 'Daniel Smith',
    avatar: 'https://i.ibb.co.com/ccHvJrdX/46.jpg',
    content:
      "Forida has a strong interest in modern web development and a positive approach to problem-solving. Her focus on writing clean code, building responsive interfaces, and continuously learning new technologies reflects her dedication.",
    profession: 'Software Engineer',
  },
]
