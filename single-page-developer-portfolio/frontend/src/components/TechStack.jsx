import techStack from '../techStack.json';
import rings from '../assets/images/pattern-rings.svg';

const TechStack = () => {

  return (
    <div className='tech-stack'>
      {/*<div className="ring-pattern-container">
        <img  src={rings} alt="rings" />
  </div>*/}
      
        <div className="tech-grid">
          {
            techStack.map(tech => (
              <div key={tech.id} className="tech">
                <h1 className="tech-skill">{tech.skill}</h1>
                <h3 className="years">{tech.years} Years Experience </h3>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default TechStack