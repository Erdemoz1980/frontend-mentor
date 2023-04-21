import { useState } from 'react';
import Generator from "./components/Generator";
import PasswordDisplay from './components/PasswordDisplay';

const App = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  
  return (
    <>
      <h2 className="main-title">Password Generator</h2>
       <PasswordDisplay setError={setError} error={error} password={password} setCopied={setCopied} copied={copied} />
      <Generator setPassword={setPassword} setError={setError} setCopied={setCopied} />
    </>
  )
}

export default App