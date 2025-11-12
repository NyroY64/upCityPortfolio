import { useState, useMemo } from 'react'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import ProjectCard from './components/ProjectCard'
import { mockProjects } from './data/mockData'
import { GradeFilter, CategoryFilter } from './types'

function App() {
  const [gradeFilter, setGradeFilter] = useState<GradeFilter>('all')
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const gradeMatch = gradeFilter === 'all' || project.student.grade === gradeFilter
      const categoryMatch = categoryFilter === 'all' || project.category === categoryFilter
      return gradeMatch && categoryMatch
    })
  }, [gradeFilter, categoryFilter])

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const regularProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className="min-h-screen bg-upc-light-bg">
      <Header />
      
      <FilterBar 
        gradeFilter={gradeFilter}
        categoryFilter={categoryFilter}
        onGradeFilterChange={setGradeFilter}
        onCategoryFilterChange={setCategoryFilter}
      />

      <main className="container mx-auto px-4 pb-16">
        {/* Stats Section - "13% d'avenir" theme */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-upc-text mb-2">
              <span className="text-upc-accent text-4xl font-bold">13%</span> d'avenir en chiffres
            </h2>
            <p className="text-upc-text-light">L'excellence étudiante de l'Université de Paris Cité</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-upc-mid-gray/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-upc-text-light text-sm font-medium">Total Projets</p>
                  <p className="text-3xl font-bold text-upc-primary">{mockProjects.length}</p>
                  <p className="text-xs text-upc-text-light">Excellence académique</p>
                </div>
                <div className="bg-upc-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-upc-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-upc-mid-gray/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-upc-text-light text-sm font-medium">Étudiants Talents</p>
                  <p className="text-3xl font-bold text-upc-primary">{new Set(mockProjects.map(p => p.student.id)).size}</p>
                  <p className="text-xs text-upc-text-light">Innovation collaborative</p>
                </div>
                <div className="bg-upc-accent/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-upc-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-upc-mid-gray/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-upc-text-light text-sm font-medium">Domaines d'Innovation</p>
                  <p className="text-3xl font-bold text-upc-primary">{new Set(mockProjects.map(p => p.category)).size}</p>
                  <p className="text-xs text-upc-text-light">Diversité académique</p>
                </div>
                <div className="bg-upc-contrast/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-upc-contrast" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-upc-mid-gray/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-upc-text-light text-sm font-medium">Projets d'Excellence</p>
                  <div className="flex items-baseline">
                    <span className="text-upc-accent text-lg font-bold mr-1">13%</span>
                    <span className="text-2xl font-bold text-upc-primary">({mockProjects.filter(p => p.featured).length})</span>
                  </div>
                  <p className="text-xs text-upc-text-light">Innovation de pointe</p>
                </div>
                <div className="bg-upc-accent/10 p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-upc-avenir/20 rounded-full px-6 py-2 mb-4 border border-upc-rouge/30">
                <span className="text-upc-rouge text-2xl font-black mr-2">13%</span>
                <span className="text-upc-bleu font-bold">d'avenir • Excellence</span>
              </div>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-upc-rouge to-upc-accent mb-4">
                Projets d'Excellence
              </h2>
              <p className="text-upc-gris max-w-2xl mx-auto">
                Découvrez les <span className="text-upc-rouge font-semibold">13% de projets</span> qui façonnent l'avenir de notre université
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>
        )}

        {regularProjects.length > 0 && (
          <section>
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <img 
                  src="/logo-13davenir.svg" 
                  alt="13% d'avenir" 
                  className="h-16 opacity-80"
                />
              </div>
              <h2 className="text-4xl font-bold text-upc-text mb-4">
                Portfolio Complet
              </h2>
              <p className="text-upc-text-light max-w-2xl mx-auto">
                Explorez l'ensemble des projets qui construisent notre <span className="text-upc-accent font-semibold">vision d'avenir</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gray-50 rounded-3xl p-12 max-w-md mx-auto">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-500 mb-6">
                Aucun projet ne correspond à vos critères de recherche actuels.
              </p>
              <button 
                onClick={() => {
                  setGradeFilter('all');
                  setCategoryFilter('all');
                }}
                className="bg-upc-accent hover:bg-upc-accent/90 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-upc-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* University Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/logo-13davenir.svg" 
                  alt="13% d'avenir - Université de Paris Cité" 
                  className="h-16 mr-4 filter brightness-0 invert"
                />
                <h3 className="text-2xl font-bold text-white">
                  Université de Paris Cité
                </h3>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                Une université de recherche de rang mondial, située au cœur de Paris, 
                qui forme les leaders de demain dans tous les domaines de la connaissance.
                <span className="text-upc-accent font-semibold block mt-2">
                  Ensemble, construisons les 13% d'avenir qui façonneront notre société.
                </span>
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.743-1.378l-.742 2.896c-.268 1.048-.992 2.35-1.482 3.146 1.124.347 2.317.535 3.554.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-upc-accent">Liens rapides</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-upc-accent rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Accueil
                </a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-upc-accent rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Projets
                </a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-upc-accent rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Étudiants
                </a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-upc-accent rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Contact
                </a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-upc-accent">Contact</h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-upc-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">85 Bd Saint-Germain, 75006 Paris</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-upc-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">contact@u-paris.fr</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-upc-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">+33 1 57 27 60 00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 mt-8 text-center">
            <div className="flex justify-center items-center mb-4">
              <img 
                src="/logo-13davenir.svg" 
                alt="13% d'avenir" 
                className="h-12 mr-3 filter brightness-0 invert"
              />
              <span className="text-white/70">• 100% d'innovation universitaire</span>
            </div>
            <p className="text-white/60 mb-2">&copy; 2024 Université de Paris Cité. Tous droits réservés.</p>
            <p className="text-white/70 text-sm">
              Portfolio étudiant - Campagne "13% d'avenir" • 
              <span className="text-upc-accent ml-2 font-semibold">Innovation • Excellence • Créativité</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App