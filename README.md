# First Class Care Transit

## About The Project

First Class Care Transit is a specialized transportation service dedicated to providing reliable and compassionate non-emergency medical transportation. I built this platform to help patients never miss their important medical appointments by connecting them with safe, comfortable rides. The project focuses on making medical transportation accessible and stress-free for everyone who needs it.

Visit our sites:
- Production: [https://firstclasscaretransit.com](https://firstclasscaretransit.com)
- Development: [https://abdirahman-yy.github.io/FirstClassCare](https://abdirahman-yy.github.io/FirstClassCare)

## Technology Stack

### Core Technologies
- **React**: I chose React for its component reusability and the large community support. Using functional components and hooks made state management much cleaner
- **TypeScript**: Implemented TypeScript to catch errors early in development and make the codebase more maintainable. The type safety has helped prevent many potential runtime errors
- **Node.js**: Used as the development environment and for running build scripts. The npm ecosystem made package management straightforward

### UI & Styling
- **Styled Components**: I used this for creating reusable styled components and maintaining a consistent theme throughout the application. The ability to have CSS-in-JS made responsive design much easier
- **Framer Motion**: Implemented smooth animations for page transitions and interactive elements. The declarative API made complex animations more manageable
- **Material UI**: Leveraged Material UI components to speed up development while maintaining a professional look. Customized the theme to match our brand colors

### Build Tools I Used
- **Webpack**: Configured for bundling and optimization. I set up code splitting to improve initial load times
- **ESLint**: Set up with custom rules to maintain code quality. Really helped me catch common mistakes early
- **Prettier**: Configured to work with ESLint for consistent code formatting across the project

### Testing Setup
- **Jest**: Implemented unit tests for utility functions and hooks
- **React Testing Library**: Used for component testing, focusing on user interactions and accessibility

## Key Features I Built

- **Booking System**
  - Built a real-time scheduling system
  - Integrated SMS notifications for ride updates
  - Added Google Calendar integration for appointments

- **Patient Portal**
  - Implemented secure user authentication
  - Created profiles with medical facility preferences
  - Added ride history tracking

- **Accessibility Features**
  - Ensured WCAG 2.1 compliance
  - Added screen reader support
  - Implemented keyboard navigation

- **Mobile Optimization**
  - Built with mobile-first approach
  - Added offline support using service workers
  - Optimized images and assets for faster loading

## Local Development Setup

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

### Environment Configuration

Create a `.env` file in the root directory:
```
REACT_APP_API_URL=your_api_url
REACT_APP_ENVIRONMENT=development
```

## Deployment Process

### GitHub Pages
```bash
npm run deploy
```

### Production Build
```bash
npm run build
```

## Project Structure

```
FirstClassCare/
├── src/
│   ├── components/          # UI Components
│   │   ├── common/         # Shared components (buttons, inputs)
│   │   ├── layout/         # Layout components (header, footer)
│   │   └── features/       # Feature components (booking, profiles)
│   ├── pages/              # Page components
│   ├── styles/             # Theme and global styles
│   ├── utils/              # Helper functions
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API integration
│   └── assets/             # Images and icons
├── public/                 # Static files
├── tests/                 # Test suites
└── config/                # Build configurations
```

## Development Practices I Follow

- **Code Style**: Using Airbnb style guide with some custom modifications
- **Git Workflow**: Feature branches with descriptive commit messages
- **Testing**: Aiming for good test coverage on critical features
- **Documentation**: Detailed comments for complex logic

## Want to Contribute?

I welcome contributions! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add: your feature description'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Contact

Developer: Abdirahman Mohamed
- Email: [your.email@domain.com]
- GitHub: [https://github.com/abdirahman-yy](https://github.com/abdirahman-yy)
- LinkedIn: [Your LinkedIn Profile]

Project Link: [https://github.com/abdirahman-yy/FirstClassCare](https://github.com/abdirahman-yy/FirstClassCare)

## License

Copyright © 2024 First Class Care Transit. All rights reserved.

---
Developed and maintained by Abdirahman Mohamed - Junior Full Stack Developer
Learning and growing while building real-world solutions 