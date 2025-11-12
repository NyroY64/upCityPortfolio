import React from 'react';
import { GradeFilter, CategoryFilter } from '../types';

interface FilterBarProps {
  gradeFilter: GradeFilter;
  categoryFilter: CategoryFilter;
  onGradeFilterChange: (grade: GradeFilter) => void;
  onCategoryFilterChange: (category: CategoryFilter) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  gradeFilter,
  categoryFilter,
  onGradeFilterChange,
  onCategoryFilterChange
}) => {
  const grades: { value: GradeFilter; label: string }[] = [
    { value: 'all', label: 'Tous les niveaux' },
    { value: 'L1', label: 'Licence 1' },
    { value: 'L2', label: 'Licence 2' },
    { value: 'L3', label: 'Licence 3' },
    { value: 'M1', label: 'Master 1' },
    { value: 'M2', label: 'Master 2' },
    { value: 'PhD', label: 'Doctorat' }
  ];

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'Web Development', label: 'Développement Web' },
    { value: 'AI/ML', label: 'IA/ML' },
    { value: 'Mobile', label: 'Mobile' },
    { value: 'Data Science', label: 'Data Science' },
    { value: 'Research', label: 'Recherche' },
    { value: 'Design', label: 'Design' },
    { value: 'Other', label: 'Autre' }
  ];

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-upc-mid-gray shadow-lg py-6 mb-12">
      {/* Logo de campagne dans la barre de navigation */}
      <div className="bg-upc-primary text-white py-3 px-4 text-center text-sm font-medium mb-4 flex items-center justify-center">
        <img 
          src="/logo-13davenir.svg" 
          alt="13% d'avenir" 
          className="h-10 mr-3 filter brightness-0 invert"
        />
        <span className="font-medium">Université de Paris Cité</span>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-upc-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un projet universitaire..."
              className="w-full pl-10 pr-4 py-3 bg-upc-light-bg border border-upc-mid-gray rounded-lg focus:ring-2 focus:ring-upc-primary focus:border-upc-primary transition-all duration-300 text-sm"
            />
          </div>
          
          {/* Grade filter */}
          <div className="flex items-center gap-3">
            <div className="font-medium text-upc-text flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 text-upc-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Niveau
            </div>
            <select
              value={gradeFilter}
              onChange={(e) => onGradeFilterChange(e.target.value as GradeFilter)}
              className="px-4 py-3 bg-upc-light-bg border border-upc-mid-gray rounded-lg focus:ring-2 focus:ring-upc-primary focus:border-upc-primary transition-all duration-300 text-sm text-upc-text"
            >
              {grades.map(grade => (
                <option key={grade.value} value={grade.value}>
                  {grade.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Category filter */}
          <div className="flex items-center gap-3">
            <div className="font-medium text-upc-text flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 text-upc-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Catégorie
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => onCategoryFilterChange(e.target.value as CategoryFilter)}
              className="px-4 py-3 bg-upc-light-bg border border-upc-mid-gray rounded-lg focus:ring-2 focus:ring-upc-primary focus:border-upc-primary transition-all duration-300 text-sm text-upc-text"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Active filters indicator */}
          <div className="flex items-center gap-2">
            {(gradeFilter !== 'all' || categoryFilter !== 'all') && (
              <div className="flex items-center gap-2 px-4 py-2 bg-upc-avenir/20 text-upc-bleu border border-upc-rouge/30 rounded-full text-xs font-medium">
                <span className="text-upc-rouge font-bold">13%</span>
                <span>Filtres actifs</span>
                <button 
                  onClick={() => {
                    onGradeFilterChange('all');
                    onCategoryFilterChange('all');
                  }}
                  className="ml-1 hover:bg-upc-rouge/20 rounded-full p-1 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;