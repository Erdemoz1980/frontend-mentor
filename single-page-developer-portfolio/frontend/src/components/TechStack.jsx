import portfolio from '../portfolio.json'; 

const TechStack = () => {
  return (
    <div className='tech-stack'>
      <header className="tech-stack-header">
        <h1>Projects</h1>
        <a href="/">Contact Me</a>
      </header>
      
      <div className="projects-grid">
        {portfolio.map(project => (
          <div key={project.id} className="tech-card">
            <div className="card-image">
              <img src={project.imageSm} alt="screenshot" />
            </div>
            <div className="card-text">
              <h4 className='card-title'>{project.name}</h4>
              <div className='card-stack'>
                {project.stack.map(stack => (
                  <small key={stack.id}>{stack.name}</small>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TechStack