import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-upc-mid-gray/30 hover:border-upc-primary/40 transform hover:-translate-y-1">
      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-upc-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {project.imageUrl && (
        <div className="relative overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Simple category badge */}
          <div className="absolute top-4 right-4 bg-upc-primary text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
            {project.category}
          </div>
          
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
      )}
      
      <div className="relative p-6 z-10">
        {project.featured && (
          <div className="flex items-center mb-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center shadow-lg">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Projet mis en avant
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        {/* Student info with enhanced styling */}
        <div className="flex items-center mb-5 p-3 bg-gray-50/80 rounded-xl border border-gray-100">
          {project.student.avatar && (
            <div className="relative">
              <img 
                src={project.student.avatar} 
                alt={project.student.name}
                className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-upc-accent rounded-full border-2 border-white flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">{project.student.grade.charAt(0)}</span>
              </div>
            </div>
          )}
          <div>
            <p className="font-semibold text-upc-text mb-1">{project.student.name}</p>
            <div className="flex items-center space-x-2">
              <span className="bg-upc-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                {project.student.grade}
              </span>
              <span className="text-upc-mid-gray text-sm">•</span>
              <span className="text-upc-text-light text-sm">{project.student.field}</span>
            </div>
          </div>
        </div>
        
        {/* Technologies with modern pill design */}
        <div className="mb-6">
          <p className="text-sm font-medium text-upc-text mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2 text-upc-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Technologies utilisées
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="inline-flex items-center px-3 py-1.5 bg-upc-light-bg text-upc-text text-sm font-medium rounded-full border border-upc-mid-gray/50 hover:bg-upc-primary/10 hover:border-upc-primary/50 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action buttons with modern design */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-upc-accent hover:bg-upc-accent/90 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium text-center shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir la démo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-upc-dark hover:bg-upc-dark/90 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium text-center shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;