import { useState } from 'react';
import IconMagnifyingGlass from './IconMagnifyingGlass';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

 
  const handleSearch = (input) => {
    input = input.trim();
  }


  return (
    <main className='search-bar-wrapper'>
      <div className="form-group">
        <input type="text" name="" id="" />
        <IconMagnifyingGlass />
      </div>
    </main>
  )
}

export default SearchBar