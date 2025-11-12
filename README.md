# 🎓 Université de Paris Cité - "13% d'avenir"

**Campagne Portfolio Étudiant** - Un site web moderne qui célèbre l'excellence étudiante à travers la campagne "13% d'avenir", mettant en valeur les projets qui façonnent l'université de demain.

## ✨ Fonctionnalités

- **🎯 Campagne "13% d'avenir"** : Intégration complète du message et de l'identité de campagne
- **🎨 Couleurs Officielles UPC** : Palette rouge (#E60012), bleu (#003C71) et jaune d'espoir (#FFD93D)
- **✨ Banner Immersif** : Header avec campus background et animations géométriques aux couleurs UPC
- **🔥 Design Institutionnel** : Glassmorphism avec les codes visuels de l'université
- **📊 Statistiques "13% d'avenir"** : Tableaux de bord thématiques avec messaging campagne
- **🎭 Portfolio Thématique** : Projets présentés dans l'esprit "vision d'avenir"
- **🏷️ Filtrage Branded** : Interface aux couleurs UPC avec rappels campagne
- **💫 Animations Institutionnelles** : Transitions fluides respectant l'identité visuelle
- **📱 Responsive UPC** : Design adapté avec cohérence graphique sur tous supports
- **🎓 Branding Complet** : Intégration parfaite de l'identité Université de Paris Cité

## 🎯 La Campagne "13% d'avenir"

Cette application web incarne la campagne **"13% d'avenir"** de l'Université de Paris Cité, mettant l'accent sur :

- **� L'Excellence** : Les 13% de projets qui marquent l'avenir de l'université
- **💛 L'Innovation** : La créativité étudiante comme moteur de transformation
- **🔵 La Vision** : Construire ensemble l'université de demain
- **🌟 L'Impact** : Chaque projet contribue à façonner notre futur académique

### Identité Visuelle Campagne
- **Rouge UPC** (`#E60012`) : Passion, excellence, énergie universitaire  
- **Bleu UPC** (`#003C71`) : Confiance, savoir, tradition académique
- **Jaune Avenir** (`#FFD93D`) : Optimisme, innovation, vision du futur

## �🚀 Technologies utilisées

- **Frontend** : React 18 avec TypeScript
- **Build Tool** : Vite 6.0 pour un développement rapide
- **Styling** : Tailwind CSS avec palette UPC personnalisée
- **Linting** : ESLint avec configuration TypeScript
- **Package Manager** : npm

## 📦 Installation et lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone <url-du-repository>
cd upCite_Portfolio

# Installer les dépendances
npm install
```

### Développement
```bash
# Lancer le serveur de développement
npm run dev
```
Le site sera accessible sur `http://localhost:5173`

### Production
```bash
# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🏗️ Structure du projet

```
src/
├── components/           # Composants React réutilisables
│   ├── Header.tsx       # En-tête avec branding universitaire
│   ├── FilterBar.tsx    # Barre de filtres interactifs
│   └── ProjectCard.tsx  # Carte d'affichage des projets
├── data/
│   └── mockData.ts      # Données d'exemple des projets
├── types/
│   └── index.ts         # Définitions TypeScript
├── App.tsx              # Composant principal
├── main.tsx             # Point d'entrée de l'application
└── index.css            # Styles globaux avec Tailwind
```

## 🎯 Fonctionnalités détaillées

### Filtrage des projets
- **Par niveau** : L1, L2, L3, M1, M2, PhD
- **Par catégorie** : Web Development, AI/ML, Mobile, Data Science, Research, Design

### Types de projets supportés
- Développement web (React, Vue, Angular)
- Intelligence artificielle et machine learning
- Applications mobiles (React Native, Flutter)
- Science des données et analyse
- Projets de recherche académique
- Design UI/UX et systèmes de design

### Informations des projets
- Description détaillée
- Technologies utilisées
- Liens vers démo et code source
- Profil de l'étudiant créateur
- Date de completion
- Statut "projet mis en avant"

## 🎨 Personnalisation

### Couleurs du thème
Le projet utilise une palette personnalisée basée sur les couleurs de l'Université de Paris Cité :
- Bleu principal : `#1e3a8a` à `#3b82f6`
- Couleurs secondaires définies dans `tailwind.config.js`

### Ajout de nouveaux projets
Modifiez le fichier `src/data/mockData.ts` pour ajouter de nouveaux projets étudiants.

### Modification des filtres
Les options de filtrage peuvent être ajustées dans `src/components/FilterBar.tsx`.

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run lint` - Exécute ESLint pour vérifier le code
- `npm run preview` - Prévisualise le build de production

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobiles (320px+)
- 📱 Tablettes (768px+)
- 💻 Ordinateurs (1024px+)
- 🖥️ Grands écrans (1280px+)

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📝 License

© 2024 Université de Paris Cité. Tous droits réservés.

## 🆘 Support

Pour toute question ou problème, contactez l'équipe de développement de l'université.

---

**Développé avec ❤️ pour l'Université de Paris Cité**