

const CoverLetter = () => {
  return (
    <div className='cover-letter-wrapper'>
      <header className="cover-letter-header">
        <section className="cover-letter-personal-info">
           <h2>Erdem Ozdemir</h2>
        <p>647-687-1807</p>
        <a className="personal-email" href='mailto:erdemozproductions@gmail.com'>erdemozproductions@gmail.com</a>
          <p>803-299 Glenlake Ave, Toronto, ON, M6P 4A6 </p>
          <p className="personal-site"><a href="https://www.erdemoz.io" rel='noreferrer' target='_blank'> www.erdemoz.io</a></p>
          <p className="personal-github"> <a href="https://github.com/Erdemoz1980" target='_blank' rel='noreferrer'>https://github.com/Erdemoz1980</a> </p>
        </section>

        <section className="cover-letter-company-info">
           <h2>Plexxis Software</h2>
          <p>14 Abacus Rd, Brampton, ON L6T 5B7</p>
          <p>905-889-8979</p>
          <p>www.plexxis.com</p>

        </section>
       
      </header>
      

      <p className="cover-letter-date">January 6th, 2024</p>
      
      <section className="cover-letter-text">
        
       
          <p className="cover-letter-salutation">Dear Hiring Manager,</p>
        <p className="cover-letter-p1">I'm Erdem Ozdemir, and I'm excited to express my interest in the <span className="highlight">Jr. Full Stack Javascript Developer</span>  position at <span className="highlight"> Plexxis Software.</span> I am confident that my skills align seamlessly with the requirements outlined in the job ad.</p>

        <p className="cover-letter-p2">
          My foundation in web development is rooted in writing accessible HTML, implementing modern CSS practices, and producing clean and efficient JavaScript code. This technical proficiency forms the backbone of my capabilities. Beyond that, I bring a genuine passion for crafting innovative solutions. I'm eager to contribute my energy, creativity, and commitment to creating exceptional user interfaces. These skills, coupled with my hands-on experience in React, Node.js, and MongoDB, make me a compelling candidate for this role.
        </p>

        <p className="cover-letter-p3">Plexxis' commitment to a collaborative, tight-knit environment resonates strongly with me. My self-driven journey into full-stack development, coupled with the diverse projects in my portfolio, reflects my dedication to continuous learning and pushing the boundaries of what's possible.</p>

        <p className="cover-letter-p4">I am excited about the prospect of contributing to the Plexxis team and leveraging my skills to contribute to the ongoing modernization efforts.</p>

        <p className="cover-letter-p-final"> Thank you for considering my application. I look forward to the opportunity to discuss in more detail how my background and enthusiasm align with the goals of your team.</p>

        <p className="cover-letter-signature">Sincerely,
          <p>Erdem Ozdemir</p>
        </p>
      
      </section>
     
    </div>
    
  )
};

export default CoverLetter