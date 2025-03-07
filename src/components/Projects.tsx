'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with advanced product filtering, secure payments, and an intuitive admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity tool for teams with real-time updates, task assignment, and progress tracking features.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'An analytics platform for visualizing financial data with interactive charts and customizable reports.',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="content-section relative overflow-hidden">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col h-full"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-light mb-3 gradient-text">{project.title}</h3>
                <p className="text-zinc-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-full text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href={project.link} 
                  className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-2 text-sm group"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link 
            href="/#contact" 
            className="accent-button inline-flex items-center gap-2 group"
          >
            <span>Start a Project</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 