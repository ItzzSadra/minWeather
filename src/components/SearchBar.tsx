import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
interface SearchBarProps {
  onSearch: (location: string) => void;
}
export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch
}) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };
  return <form onSubmit={handleSubmit} className="p-3 sm:p-4 bg-white">
      <div className="relative">
        <input type="text" placeholder="Search location..." value={input} onChange={e => setInput(e.target.value)} className="w-full py-2 pl-3 pr-10 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" />
        <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors">
          <SearchIcon size={18} className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </form>;
};