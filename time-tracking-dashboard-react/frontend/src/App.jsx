import data from './data.json';
import CardBio from './components/CardBio';
import CardItem from './components/CardItem';
import { useState } from 'react';

const App = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');

  const handleTimeFrame = (newTimeFrame) => {
    setTimeFrame(newTimeFrame)
  }

  return (
    <main className='dashboard'>
      {
        data.map((item) => (
          item.type === 'bio'
            ? <CardBio bio={item} key={item.id} handleTimeFrame={handleTimeFrame} timeFrame={timeFrame} />
            : <CardItem activity={item} timeFrame={timeFrame} key={item.id} />
        ))
      }
  
    </main>
  )
}

export default App