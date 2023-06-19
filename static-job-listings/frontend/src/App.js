import HomePage from './pages/HomePage';
import data from './data.json';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <>
    <TopBar />
    <HomePage data={data} />
    </>
  )
}

export default App
