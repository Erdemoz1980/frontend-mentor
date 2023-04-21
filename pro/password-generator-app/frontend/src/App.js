import { useState } from 'react';
import Generator from "./components/Generator";
import PasswordDisplay from './components/PasswordDisplay';

const App = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  return (
    <>
      <h2 className="main-title">Password Generator</h2>
       <PasswordDisplay password={password} error={error}/>
       <Generator setPassword={setPassword} setError={setError} />
    </>
  )
}

export default App