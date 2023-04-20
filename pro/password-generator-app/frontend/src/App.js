import { useState } from 'react';
import Generator from "./components/Generator";
import PasswordDisplay from './components/PasswordDisplay';

const App = () => {
  const [passWord, setPassword] = useState('');
  
  return (
    <>
      <h2 className="main-title">Password Generator</h2>
       <PasswordDisplay password={passWord}/>
       <Generator setPassword={setPassword} />
    </>
  )
}

export default App