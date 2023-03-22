import data from './data.json';
import CardBio from './components/CardBio';
import CardItem from './components/CardItem'

const App = () => {
  return (
    <main className='dashboard'>
      {
        data.map((item, index) => (
          item.type === 'bio'
            ? <CardBio bio={item} key={item.id} />
            : <CardItem activity={item} key={item.id} />
        ))
      }
  
    </main>
  )
}

export default App