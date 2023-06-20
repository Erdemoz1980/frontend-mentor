import { useState, useEffect } from 'react';
import { Context } from './Context';
import HomePage from './pages/HomePage';
import FilterBox from './components/FilterBox';
import data from './data.json';
import TopBar from './components/TopBar';

const App = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const filteredList = data.filter(item => {
      if (keywords.length < 1) {
        return data;
      } else {
        return (
          keywords.includes(item.role) ||
          keywords.includes(item.level) ||
          item.languages.some(language => keywords.includes(language)) ||
          item.tools.some(tool => keywords.includes(tool))
        );
      }
    });
    setFilteredList(filteredList);
      
  }, [keywords]);


  return (
    <Context.Provider value={{ keywords, setKeywords }}>
      <TopBar keywords={keywords} />
      {keywords.length > 0 && <FilterBox keywords={keywords} setKeywords={setKeywords} />}
      <HomePage filteredList={filteredList} />
    </Context.Provider>
  )
};

export default App
