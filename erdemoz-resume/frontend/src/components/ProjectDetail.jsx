

const ProjectDetail = ({title, description, technologies}) => {
  return (
    <main className="project-detail">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="technologies-list">
        {
          technologies.map(technology => (
            <li key={technology.id}>{technology.name}</li>
          ))
        }
      </ul>

      
    </main>
  )
}

export default ProjectDetail