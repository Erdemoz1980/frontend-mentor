import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconMagnifyingGlass from './IconMagnifyingGlass';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate()
 
  const handleSearch = (e) => {
    e.preventDefault()
     
    const trimmedSearch = searchTerm.trim().toLowerCase()

    if (trimmedSearch) {
      navigate(`/search/${trimmedSearch}`)
    } else {
      navigate('/')
    }

  };


  return (
    <main className='search-bar-wrapper'>
      <form onSubmit={handleSearch}>
      <div className="form-group">
        <input type="text"  value={searchTerm} placeholder='Search products...' onChange={(e)=>setSearchTerm(e.target.value)} />
        <IconMagnifyingGlass />
        </div>
        <button>Search</button>
        </form>
    </main>
  )
}

export default SearchBar