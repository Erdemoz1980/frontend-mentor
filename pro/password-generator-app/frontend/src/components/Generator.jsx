import { useState } from "react";

const Generator = ({setPassword}) => {
  const [charLength, setCharLength] = useState(0);
  const [passwordControl, setPasswordControl] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
  })

  const { uppercase, lowercase, numbers, symbols } = passwordControl
     
  const sliderStyle = {
  '--sliderProgressWidth':`${(charLength/20)*100}%`
  }

  const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]\:;?><,./-="
  };

  let selectedCharSets = [];

  const generatePassword = () => {
    for (let option in passwordControl) {
      if (passwordControl[option]) {
        selectedCharSets.push(charSets[option])
      }
    };

    const allCharacters = selectedCharSets.join('')
    
    let password = '';
    for (let i = 0; i < charLength; i++){
      password+= allCharacters.charAt(Math.floor(Math.random()*allCharacters.length))
    }
  setPassword(password)
   }

  

  return (
    <div className='generator-container'>
      <div className="char-length-container">
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
            onChange={()=>setPasswordControl(prevState=>({...prevState,lowercase:!lowercase}))}
          />
          Include Lowercase Letters
        </label>
        <label htmlFor="numbers">      
          <input type="checkbox" name="numbers" id="numbers"
            checked={numbers}
            onChange={() => setPasswordControl(prevState => ({
              ...prevState, numbers
            :!numbers}))}
          />
          Include Numbers
        </label>
        <label htmlFor="symbols">
            <input type="checkbox" name="symbols" id="symbols"
            checked={symbols}
          onChange={()=>setPasswordControl(prevState=>({...prevState, symbols:!symbols}))}
          />
          Include Symbols
        </label>
      </section>

      <section className="strength-container">
        <h4>Strength</h4>
        <div className="strength-display">
          {/*<h3>Medium</h3>-->*/}
          <div className="strength-gage-container">
            <div className="strength-gage-item"></div>
            <div className="strength-gage-item"></div>
            <div className="strength-gage-item"></div>
            <div className="strength-gage-item"></div>
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