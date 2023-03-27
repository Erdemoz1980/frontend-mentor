import { useState, useEffect } from 'react';
import data from './dataSocial.json';
import Header from "./components/Header";
import CardMain from './components/CardMain';
import CardViews from './components/CardViews';
import CardLikes from './components/CardLikes';
import Grid from './components/Grid';



const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const root = document.querySelector(':root');
    if (darkTheme) {
      root.style.setProperty('--clrBGColor', 'hsl(230, 17%, 14%)');
      document.documentElement.classList.add('dark');

    } else {
      root.style.setProperty('--clrBGColor', '#fff');
      document.documentElement.classList.remove('dark');
    }
  
  }, [darkTheme]);

  return (
    <>
      <div className='container'>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Grid data={data} component={CardMain} />
        <h2 className='seperator'>Overview - Today</h2>
        <Grid data={data} component={CardViews}/>
        <Grid data={data} component={CardLikes}/>
      
      </div>
     
    </>
  )
}

export default App