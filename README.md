# E-Commerce Product Catalog

A modern e-commerce product catalog built with React.js and Tailwind CSS featuring product grid cards, detailed modal views, search functionality, and pagination.

## Features

- **Product Grid**: Responsive grid layout with product cards showing image, name, price, rating, and stock status
- **Product Modal**: Detailed product view with full description, rating, stock info, and action buttons
- **Search Bar**: Real-time search functionality by product name or category
- **Pagination**: Navigate through products with page controls
- **Responsive Design**: Mobile-friendly design using Tailwind CSS
- **Interactive UI**: Hover effects, transitions, and smooth animations

## Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **State Management**: React useState hooks
- **Data**: JSON dummy data
- **Build Tool**: Create React App

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