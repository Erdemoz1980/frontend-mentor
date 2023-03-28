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
    if (darkTheme) {
      document.body.style.background = 'var(--clrVeryDarkBlueBG)';
      document.documentElement.classList.remove('light-theme')
    } else {
      document.body.style.background = '#fff'
      document.documentElement.classList.add('light-theme')
    }    
  },[darkTheme])
  
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