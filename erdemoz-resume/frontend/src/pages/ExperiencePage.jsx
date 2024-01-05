import ExperienceDetail from "../components/ExperienceDetail";
import ProjectDetail from '../components/ProjectDetail';


const ExperiencePage = () => {

  const experiences = [
    {
      id: 10001,
      jobTitle: 'Front End Developer',
      company: 'Fon Radar',
      yearsActive: '2022 - Present',
      tasks: [
        { id: 101, detail: 'Collaborated with the development team to build and maintain the frontend of financial applications.' },
        { id: 102, detail: 'Contributed to the implementation of responsive and user-friendly interfaces.' },
        { id: 103, detail: 'Collaborated directly with leadership to grasp project requirements and transform them into practical technical solutions.' },
        { id: 104, detail: 'Worked in  Agile development environment.'},
      ]
    }
  ];

  const projects = [
    {
      id: 10001,
      title: 'E-Commerce Platform',
      description: 'Developed a dynamic full-stack E-commerce platform, showcasing my proficiency in CSS, Javascript, React, Redux, ExpressJS, and MongoDB. Prioritized user experience with features such as secure user registration, login, and profile editing. Implemented efficient search and filtering functionalities, enhancing product discoverability, I also implemented responsive design principles, ensuring a flawless shopping experience across devices creating a seamless shopping experience.',
      technologies:[{id:1001,name:'Javascript'},{id:1002,name:'ExpressJS'},{id:1003,name:'React'},{id:1004,name:'MongoDB'}, {id:1005,name:'Redux'}, {id:1006,name:'Mongoose'}, {id:1007,name:'CSS'}, {id:1008,name:'Jason Web Token'},{id:1009,name:'JSX'}]
    },
    {
      id: 10002,
      title: 'Galleria Slideshow',
      description: 'Art gallery slideshow project showcasing advanced CSS layout, Javascript and React skills. Implemented a masonry layout, slideshow logic, and lightbox view for an engaging and dynamic user experience.',
      technologies:[{id:1001,name:'Javascript'},{id:1002,name:'JSX'},{id:1003,name:'React'},{id:1004,name:'CSS'}]
    },
    {
      id: 10003,
      title: 'Password Generator',
      description: 'Developed a sophisticated password generator app utilizing JSX, CSS, and Javascript. Implemented custom form controls and utilized Javascript logic to generate random passwords. The app dynamically adjusts password strength based on user preferences, providing a secure and customizable solution.',
      technologies:[{id:1001,name:'Javascript'},{id:1002,name:'JSX'},{id:1003,name:'React'},{id:1004,name:'CSS'}]
    },
    {
      id: 10004,
      title: 'Tip Calculator',
      description: ' Developed a user-friendly Tip Calculator app using React, Javascript, and CSS. The app allows users to split bills with ease by calculating tips based on various percentages. Implemented interactive features such as custom tip input and real-time validation to enhance user experience.',
      technologies:[{id:1001,name:'Javascript'},{id:1002,name:'JSX'},{id:1003,name:'React'},{id:1004,name:'CSS'}]
    }, {
      id: 10005,
      title: 'Job Listings with Filtering',
      description: 'Developed a dynamic job searching site using React, leveraging Javascript to implement advanced filtering based on selected categories. Applied expertise in handling JSON data provide seamless job exploration.',
      technologies:[{id:1001,name:'Javascript'},{id:1002,name:'JSX'},{id:1003,name:'React'},{id:1004,name:'CSS'}]
    }
  ]

  return (
    <main className='experience-page-wrapper'>
      <header className="experience-header summary">
 
        <h2 className="section-title">Summary</h2>
        <p>I am a React Front End developer actively seeking a challenging role in a vibrant company. With a strong foundation in writing accessible HTML, implementing modern CSS practices, and writing clean JavaScript, I bring energy, creativity, and a passion for delivering exceptional user experiences. Currently based in Toronto, Canada, I am open to both local and remote opportunities, drawing from my experience in thriving remote team environments. Beyond coding, you'll find me outdoors, whether I'm playing tennis, cycling, or running. My goal is to establish myself as a proficient Front End Developer, with an envisioned trajectory towards becoming a full-stack developer, where my growing appreciation for backend development can complement my expertise.</p>
      </header>

      

      <section className="experience-section">
      <h2 className="section-title">Experience</h2>
        {
          experiences.map(experience => (
            <ExperienceDetail {...experience} key={experience.id} />
          ))
        }
      </section>

      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        {
          projects.map(project => (
            <ProjectDetail {...project} key={project.id} />
          ))
        }
       
      </section>



    </main>
  )
}

export default ExperiencePage