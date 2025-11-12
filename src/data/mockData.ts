import { Project } from '../types';

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Application de Gestion Universitaire",
    description: "Une application web complète pour la gestion des cours, étudiants et professeurs avec interface moderne et API REST.",
    student: {
      id: 1,
      name: "Marie Dubois",
      email: "marie.dubois@u-paris.fr",
      grade: "M2",
      field: "Informatique",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b60c2066?w=150&h=150&fit=crop&crop=face"
    },
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    dateCompleted: "2024-06-15",
    featured: true
  },
  {
    id: 2,
    title: "Analyse Prédictive des Données Climatiques",
    description: "Modèle de machine learning pour prédire les changements climatiques en utilisant des données historiques et des algorithmes avancés.",
    student: {
      id: 2,
      name: "Ahmed El Mansouri",
      email: "ahmed.elmansouri@u-paris.fr",
      grade: "M1",
      field: "Data Science",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib", "Jupyter"],
    category: "AI/ML",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    githubUrl: "https://github.com/example/climate-prediction",
    dateCompleted: "2024-05-20",
    featured: true
  },
  {
    id: 3,
    title: "Application Mobile de Covoiturage Étudiant",
    description: "Application mobile native permettant aux étudiants de l'université de partager des trajets et réduire leurs coûts de transport.",
    student: {
      id: 3,
      name: "Sophie Chen",
      email: "sophie.chen@u-paris.fr",
      grade: "L3",
      field: "Informatique Mobile",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    category: "Mobile",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    demoUrl: "https://play.google.com/store/apps/example",
    githubUrl: "https://github.com/example/carpooling-app",
    dateCompleted: "2024-04-10",
    featured: false
  },
  {
    id: 4,
    title: "Système de Reconnaissance Vocale",
    description: "Développement d'un système de reconnaissance vocale en français avec des réseaux de neurones profonds pour l'assistance aux malentendants.",
    student: {
      id: 4,
      name: "Jean-Baptiste Moreau",
      email: "jb.moreau@u-paris.fr",
      grade: "PhD",
      field: "Intelligence Artificielle",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    technologies: ["Python", "PyTorch", "OpenCV", "NumPy", "SciPy"],
    category: "Research",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=250&fit=crop",
    githubUrl: "https://github.com/example/voice-recognition",
    dateCompleted: "2024-03-25",
    featured: true
  },
  {
    id: 5,
    title: "Plateforme E-learning Interactive",
    description: "Plateforme d'apprentissage en ligne avec quiz interactifs, système de badges et suivi de progression pour les cours universitaires.",
    student: {
      id: 5,
      name: "Léa Martins",
      email: "lea.martins@u-paris.fr",
      grade: "L2",
      field: "Informatique",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    technologies: ["Vue.js", "Laravel", "MySQL", "PHP", "CSS3"],
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop",
    demoUrl: "https://elearning.example.com",
    githubUrl: "https://github.com/example/elearning-platform",
    dateCompleted: "2024-02-14",
    featured: false
  },
  {
    id: 6,
    title: "Interface Design System Universitaire",
    description: "Création d'un système de design complet pour les applications universitaires avec composants réutilisables et guidelines.",
    student: {
      id: 6,
      name: "Thomas Rodriguez",
      email: "thomas.rodriguez@u-paris.fr",
      grade: "M1",
      field: "Design UI/UX",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    technologies: ["Figma", "React", "Storybook", "Sass", "Adobe XD"],
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
    demoUrl: "https://design-system.example.com",
    githubUrl: "https://github.com/example/design-system",
    dateCompleted: "2024-01-30",
    featured: false
  }
];