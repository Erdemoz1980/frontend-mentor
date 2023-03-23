import data from './dataSocial.json';
import Header from "./components/Header";
import CardMain from "./components/CardMain";
import CardOverview from './components/CardOverview';

const App = () => {
  return (
    <>
      <div className='container'>
      <Header />
         <div className='dashboard'>
         {
        data.map(profile => (
          <CardMain profile={profile} key={profile.id} />
       ))
          }
        </div>
        <h2 className='seperator'>Overview - Today</h2>
        <div className='dashboard'>
        {
            data.map(profile => (
              <CardOverview profile={profile} key={profile.id} />
            ))
          }
        </div>
      
      </div>
     
    </>
  )
}

export default App