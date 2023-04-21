import { useState } from "react";

const Generator = ({ setPassword, setError }) => {
  const [charLength, setCharLength] = useState(0);
  const [passwordControl, setPasswordControl] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
  });
  const [strength, setStrength] = useState(0);
  const { uppercase, lowercase, numbers, symbols } = passwordControl;
     
  const sliderStyle = {
    '--sliderProgressWidth': `${(charLength / 20) * 100}%`
  }


  const charPool = {
    uppercase: Array.from({ length: 26 }).map((_, i) => String.fromCharCode(i + 65)),
    lowercase: Array.from({ length: 26 }).map((_, i) => String.fromCharCode(i + 97)),
    numbers: [0,1,2,3,4,5,6,7,8,9],
    symbols: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '<', '>', ',', '.', '?', '/', '\\', '|', '~']
  };

  const generatePassword = () => {
    const numSelectedOptions = Object.values(passwordControl).filter(Boolean).length;
    setStrength(numSelectedOptions);
   
    
    if (charLength < 1 || numSelectedOptions < 1) {
      setError('Please set character length, and select at least one option')
      setPassword('')
    } else {
      if (charLength < numSelectedOptions) {
        setCharLength(numSelectedOptions)
        
      }
      let selectedCharPool = [];
      let guaranteedCharacters = '';
  
      for (let option in passwordControl) {
        if (passwordControl[option]) {
          selectedCharPool = [...selectedCharPool, ...charPool[option]];
          guaranteedCharacters += charPool[option][Math.floor(Math.random() * charPool[option].length)];
        }
      }
  
      const allSelectedCharPool = selectedCharPool.join('');
      let password = guaranteedCharacters;
  
      for (let i = 0; i < charLength - guaranteedCharacters.length; i++) {
        password += allSelectedCharPool[Math.floor(Math.random() * allSelectedCharPool.length)];
      }

       // Shuffle the password
    const passwordArray = password.split('');
    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }
  
      setPassword(passwordArray.join(''));
      setError('');
    }
  };

  const passwordStrength = {
    0: 'Weak',
    1: 'Weak',
    2: 'Weak',
    3: 'Medium',
    4: 'Strong',
  }
  
    return (
      <div className='generator-container'>
        <div className='char-length-container'>
          <h4>Character Length</h4>
          <h3 className="char-length-number">{charLength}</h3>
        </div>
        <input type="range" name="char-length" id="char-length-slider"
          min="0"
          max="20"
          value={charLength}
          onChange={(e) => setCharLength(e.target.value)}
          style={sliderStyle}
        />
        <section className="password-controls">
          <label htmlFor="uppercase">
            <input type="checkbox" name="uppercase" id="uppercase"
              checked={uppercase}
              onChange={() => setPasswordControl(prevState => ({ ...prevState, uppercase: !uppercase }))}
            />
      
            Include Uppercase Letters
          </label>
          <label htmlFor="lowercase">
            <input type="checkbox" name="lowercase" id="lowercase"
              checked={lowercase}
              onChange={() => setPasswordControl(prevState => ({ ...prevState, lowercase: !lowercase }))}
            />
            Include Lowercase Letters
          </label>
          <label htmlFor="numbers">
            <input type="checkbox" name="numbers" id="numbers"
              checked={numbers}
              onChange={() => setPasswordControl(prevState => ({
                ...prevState, numbers
                  : !numbers
              }))}
            />
            Include Numbers
          </label>
          <label htmlFor="symbols">
            <input type="checkbox" name="symbols" id="symbols"
              checked={symbols}
              onChange={() => setPasswordControl(prevState => ({ ...prevState, symbols: !symbols }))}
            />
            Include Symbols
          </label>
        </section>

        <section className="strength-container">
          <h4>Strength</h4>
          <div className="strength-display">
            <h3>{passwordStrength[strength]}</h3>
            <div className="strength-gage-container">
              <div className={`strength-gage-item ${strength===4 ? 'strong': strength>=3 ? 'medium' : strength>=1 ? 'weak' : '' }`}></div>
              <div className={`strength-gage-item ${strength===4 ? 'strong': strength>=3 ? 'medium' : strength>=2 ? 'weak' : '' }`}></div>
              <div className={`strength-gage-item ${strength===4 ? 'strong': strength>=3 ? 'medium' : '' }`}></div>
              <div className={`strength-gage-item ${strength>=4 ? 'strong' : ''}`}></div>
            </div>
          </div>
        </section>
        <button className="btn" onClick={generatePassword}>Generate
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" /></svg>
        </button>
      </div>
    )
  }


export default Generator