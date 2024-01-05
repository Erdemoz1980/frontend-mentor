

const ProjectDetail = ({ title, description, technologies }) => {
  
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

      
    </main>
  )
}

export default ProjectDetail