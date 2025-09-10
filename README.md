# 🍴 Meal Explorer

A modern, responsive web application for discovering delicious recipes from around the world. Browse through various meal categories and explore detailed recipes with ingredients and cooking instructions.

![Meal Explorer](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

##  Features

- **Browse by Category**: Explore meals organized by categories like Beef, Chicken, Seafood, Vegetarian, and more
- **Detailed Recipe View**: Click on any meal to see:
  - Full ingredients list with measurements
  - Step-by-step cooking instructions
  - Recipe origin and category information
  - Direct link to video tutorials (when available)
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations and transitions
- **Real-time Data**: Fetches fresh recipe data from TheMealDB API

##  Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/meal-explorer.git
cd meal-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

##  Built With

- **React 19** - UI library for building user interfaces
- **Vite** - Next generation frontend tooling for fast development
- **Context API** - State management across components
- **CSS3** - Modern styling with animations and transitions
- **TheMealDB API** - Free meal database API

##  Project Structure

```
meal-explorer/
├── src/
│   ├── Components/
│   │   ├── Hero.jsx         # Header component with category selector
│   │   ├── MealCard.jsx     # Individual meal card component
│   │   └── MealList.jsx     # Grid layout for meal cards
│   ├── Contexts/
│   │   └── MealContext.jsx  # Global state management
│   ├── Layout/
│   │   └── OverLay.jsx      # Modal for detailed meal view
│   ├── assets/
│   │   └── omelette.png     # App logo
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/
├── package.json
└── vite.config.js
```

##  Core Functionality

### Meal Categories
The app supports browsing through multiple meal categories:
- Beef
- Chicken
- Dessert
- Lamb
- Pasta
- Pork
- Seafood
- Breakfast
- Vegetarian
- Vegan
- And more...

### API Integration
The application integrates with TheMealDB API to:
- Fetch meals by category
- Get detailed recipe information
- Display meal thumbnails and descriptions

##  Features Overview

### Home Page
- Eye-catching hero section with gradient background
- Dropdown menu for category selection
- Responsive grid layout for meal cards

### Meal Cards
- High-quality meal images
- Meal names with hover effects
- Click to view detailed information

### Recipe Modal
- Full recipe details in an overlay modal
- Organized sections for ingredients and instructions
- Video tutorial links when available
- Smooth open/close animations

##  Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the free meal API
- Icons and images from various open-source resources
- React community for excellent documentation and support


---

Made with ❤️ by [Mahmoud Osama]
