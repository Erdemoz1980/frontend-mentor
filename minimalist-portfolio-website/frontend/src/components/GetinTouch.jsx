import IconGithub from './IconGithub';
import IconTwitter from './IconTwitter';
import IconLinkedIn from './IconLinkedIn';

const GetinTouch = () => {
  return (
    <div className='container'>
      <div className="getintouch-wrapper">
        <h2>Get in Touch </h2>
        <div className="getintouch-text-wrapper">
          <p className='getintouch-text'>I'd love to hear about what you're working on and how I could help. I'm currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in Toronto. But I'm also happy to hear about opportunites that don't fit that description. I'm a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
          <ul className='social-links'>
            <li><a href="https://github.com/Erdemoz1980" target='_blank' rel='noopener noreferrer'><IconGithub version='dark' /></a></li>
            <li><a href="https://twitter.com/ErdemOz1980" target='_blank' rel='noopener noreferrer' ><IconTwitter version='dark' /></a></li>
            <li><a href="https://www.linkedin.com/in/erdem-ozdemir-95148553/" target='_blank' rel='noopener noreferrer'><IconLinkedIn version='dark' /></a></li>
          </ul>
        </div>
      </div>   
    </div>
  )
}

export default GetinTouch