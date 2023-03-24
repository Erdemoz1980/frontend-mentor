import data from './dataSocial.json';
import Header from "./components/Header";
import CardMain from './components/CardMain';
import CardViews from './components/CardViews';
import CardLikes from './components/CardLikes';
import Grid from './components/Grid';



const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <Grid data={data} component={CardMain} />
        <h2 className='seperator'>Overview - Today</h2>
        <Grid data={data} component={CardViews} />
        <Grid data={data} component={CardLikes} />
      
      </div>
     
    </>
  )
}

export default App