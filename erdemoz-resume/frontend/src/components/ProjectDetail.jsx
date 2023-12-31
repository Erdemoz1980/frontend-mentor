

const ProjectDetail = ({title, description, technologies}) => {
  return (
    <main className="project-detail-wrapper">
      <h2 className="project-title">{title}</h2>
      <p className="project-desc">{description}</p>
      <ul className="technologies-list">
        {
          technologies.map(technology => (
            <li className="technology-title" key={technology.id}>{technology.name}</li>
          ))
        }
      </ul>

      
    </main>
  )
}

export default ProjectDetail