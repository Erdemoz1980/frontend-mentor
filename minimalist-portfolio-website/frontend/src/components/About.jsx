import profileImage from '../images/homepage/desktop/image-homepage-profile.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="profile-image-container">
        <img src={profileImage} alt="profile" />
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I'm based in Toronto, Canada, but I'm happy working remotely and have experience in remote teams. When I'm not coding, you'll find me outdoors.I love being out in nature whether that's going for a walk, run or cycling. I'd love you to check out my work.</p>
      </div>
      <button className="btn btn-secondary">Go to Portfolio</button>
    </section>
  )
};

export default About