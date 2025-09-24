# 🛍️ Slicing Product - E-Commerce Catalog

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.1.0-06B6D4.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A modern, responsive e-commerce product catalog built with **React.js** and **Tailwind CSS**. Features beautiful product cards, detailed modal views, real-time search functionality, and smooth pagination.

## 🎯 Live Demo
> [View Live Demo](https://bayupratama7.github.io/Slicing-Product) *(Coming Soon)*

## ✨ Preview
A beautiful and modern e-commerce catalog with premium product showcasing, search functionality, and responsive design.

## 🚀 Features

- 🎨 **Modern Design**: Clean and professional UI with Tailwind CSS
- 📱 **Responsive Layout**: Perfect viewing on all devices
- 🔍 **Real-time Search**: Search products by name or category
- 🏷️ **Product Cards**: Beautiful cards with images, ratings, and pricing
- 📋 **Product Modals**: Detailed view with full specifications
- 📄 **Pagination**: Smooth navigation through product collections
- ⚡ **Performance**: Fast loading with optimized React components
- 🛒 **Interactive UI**: Hover effects and smooth transitions

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg?logo=react) | Frontend Framework |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.1.0-06B6D4.svg?logo=tailwindcss) | Styling & Design |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?logo=javascript) | Programming Language |
| ![Create React App](https://img.shields.io/badge/CRA-5.0.1-09D3AC.svg?logo=create-react-app) | Build Tool |

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── ProductCard.js      # Individual product card component
│   ├── ProductModal.js     # Product detail modal
│   ├── SearchBar.js        # Search functionality
│   └── Pagination.js       # Pagination controls
├── data/
│   └── products.json       # Dummy product data
├── App.js                  # Main application component
├── index.js               # React DOM render
└── index.css              # Tailwind CSS imports
```

## Features Detail

### Product Cards
- Display product image, name, price in Indonesian Rupiah
- Show star ratings and stock status
- Category tags and hover effects
- Click to open detailed modal

### Product Modal
- Full product details with large image
- Complete description and specifications
- Star rating display
- Stock availability indicator
- Add to cart and wishlist buttons
- Additional service icons (shipping, warranty, etc.)

### Search Functionality
- Real-time search as you type
- Search by product name or category
- Popular search tags for quick filtering
- Clear search button

### Pagination
- Navigate through products with page controls
- Smart pagination with ellipsis for large page counts
- Page info display
- Responsive page number controls

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes Create React App abstraction (one-way operation)

## Customization

### Adding New Products
Edit `src/data/products.json` to add or modify products. Each product should have:
- `id`: Unique identifier
- `name`: Product name
- `price`: Price in IDR
- `image`: Product image URL
- `description`: Detailed description
- `category`: Product category
- `stock`: Available quantity
- `rating`: Star rating (0-5)

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Component styles in individual component files
- Global styles in `src/index.css`

## License

This project is for educational and demonstration purposes.