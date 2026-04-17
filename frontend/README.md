# NextoBite React Application

A modern React implementation of the NextoBite neighborhood recipe platform, built with Tailwind CSS and Material Design.

## Features

- **Authentication System**: Login and Sign Up functionality with form validation
- **Responsive Design**: Mobile-first approach with full desktop support
- **Recipe Discovery**: Browse featured recipes from community chefs
- **Navigation**: Intuitive navigation with sidebar and top bar
- **User Profile**: Basic user management and logout functionality
- **Modern UI**: Material Design 3 color system with smooth animations

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nextobite-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
nextobite-react/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── Navigation.jsx
│   │   └── RecipeCard.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   └── LandingPage.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (irreversible)

## Technologies Used

- **React 18**: UI framework
- **React DOM**: React rendering for web
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Material Design 3**: Design system and color palette

## Features Implementation

### Authentication Context
Manages user authentication state and page navigation with the `AuthContext` provider.

### Recipe Cards
Reusable recipe card component displaying recipe details with hover effects.

### Responsive Navigation
Top navigation bar with user profile menu and sidebar with category navigation.

## Customization

Edit `tailwind.config.js` to customize colors, fonts, and design tokens to match your brand.

## License

This project is part of the FEDF exam workspace.
