import { Search } from 'lucide-react';
import React from 'react';

export default function SearchBar() {
  return (
    <div className=' items-center border border-gray-200 rounded-md px-2 py-1 hidden ring-gray-200 sm:flex shadow-sm'>
      <Search className='w-4 h-4 text-gray-500' />
      <input
        type='search'
        placeholder='Search'
        className='outline-none ml-2'
        id='search'
      />
    </div>
  );
}
