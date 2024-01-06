

const ProjectDetail = ({ title, description, technologies, links }) => {
  
  const highlightedDescription = (text, keywords) => {
    
    const regex = /[,.]/gi;

    return text.split(' ').map((word, index) => {
      const isKeyword = keywords.includes(word.toLowerCase().replace(regex, ''));
      return isKeyword ? <span key={index} className="highlight">{word+' '}</span> : word+' ';
    });
  };


  return (
    <main className="project-detail-wrapper">
      <h2 className="project-title">{title}</h2>
      <p className="project-desc">
      {highlightedDescription(description, technologies.map(tech => tech.name.toLowerCase()))}
      </p>
      <ul className="technologies-list">
        {
          technologies.map(tech => (
            <li className="technology-title" key={tech.id}>{tech.name}</li>
          ))
        }
      </ul>
      <section className="links">
        <h3 className="links-title">Links:</h3>
        <p className='links-key'>Live Demo:<a target="_blank" rel='noreferrer' href={links.liveDemo}>{links.liveDemo}</a></p>
        <p className='links-key'>Github Repository: <a target="_blank" rel='noreferrer' href={links.github}>{links.github}</a></p>
      </section>

      
    </main>
  )
}

export default ProjectDetail