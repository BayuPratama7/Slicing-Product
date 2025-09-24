import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Real-time search
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search for products, brands, categories..."
            className="w-full px-6 py-4 pl-14 pr-12 text-gray-900 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-lg"
          />
          
          {/* Search Icon */}
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <svg 
              className="w-6 h-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          
          {/* Clear Button */}
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          )}
        </div>
      </form>
      
      {/* Search Suggestions */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-gray-500 font-medium">Popular searches:</span>
        {['Gaming', 'Electronics', 'Audio', 'Accessories', 'Smartphone', 'Laptop'].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setSearchTerm(tag);
              onSearch(tag);
            }}
            className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors border border-gray-200"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;