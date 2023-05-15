import portfolio from '../portfolio.json';


const Projects = () => {
  return (
    <section className='projects-section'>
      <header className="projects-header">
        <h1>Projects</h1>
        <a className='btn' href="/">Contact Me</a>
      </header>
      <div className="projects-grid-container">
        {
          portfolio.map(project => (
            <div key={project.id} className='project-card'>
              <img src={project.imageLg} alt='project' />
              <h3>{project.name}</h3>
              {
                project.stack.map(stack => (
                  <p id={stack.id}>{stack.name}</p>
                ))
              }
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Projects