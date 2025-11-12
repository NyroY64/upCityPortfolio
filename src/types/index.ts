export interface Student {
  id: number;
  name: string;
  email: string;
  grade: 'L1' | 'L2' | 'L3' | 'M1' | 'M2' | 'PhD';
  field: string;
  avatar?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  student: Student;
  technologies: string[];
  category: 'Web Development' | 'Data Science' | 'AI/ML' | 'Mobile' | 'Research' | 'Design' | 'Other';
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  dateCompleted: string;
  featured: boolean;
}

export type GradeFilter = 'all' | Student['grade'];
export type CategoryFilter = 'all' | Project['category'];