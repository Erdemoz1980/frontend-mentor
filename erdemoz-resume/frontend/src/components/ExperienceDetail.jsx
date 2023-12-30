

const ExperienceDetail = ({jobTitle, company, yearsActive,tasks }) => {
  return (
    <main className="experience-detail">
        
      <section className="experience-details">
      <h2>{jobTitle}</h2>
      <p className="company-name">{company}</p>
        <p className="years-active">{yearsActive}</p>
      </section>
      
      <ul className="tasks-list">
        {
          tasks.map(task => (
            <li key={task.id}>{task.detail}</li>
          ))
        }
      </ul>
    </main>
  )
}

export default ExperienceDetail