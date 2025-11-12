import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Université de Paris Cité", 
  subtitle = "Portfolio Étudiant" 
}) => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean, professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-upc-primary via-upc-primary/90 to-upc-dark"></div>
      
      {/* University campus background image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&crop=center')`
        }}
      ></div>
      
      {/* Subtle geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-upc-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-upc-contrast/15 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 border-2 border-upc-accent/30 rotate-45"></div>
      </div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-upc-dark/30 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo de campagne officiel */}
        <div className="mb-8 animate-fade-in-down">
          <img 
            src="/logo-13davenir.svg" 
            alt="13% d'avenir - Université de Paris Cité" 
            className="h-32 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        
        {/* Main title with clean design */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            {title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/90 tracking-wide">
            {subtitle}
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Découvrez l'excellence académique et l'innovation étudiante. 
            Chaque projet représente notre engagement vers l'avenir : <span className="text-upc-accent font-semibold">13% d'avenir</span>, 
            100% d'excellence universitaire.
          </p>
        </div>
        
        {/* Clean CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-upc-accent hover:bg-upc-accent/90 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="flex items-center">
              Explorer les Projets
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button className="group px-8 py-4 border-2 border-white/30 rounded-lg text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              En savoir plus
            </span>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      

    </header>
  );
};

export default Header;