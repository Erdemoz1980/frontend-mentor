import Generator from "./components/Generator";
import PasswordDisplay from './components/PasswordDisplay';

const App = () => {
  
  return (
    <>
      <h2 className="main-title">Password Generator</h2>
       <PasswordDisplay />
       <Generator />
    </>
  )
}

export default App