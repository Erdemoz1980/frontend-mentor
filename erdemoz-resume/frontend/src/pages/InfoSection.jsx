import IconEmail from '../components/IconEmail';
import IconPhone from '../components/IconPhone';
import IconLocationDot from '../components/IconLocationDot';
import IconGithub from '../components/IconGithub';
import IconUser from '../components/IconUser';

const InfoSection = () => {
  return (
    <main className='info-section-wrapper'>

      <section className='contact-section'>
        <h3 className='section-title'>Contact</h3>
        <ul className="menu contact-menu">
          <li><span><IconPhone /></span>647-687-1807</li>
          <li><span><IconEmail /></span>erdemozproductions@gmail.com</li>
          <li><span><IconLocationDot /></span>803-299 Glenlake Ave, Toronto, ON, M6P 4A6 </li>
          <li><span><IconGithub /></span><a href="https://github.com/Erdemoz1980" target='_blank' rel='noreferrer'>https://github.com/Erdemoz1980</a></li>
          <li><span><IconUser /></span><a href="https://www.erdemoz.io" target='_blank' rel='noreferrer'> www.erdemoz.io</a></li>
        </ul>
      </section>

      <section className="education-section">
        <h3 className='section-title'>Education</h3>
        <ul className='menu education-menu'>
          <li>
            <h4 className='sub-section-title'>Communication Studies</h4>
            <p>University of Windsor</p>
            <h5>2001-2005</h5>
          </li>
          <li>
            <h4 className="sub-section-title">Film Production</h4>
            <p>Toronto Metropolitan University</p>
            <h5>2011-2012</h5>
          </li>
          <li>
            <h4 className='sub-section-title'>Responsive Web Design Certification</h4>
            <p>FreeCodeCamp</p>
            <h5>2022-2023</h5>
          </li>
          <li>
            <h4 className='sub-section-title'>JavaScript Algorithms and Data Structures</h4>
            <p>FreeCodeCamp</p>
            <h5>2022-2023</h5>
          </li>
          <li>
            <h4 className='sub-section-title'>Modern Javascript</h4>
            <p>Udemy</p>
            <h5>2020</h5>
          </li>
          <li>
            <h4 className='sub-section-title'>MERN E-commerce Platform Full Stack Course</h4>
            <p>Udemy</p>
            <h5>2020-2021</h5>
          </li>
        </ul>
      </section>

      <section className="skills-section">
        <h3 className='section-title'>Skills</h3>
        <div className="skills-section-content">

          <section className="competent">
               <div className="competent-skills-container">
                <div className="front-end">
    <h4 className='sub-section-title small'>Front End</h4>
    <ul className="menu skills-menu">
      <li>HTML5</li>
      <li>CSS3
        <ul className='sub-menu'>
          <li>Sass</li>
          <li>Bootstrap</li>
          <li>MaterialUI</li>
        </ul>
      </li>
      <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>React Router</li>
    </ul>
            </div>
            <div className="back-end">
    <h4 className='sub-section-title small'>Back End</h4>
    <ul className="menu skills-menu">
      <li>Express</li>
      <li>NodeJS</li>
      <li>MongoDB</li>
      <li>Mongoose</li>
      <li>GraphQL</li>
      <li>Jason Web Token</li>
                </ul>
              </div>
              </div>
  
          </section>
      

 
          <div className="basic-level">
            <h4 className="sub-section-title small">Basic Level</h4>
            <ul className="menu skills-menu">
              <li>TypeScript</li>
              <li>MySQL</li>
              <li>NextJS</li>
            </ul>
          </div>
        </div>
  
</section>
    </main>
  )
};

export default InfoSection