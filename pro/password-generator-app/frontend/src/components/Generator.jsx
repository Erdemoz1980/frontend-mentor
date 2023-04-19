import { useState } from "react";
import IconArrowRight from '../assets/images/icon-arrow-right.svg'; 


const Generator = () => {
  const [charLength, setCharLength] = useState(4);
  const [passwordControl, setPasswordControl] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
  })
  const { uppercase, lowercase, numbers, symbols } = passwordControl;
   

  return (
    <div className='generator-container'>
      <div className="char-length-container">
        <h4>Character Length</h4>
        <h3 className="char-length-number">{charLength}</h3>
      </div>
     
      <input type="range" name="char-length" id="char-length-slider"
        min="4"
        max="20"
        value={charLength}
        onChange={(e)=>setCharLength(e.target.value)}
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

      <button className="btn">Generate <img src={IconArrowRight} alt='icon-right'/>  </button>




    </div>
  )
}

export default Generator