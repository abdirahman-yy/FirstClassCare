# First Class Care Transit

## About The Project

First Class Care Transit is a specialized transportation service dedicated to providing reliable and compassionate non-emergency medical transportation. Our platform connects patients with safe, comfortable rides to their medical appointments, ensuring they never miss important healthcare visits.

Visit our sites:
- Production: [https://firstclasscaretransit.com](https://firstclasscaretransit.com)
- Development: [https://abdirahman-yy.github.io/FirstClassCare](https://abdirahman-yy.github.io/FirstClassCare)

## Technology Stack

### Core Technologies
- **React (v18.2.0)**: JavaScript library for building the user interface, chosen for its component-based architecture and efficient rendering
- **TypeScript (v4.9.5)**: Adds static typing to JavaScript, enhancing code reliability and developer experience
- **Node.js (v14+)**: JavaScript runtime environment for building and running the application

### UI & Styling
- **Styled Components (v6.0.7)**: CSS-in-JS library for component-level styling with dynamic theming support
- **Framer Motion (v10.16.4)**: Production-ready motion library for React, handling all animations and transitions
- **Material UI (v5.14.8)**: React UI framework providing pre-built, customizable components adhering to Material Design

### Build & Development Tools
- **Webpack (v5.88.2)**: Module bundler for optimizing and packaging application assets
- **ESLint**: Static code analysis tool ensuring code quality and consistency
- **Prettier**: Code formatter maintaining consistent code style across the project

### Testing & Quality Assurance
- **Jest**: JavaScript testing framework for unit and integration tests
- **React Testing Library**: Testing utilities focused on user interaction testing

## Features

- **Appointment Scheduling System**
  - Real-time availability checking
  - Automated confirmation system
  - Calendar integration

- **User Management**
  - Secure patient profiles
  - Medical facility integration
  - Transportation history tracking

- **Accessibility & Compliance**
  - HIPAA compliant data handling
  - ADA accessibility standards
  - Screen reader optimization

- **Responsive Platform**
  - Mobile-first design
  - Cross-browser compatibility
  - Offline capabilities

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
```bash
npm install npm@latest -g
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/abdirahman-yy/FirstClassCare.git
cd FirstClassCare
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

### Environment Setup

Create a `.env` file in the root directory:
```
REACT_APP_API_URL=your_api_url
REACT_APP_ENVIRONMENT=development
```

## Deployment

### GitHub Pages Deployment
```bash
npm run deploy
```

### Production Build
```bash
npm run build
```

## Project Architecture

```
FirstClassCare/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Shared components
│   │   ├── layout/         # Layout components
│   │   └── features/       # Feature-specific components
│   ├── pages/              # Page components
│   ├── styles/             # Global styles and themes
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   └── assets/             # Static assets
├── public/                 # Public assets
├── tests/                  # Test files
└── config/                 # Configuration files
```

## Development Standards

- **Code Style**: Follows Airbnb JavaScript Style Guide
- **Commit Messages**: Conventional Commits specification
- **Branch Strategy**: GitFlow workflow
- **Testing**: Minimum 80% code coverage required
- **Documentation**: JSDoc for all components and functions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add: some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Project Maintainer: Abdirahman Mohamed
- Email: [project.email@domain.com]
- GitHub: [https://github.com/abdirahman-yy](https://github.com/abdirahman-yy)

Project Repository: [https://github.com/abdirahman-yy/FirstClassCare](https://github.com/abdirahman-yy/FirstClassCare)

## License

Copyright © 2024 First Class Care Transit. All rights reserved.

---
Developed and maintained by the First Class Care Transit Engineering Team 