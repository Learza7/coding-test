import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};
