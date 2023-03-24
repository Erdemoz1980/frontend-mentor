import data from './dataSocial.json';
import Header from "./components/Header";
import CardMain from './components/CardMain';
import CardOverview from './components/CardOverview';
import Grid from './components/Grid';



const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <Grid data={data} component={CardMain} />
        <h2 className='seperator'>Overview - Today</h2>
        <Grid data={data} component={CardOverview} />
      
      </div>
     
    </>
  )
}

export default App