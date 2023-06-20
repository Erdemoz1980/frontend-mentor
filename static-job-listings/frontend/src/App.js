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
    if(keywords.length<1){
      setFilteredList(data);
    }    

    const filteredList = data.filter(item => {
      if (keywords.length < 1) {
        return item
      } else {
        if (keywords.every(keyword =>
        (keyword === item.role ||
          keyword === item.level ||
          item.languages.includes(keyword) ||
          item.tools.includes(keyword)
        )
        )) {
          return item
        } else {
          return false
        }
      }
    })

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
