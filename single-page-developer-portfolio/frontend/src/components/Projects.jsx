import portfolio from '../portfolio.json';


const Projects = () => {
  return (
    <section className='projects-section'>
      <header className="projects-header">
        <h1 className='main-title'>Projects</h1>
        <a className='btn' href="/">Contact Me</a>
      </header>
      <div className="projects-grid-container">
        {
          portfolio.map(project => (
            <div key={project.id} className='project-card'>
              <img src={project.imageLg} alt='project' />
              <h2>{project.name}</h2>
              {
                project.stack.map(stack => (
                  <span key={stack.id}>{stack.name}</span>
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